<template>
  <div v-if="blocks">
    <div v-for="block in blocks" v-bind:key="block.id">
      <ImageBlock v-if="block.type === 'imageblock'" />
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
          console.log(document.data);
          if (document && document.data && Array.isArray(document.data.block_links)) {
            const blocks = document.data.block_links.reduce((acc, blockFields) => {
              if (blockFields.block.type && !blockFields.block.isBroken) {
                console.log('>', blockFields.block.data)
                acc.push(blockFields.block);
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