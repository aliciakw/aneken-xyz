<template>
  <div class="PageContainer flex flex-col align-center" v-if="blocks">
    <div class="PageContainer__wrapper" v-for="block in blocks" v-bind:key="block.id">
      <ImageBlock v-if="block.type === 'imageblock'" v-bind:data="block.data" />
    </div>
  </div>
  <p v-else class="heading amatic-sc text-center">PageContainer :: {{ slug }}</p>
</template>
<script>
import ImageBlock from './ImageBlock';
const graphQuery = `{
  page {
    title
    block_links {
      block {
        ...on imageblock {
          title
          image
        }
      }
    }
  }
}`;
export default {
  name: 'PageContainer',
  components: {
    ImageBlock
  },
  props: {
    slug: String,
  },
  data() {
    return {
      blocks: null
    };
  },
  mounted() {
    this.loadBlocks();
  },
  methods: {
    loadBlocks: function() {
      this.$prismic.client.getByUID('page', this.slug, { 'graphQuery': graphQuery })
        .then((document) => {
          if (document && document.data && Array.isArray(document.data.block_links)) {
            const blocks = document.data.block_links.reduce((acc, blockFields) => {
              if (blockFields.block.type && !blockFields.block.isBroken) {
                acc.push({
                  id: blockFields.block.id,
                  type: blockFields.block.type,
                  data: blockFields.block.data,
                });
              }
              return acc;
            }, []);
            this.blocks = blocks;
          }
        });
    }
  }
}
</script>

<style>
@media screen and (min-width: 550px) {
  .PageContainer {
    padding: 0 2rem;
  }
  .PageContainer__wrapper {
    max-width: 900px;
  }
}

</style>