<template>
  <div class="AnnouncementBlock position-relative flex flex-col align-end py1" :style="cssVars">
    <div 
      v-html="serializedMessage" 
      class="AnnouncementBlock__callout position-relative bg-black border-burnt-orange pt1_5 px1_5 pb1"
    />
    <div v-if="data.icon_image" class="AnnouncementBlock__image mxauto bg-burnt-orange-dark border-burnt-orange-dark circle overflow-hidden flex-none">
      <ImageLoader v-bind:src="data.icon_image.url" v-bind:alt="data.icon_image.alt" />
    </div>
  </div>
</template>
<script>
import { RichText } from 'prismic-dom';
import ImageLoader from '../containers/ImageLoader';
export default {
  name: 'AnnouncementBlock',
  components: {
    ImageLoader,
  },
  props: {
    data: {
      body: Array,
      background_color: String,
      heading_color: String,
      icon_image: {
        url: String,
        alt: String,
      },
      text_color: String,
      variant: String,
    },
  },
  computed: {
    cssVars() {
      return {
        '--img-url': `url('${this.data.icon_image.url}')`,
      }
    },
    serializedMessage: function() {
      if (this.data && this.data.body) {
        return RichText.asHtml(this.data.body);
      }
      return '';
    }
  },
}
</script>
<style>
.AnnouncementBlock__image {
  width: 50px;
  height: 50px;
  border-width: 2px;
  margin-top: -25px;
  z-index: 2;
}
.AnnouncementBlock h1, .AnnouncementBlock h2, .AnnouncementBlock h3, .AnnouncementBlock h4, .AnnouncementBlock h5, .AnnouncementBlock h6, .AnnouncementBlock p {
  margin-bottom: 1rem;
}
.AnnouncementBlock__callout p {
  font-size: 0.8rem;
  line-height: 1.25rem;
}
.AnnouncementBlock__callout a {
  color: #be612e;
}

@media screen and (min-width: 770px) {
  .AnnouncementBlock {
    flex-direction: row;
    align-items: flex-start;
  }
  .AnnouncementBlock__image {
    margin-left: 0;
    position: absolute;
    top: calc(1rem + 50px);
    right: 0;
  }
  .AnnouncementBlock__callout {
    margin-right: 90px;
  }
  .AnnouncementBlock__callout::after {
    content: "";
    width: 30px;
    height: 30px;
    background-color: #131921;
    border-color: #f5ab82;
    border-style: solid;
    border-width: 1px 1px 0 0;
    position: absolute;
    transform: rotate(45deg);
    right: -16px;
    top: 38px;
  }
}

</style>