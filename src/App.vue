<template>
  <div id="app">
    <h1 class="title handwriting text-center color-shark-blue mt1">
      Aneken River
    </h1>
    <PageContainer slug="home" />
    <p class="mt2 text-center">Thanks for visiting!</p>
  </div>
</template>

<script>
import PageContainer from './components/PageContainer.vue'
export default {
  name: 'app',
  components: {
    PageContainer
  }
}
</script>

<style>
body {
  background-color: #131921;
  color: #f2f2f2;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
</style>