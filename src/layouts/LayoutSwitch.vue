<template>
  <div class="LayoutBlock flex flex-1">
    <ThreeColumnLayout v-if="data.layout_type === '1:1:1'" v-bind:data="data" />
    <p v-else class="detail color-gray">
      <em>Unable to display layout {{data.layout_type}}</em>
    </p>
  </div>
</template>

<script>
import ThreeColumnLayout from './ThreeColumnLayout';
export default {
  name :'LayoutSwitch',
  components: {
    ThreeColumnLayout
  },
  props: {
    data: {
      layout_type: String,
      block_links_1: Array,
      block_links_2: Array,
      block_links_3: Array,
    }
  }
}
</script>