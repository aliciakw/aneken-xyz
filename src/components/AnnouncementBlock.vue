<template>
  <div class="AnnouncementBlock position-relative flex flex-col align-end py1" :style="cssVars">
    <div 
      v-html="serializedMessage" 
      class="AnnouncementBlock__callout v-html position-relative bg-black border-burnt-orange pt1_5 px1_5 pb1"
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
      icon_image: {
        url: String,
        alt: String,
      },
      message: Array,
      orientation: String,
      published_at: Date,
    },
  },
  computed: {
    cssVars() {
      return {
        '--img-left': this.data.orientation && this.data.orientation === 'left' ? 0 : 'initial',
        '--img-right': this.data.orientation && this.data.orientation === 'left' ? 'initial' : 0,
        '--img-url': `url('${this.data.icon_image.url}')`,
        '--callout-m-left': this.data.orientation && this.data.orientation === 'left' ? '90px' : 0,
        '--callout-m-right': this.data.orientation && this.data.orientation === 'left' ? 0 : '90px',
        '--caret-left': this.data.orientation && this.data.orientation === 'left' ? '-16px' : 'initial',
        '--caret-right': this.data.orientation && this.data.orientation === 'left' ? 'initial' : '-16px',
        '--caret-rotation': this.data.orientation && this.data.orientation === 'left' ? 'rotate(225deg)': 'rotate(45deg)',
      }
    },
    serializedMessage: function() {
      if (this.data && this.data.message) {
        return RichText.asHtml(this.data.message);
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
    right: var(--img-right);
    left: var(--img-left);
  }
  .AnnouncementBlock__callout {
    margin-right: var(--callout-m-right);
    margin-left: var(--callout-m-left);
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
    transform: var(--caret-rotation);
    right: var(--caret-right);
    left: var(--caret-left);
    top: 38px;
  }
}

</style>