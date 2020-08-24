<template>
  <div class="NavComponent flex flex-col w100 h100 bg-burnt-orange-light">
    <!-- nav header -->
    <div class="NavComponent__header flex flex-row justify-center align-center">
      <button
        class="NavComponent__nav-toggle color-burnt-orange-dark" 
        v-on:click="toggleNav">
        <img src="img/close.svg"/>
      </button>
    </div>
    <nav class="NavComponent__body flex flex-1 flex-col justify-start align-center mt2">
      <a 
        v-for="item in keyedMenuItems"
        v-bind:key="item.key"
        v-bind:href="item.url"
        class="color-black heading press-start-2p w100 text-center my1 py1"
      >
        {{item.label}}
      </a>
    </nav>
  </div>
</template>
<script>
import kebabify from '../utils/kebabify';
export default {
  name: 'NavComponent',
  props: {
    menuItems: Array,
    toggleNav: Function,
  },
  computed: {
    keyedMenuItems: function() {
      return this.menuItems.reduce((acc, item) => {
        acc.push({
          ...item,
          key: kebabify(item.label)
        });
        return acc;
      }, []);
    }
  },
}
</script>
<style>
.NavComponent__nav-toggle {
  position: absolute;
  top: 1rem;
  right: 0.5rem;
  z-index: 3;
  width: 50px;
  height: 50px;
  background: none;
  border: none;
}
.NavComponent__nav-toggle:focus, .NavComponent__nav-toggle:active {
  border: none;
  box-shadow: none;
  outline: 0;
}
.NavComponent__header {
  height: 50px;
}
.NavComponent__body {
  margin-bottom: 50px;
}
</style>