<template>
  <div class="flex flex-row justify-center pb1">
    <h1 class="title handwriting color-shark-blue ">
      Aneken River
    </h1>
    <button
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
    toggleNav: String,
  }
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
</style>