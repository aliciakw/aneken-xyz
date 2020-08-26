<template>
  <div class="BlockSwitch flex flex-col h100" :style="cssVars">
    <div v-for="link in blockLinks" v-bind:key="link.block.id">
      <LayoutSwitch v-if="link.block.type === 'layout_block'" v-bind:data="link.block.data" />
      <BandcampBlock v-else-if="link.block.type === 'bandcamp_block'" v-bind:data="link.block.data" />
      <ContactForm v-else-if="link.block.type === 'form_block' && link.block.data && link.block.data.form_type === 'Contact Form'" v-bind:data="link.block.data" />
      <NewsletterSubscriptionForm v-else-if="link.block.type === 'form_block' && link.block.data && link.block.data.form_type === 'Newsletter Subscription Form'" v-bind:data="link.block.data" />
      <ImageBlock v-else-if="link.block.type === 'imageblock'" v-bind:data="link.block.data" />
      <SpotifyBlock v-else-if="link.block.type === 'spotify_block'" v-bind:data="link.block.data" />
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
import NewsletterSubscriptionForm from '../components/NewsletterSubscriptionForm';
import SpotifyBlock from '../components/SpotifyBlock';
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
    NewsletterSubscriptionForm,
    SpotifyBlock,
    TextBlock,
    VideoBlock,
  },
  props: {
    align: String,
    blockLinks: Array,
    justify: String,
  },
  computed: {
    cssVars() {
      return {
        '--align-items': this.justify || 'flex-start',
        '--justify-content': this.align || 'flex-start',
      }
    }
  }
}
</script>

<style scoped>
.BlockSwitch {
  align-items: var(--align-items);
  justify-content: var(--justify-content);
}
</style>
