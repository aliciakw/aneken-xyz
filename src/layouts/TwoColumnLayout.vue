<template>
  <div class="TwoColumnLayout flex flex-col md-flex-row">
    <div class="TwoColumnLayout__column flex flex-col flex-1">
      <BlockSwitch v-if="data.block_links_1" v-bind:blockLinks="data.block_links_1" />
    </div>
    <div class="TwoColumnLayout__column flex flex-col flex-1">
     <BlockSwitch v-if="data.block_links_2" v-bind:blockLinks="data.block_links_2" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'TwoColumnLayout',
  props: {
    data: {
      layout_type: String,
      block_links_1: Array,
      block_links_2: Array,
    }
  }
}
</script>

<style scoped>
@media screen and (min-width: 770px) {
  .TwoColumnLayout__column {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>
