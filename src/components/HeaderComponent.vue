<template>
  <div class="HeaderComponent flex flex-row md-justify-center">
    <a href="/" class="HeaderComponent__link mb_5">
      <h1 class="title rock-salt mx_5 color-ice-blue">Aneken River</h1>
    </a>
    <button
      v-if="!isShowingNav || $mq === 'tablet' || $mq === 'laptop' || $mq === 'desktop' "
      class="HeaderComponent__nav-toggle color-burnt-orange-dark" 
      v-on:click="toggleNav">
      <img src="img/menu.svg"/>
    </button>
  </div>
</template>
<script>
export default {
  name: 'HeaderComponent',
  props: {
    isShowingNav: Boolean,
    toggleNav: Function,
  },
}
</script>
<style>
.HeaderComponent__nav-toggle {
  position: absolute;
  top: 1rem;
  right: var(--sidebar-width);
  z-index: 3;
  width: 50px;
  height: 50px;
  background: none;
  border: none;
  transition: right 0.1s ease-in-out;
}
.HeaderComponent__nav-toggle:focus, .HeaderComponent__nav-toggle:active {
  border: none;
  box-shadow: none;
  outline: 0;
}
.HeaderComponent__link:hover, .HeaderComponent__link:active, .HeaderComponent__link:focus {
  text-decoration: none;
}
</style>