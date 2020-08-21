<template>
  <div v-if="blocks" class="BlockSwitch flex flex-col align-center">
    <div class="BlockSwitch__wrapper flex-1 flex" v-for="block in blocks" v-bind:key="block.id">
      <BandcampBlock v-if="block.type === 'bandcamp_block'" v-bind:data="block.data" />
      <ImageBlock v-else-if="block.type === 'imageblock'" v-bind:data="block.data" />
      <TextBlock v-else-if="block.type === 'text_block'" v-bind:data="block.data" />
      <VideoBlock v-else-if="block.type === 'video_block'" v-bind:data="block.data" />
      <p v-else class="detail color-gray"><em>Unable to display content for {{block.type}} {{block.id}}</em></p>
    </div>
  </div>
  <NotFoundComponent v-else v-bind:message="notFoundMessage" v-bind:image="notFoundImage" />
</template>
<script>
import BandcampBlock from '../components/BandcampBlock';
import ImageBlock from '../components/ImageBlock';
import TextBlock from '../components/TextBlock';
import VideoBlock from '../components/VideoBlock';
import NotFoundComponent from '../components/NotFoundComponent';
const graphQuery = `{
  page {
    title
    background_color
    background_image
    block_links {
      block {
        ...on imageblock {
          title
          image
          caption
        }
        ... on video_block {
          video_url
        }
        ... on bandcamp_block {
          album_art
          album_url
          bandcamp_album_id
          cta_label
          cta_target_blank
          cta_url
          dark_mode
          link_color
          message
          message_icon
          title
        }

        ... on text_block {
          body
          background_color
          background_image
          heading_color
          layout
          text_color
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
    TextBlock,
    VideoBlock,
    NotFoundComponent,
  },
  props: {
    slug: String,
    notFoundMessage: String,
    notFoundImage: {
      alt: String,
      url: String,
    },
    setBackgroundVars: Function,
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

            const bgImageUrl = document.data.background_image ? document.data.background_image.url : '';
            const bgColor = document.data.background_color;
            this.setBackgroundVars(bgColor, bgImageUrl);
          }
        });
    }
  }
}
</script>

<style>
.BlockSwitch {
  min-height: calc(100vh - 140px);
}
@media screen and (min-width: 500px) {
  .BlockSwitch__wrapper {
    width: 100%;
    max-width: 900px;
  }
}
</style>