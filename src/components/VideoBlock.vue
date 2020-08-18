<template>
  <div class="flex flex-col align-center py1">
    <iframe
      v-if="$mq === 'laptop' || $mq === 'desktop'"
      width="640" height="360" 
      v-bind:src="data.video_url"
      frameborder="0" 
      allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen
    />
    <iframe
      class="w100"
      v-if="$mq === 'mobile' || $mq === 'tablet' || $mq === 'phablet'"
      v-bind:src="data.video_url"
      frameborder="0" 
      allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen
    />
  </div>
</template>
<script>
export default {
  name: 'VideoBlock',
  props: {
    data: {
      video_url: String
    }
  }
}
</script>