<template>
  <div class="BlockSwitch flex flex-col align-center">
    <div class="BlockSwitch__wrapper flex-1 flex" v-for="block in blocks" v-bind:key="block.id">
      <BandcampBlock v-if="block.type === 'bandcamp_block'" v-bind:data="block.data" />
      <ImageBlock v-else-if="block.type === 'imageblock'" v-bind:data="block.data" />
      <TextBlock v-else-if="block.type === 'text_block'" v-bind:data="block.data" />
      <VideoBlock v-else-if="block.type === 'video_block'" v-bind:data="block.data" />
      <p v-else class="detail color-gray"><em>Unable to display content for {{block.type}} {{block.id}}</em></p>
    </div>
  </div>
</template>

<script>
import BandcampBlock from '../components/BandcampBlock';
import ImageBlock from '../components/ImageBlock';
import TextBlock from '../components/TextBlock';
import VideoBlock from '../components/VideoBlock';

export default {
  name: 'BlockSwitch',
  components: {
    BandcampBlock,
    ImageBlock,
    TextBlock,
    VideoBlock,
  },
  props: {
    blocks: Array,
  },
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