<template>
  <div class="ThreeColumnLayout flex flex-col md-flex-row">
    <div class="ThreeColumnLayout__column flex flex-col flex-1">
      <BlockSwitch v-if="data.block_links_1" v-bind:blockLinks="data.block_links_1" />
    </div>
    <div class="ThreeColumnLayout__column flex flex-col flex-1">
     <BlockSwitch v-if="data.block_links_2" v-bind:blockLinks="data.block_links_2" justify="center" />
    </div>
    <div class="ThreeColumnLayout__column flex flex-col flex-1">
     <BlockSwitch v-if="data.block_links_3" v-bind:blockLinks="data.block_links_3" justify="flex-end" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'ThreeColumnLayout',
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

<style scoped>
@media screen and (min-width: 770px) {
  .ThreeColumnLayout__column {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>