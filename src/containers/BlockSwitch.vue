<template>
  <div class="BlockSwitch flex flex-col align-center">
    <div class="BlockSwitch__wrapper flex" v-for="link in blockLinks" v-bind:key="link.block.id">
      <LayoutSwitch v-if="link.block.type === 'layout_block'" v-bind:data="link.block.data" />
      <BandcampBlock v-else-if="link.block.type === 'bandcamp_block'" v-bind:data="link.block.data" />
      <ImageBlock v-else-if="link.block.type === 'imageblock'" v-bind:data="link.block.data" />
      <TextBlock
        v-else-if="link.block.type === 'text_block' && link.block.data.variant === 'default'" v-bind:data="link.block.data"
      />
      <AnnouncementBlock
        v-else-if="link.block.type === 'text_block' && link.block.data.variant === 'announcement'" v-bind:data="link.block.data"
      />
      <VideoBlock v-else-if="link.block.type === 'video_block'" v-bind:data="link.block.data" />
      <p v-else class="detail color-gray">
        <em>Unable to display content for {{link.block.type}} {{link.block.id}}</em>
      </p>
    </div>
  </div>
</template>

<script>
import AnnouncementBlock from '../components/AnnouncementBlock';
import BandcampBlock from '../components/BandcampBlock';
import ImageBlock from '../components/ImageBlock';
import TextBlock from '../components/TextBlock';
import VideoBlock from '../components/VideoBlock';
import LayoutSwitch from '../layouts/LayoutSwitch';

export default {
  name: 'BlockSwitch',
  components: {
    AnnouncementBlock,
    BandcampBlock,
    ImageBlock,
    LayoutSwitch,
    TextBlock,
    VideoBlock,
  },
  props: {
    blockLinks: Array,
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