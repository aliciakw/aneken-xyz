<template>
  <div class="BlockSwitch flex flex-col">
    <div v-for="link in blockLinks" v-bind:key="link.block.id">
      <LayoutSwitch v-if="link.block.type === 'layout_block'" v-bind:data="link.block.data" />
      <BandcampBlock v-else-if="link.block.type === 'bandcamp_block'" v-bind:data="link.block.data" />
      <ContactForm v-else-if="link.block.type === 'form_block' && link.block.data && link.block.data.form_type === 'Contact Form'" v-bind:data="link.block.data" />
      <ImageBlock v-else-if="link.block.type === 'imageblock'" v-bind:data="link.block.data" />
      <TextBlock
        v-else-if="link.block.type === 'text_block' && link.block.data.variant === 'default'" v-bind:data="link.block.data"
      />
      <AnnouncementBlock
        v-else-if="link.block.type === 'text_block' && link.block.data.variant === 'announcement'" v-bind:data="link.block.data"
      />
      <VideoBlock v-else-if="link.block.type === 'video_block'" v-bind:data="link.block.data" />
    </div>
  </div>
</template>

<script>
import AnnouncementBlock from '../components/AnnouncementBlock';
import BandcampBlock from '../components/BandcampBlock';
import ContactForm from '../components/ContactForm';
import ImageBlock from '../components/ImageBlock';
import TextBlock from '../components/TextBlock';
import VideoBlock from '../components/VideoBlock';
import LayoutSwitch from '../layouts/LayoutSwitch';

export default {
  name: 'BlockSwitch',
  components: {
    AnnouncementBlock,
    BandcampBlock,
    ContactForm,
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
