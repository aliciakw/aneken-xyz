<template>
  <div class="AnnouncementBlock position-relative flex flex-col align-end py1" :style="cssVars">
    <div class="AnnouncementBlock__callout bg-black position-relative border-burnt-orange">
      <div class="flex flex-row justify-end m_5">
        <div v-if="data.icon_image" class="AnnouncementBlock__image mrauto bg-burnt-orange-dark border-burnt-orange-dark circle overflow-hidden flex-none">
          <ImageLoader v-bind:src="data.icon_image.url" v-bind:alt="data.icon_image.alt" />
        </div>
        <p v-if="data.published_at" class="detail color-slate">{{formattedDate}}</p>
        <a class="AnnouncementBlock__like-button px_5" v-on:click="toggleLiked">
          <img v-if="liked" height="14" src="img/heart--filled.svg"/>
          <img v-else height="14" src="img/heart.svg"/>
        </a>
      </div>
      <div v-html="serializedMessage" class="v-html m1" />
    </div>
  </div>
</template>
<script>
import { DateTime } from 'luxon';
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
  data() {
    return {
      liked: false,
    };
  },
  methods: {
    toggleLiked() {
      this.liked = !this.liked;
    }
  },
  computed: {
    cssVars() {
      return {
        '--img-left': this.data.orientation && this.data.orientation === 'left' ? '-90px' : 'initial',
        '--img-right': this.data.orientation && this.data.orientation === 'left' ? 'initial' : '-90px',
        '--img-url': `url('${this.data.icon_image.url}')`,
        '--callout-m-left': this.data.orientation && this.data.orientation === 'left' ? '90px' : 0,
        '--callout-m-right': this.data.orientation && this.data.orientation === 'left' ? 0 : '90px',
        '--caret-left': this.data.orientation && this.data.orientation === 'left' ? '-18px' : 'initial',
        '--caret-right': this.data.orientation && this.data.orientation === 'left' ? 'initial' : '-18px',
        '--caret-before-left': this.data.orientation && this.data.orientation === 'left' ? '-20px' : 'initial',
        '--caret-before-right': this.data.orientation && this.data.orientation === 'left' ? 'initial' : '-20px',
        '--caret-rotation': this.data.orientation && this.data.orientation === 'left' ? 'rotate(0)': 'rotate(180deg)',
      }
    },
    formattedDate() {
      if (this.data.published_at) {
        try {
          return DateTime.fromISO(this.data.published_at).toLocaleString(DateTime.DATETIME_SHORT);
        } catch {
          return 'INVALID DATE';
        }
      }
      return '';
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
  z-index: 2;
}
.AnnouncementBlock__callout a {
  color: #be612e;
}

.AnnouncementBlock__like-button {
  margin-left: 0.25rem;
}
.AnnouncementBlock__like-button img {
  margin-top: 1px;
}

@media screen and (min-width: 770px) {
  .AnnouncementBlock {
    flex-direction: row;
    align-items: flex-start;
  }
  .AnnouncementBlock__image {
    margin-left: 0;
    position: absolute;
    top: calc(1rem + 10px);
    right: var(--img-right);
    left: var(--img-left);
  }
  .AnnouncementBlock__callout {
    margin-right: var(--callout-m-right);
    margin-left: var(--callout-m-left);
  }
  .AnnouncementBlock__callout::after {
    content: "";
    width: 0;
    height: 0;
    border-top: 18px solid transparent;
    border-bottom: 18px solid transparent;
    border-right:18px solid #131921;
    position: absolute;
    transform: var(--caret-rotation);
    right: var(--caret-right);
    left: var(--caret-left);
    top: 38px;
  }
  .AnnouncementBlock__callout::before {
    content: "";
    width: 0;
    height: 0;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
    border-right:20px solid #f5ab82;
    position: absolute;
    transform: var(--caret-rotation);
    right: var(--caret-before-right);
    left: var(--caret-before-left);
    top: 36px;
  }
}

</style>