<template>
  <div class="BlockSwitch flex flex-col align-center">
    <div v-if="blocks">
      <div class="BlockSwitch__wrapper" v-for="block in blocks" v-bind:key="block.id">
        <BandcampBlock v-if="block.type === 'bandcamp_block'" v-bind:data="block.data" />
        <ImageBlock v-if="block.type === 'imageblock'" v-bind:data="block.data" />
        <VideoBlock v-if="block.type === 'video_block'" v-bind:data="block.data" />
      </div>
    </div>
    <NotFoundComponent v-else v-bind:message="notFoundMessage" v-bind:image="notFoundImage" />
  </div> 
</template>
<script>
import BandcampBlock from '../components/BandcampBlock';
import ImageBlock from '../components/ImageBlock';
import VideoBlock from '../components/VideoBlock';
import NotFoundComponent from '../components/NotFoundComponent';
const graphQuery = `{
  page {
    title
    block_links {
      block {
        ...on imageblock {
          title
          image
          caption
        }
        ...on video_block {
          video_url
        }
        ... on bandcamp_block {
          album_art
          album_url
          bandcamp_album_id
          link_color
          dark_mode
          message
          title
        }
      }
    }
  }
}`;
export default {
  name: 'BlockSwitch',
  components: {
    BandcampBlock,
    ImageBlock,
    VideoBlock,
    NotFoundComponent,
  },
  props: {
    slug: String,
    notFoundMessage: String,
    notFoundImage: {
      alt: String,
      url: String,
    }
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
.BlockSwitch__wrapper {
  min-height: calc(100vh - 140px);
}
.NotFound {
  min-height: calc(100vh - 140px);
}
@media screen and (min-width: 550px) {
  .BlockSwitch__wrapper {
    width: 100%;
    max-width: 900px;
  }
}
</style>