<template>
  <p class="heading amatic-sc text-center">PageContainer :: {{ slug }}</p>
</template>
<script>
const graphQuery = `{
  page {
    ...pageFields
  }
}`;
export default {
  name: 'PageContainer',
  props: {
    slug: String,
  },
  mounted() {
    this.loadBlocks();
  },
  methods: {
    loadBlocks: function() {
      this.$prismic.client.getByUID('page', this.slug, { 'graphQuery': graphQuery })
        .then((document) => {
          if (document && document.data && Array.isArray(document.data.blocks)) {
            console.log(document.data);
          }
        });
    }
  }
}
</script>