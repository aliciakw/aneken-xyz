<template>
  <div class="w100 flex flex-col md-flex-row">
    <div class="flex-1">
      <BlockSwitch v-if="data.block_links_1" v-bind:blockLinks="data.block_links_1" />
    </div>
    <div class="flex-1">
     <BlockSwitch v-if="data.block_links_2" v-bind:blockLinks="data.block_links_2" />
    </div>
    <div class="flex-1">
     <BlockSwitch v-if="data.block_links_3" v-bind:blockLinks="data.block_links_3" />
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
