<template>
  <div class="PageContainer flex flex-col align-center" v-if="blocks">
    <div class="PageContainer__wrapper" v-for="block in blocks" v-bind:key="block.id">
      <ImageBlock v-if="block.type === 'imageblock'" v-bind:data="block.data" />
      <VideoBlock v-if="block.type === 'video_block'" v-bind:data="block.data" />
    </div>
  </div>  
</template>
<script>
import ImageBlock from '../components/ImageBlock';
import VideoBlock from '../components/VideoBlock';
const graphQuery = `{
  page {
    title
    block_links {
      block {
        ...on imageblock {
          title
          image
        }
        ...on video_block {
          video_url
        }
      }
    }
  }
}`;
export default {
  name: 'PageContainer',
  components: {
    ImageBlock,
    VideoBlock,
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
  .PageContainer__wrapper {
    max-width: 900px;
  }
}

</style>