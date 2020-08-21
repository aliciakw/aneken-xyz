<template>
  <div class="ThreeColumnLayout flex">
    <div class="flex-1">
      <BlockSwitch v-if="data.block_links_1" v-bind:blockLinks="data.block_links_1" />
    </div>
    <div class="flex-1">
     <BlockSwitch v-if="data.block_links_2" v-bind:data="data.block_links_2" />
    </div>
    <div class="flex-1">
     <BlockSwitch v-if="data.block_links_3" v-bind:data="data.block_links_3" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'ThreeColumnLayout',
  // components: {
  //   BlockSwitch
  // },
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

<style>
@media screen and (min-width: 770px) {
  .ThreeColumnLayout {
    flex-direction: row;
    /* display: grid;
    grid-template-columns: 33% 33% 33%;
    grid-column-gap: 2rem; */
  }
}
</style>