<template>
  <div class="HeaderComponent flex flex-row justify-center">
    <a href="/" v-on:mouseover="onStartAnimation" class="HeaderComponent__link mt1_5 mb_5">
      <h1 class="sr-only">Aneken River</h1>
      <svg width="425" height="80" viewBox="0 0 451.25 80" xmlns="http://www.w3.org/2000/svg">
        <g
          class="HeaderComponent__svg--text"
          stroke-linecap="round"
          fill-rule="evenodd"
          stroke="#6d9cd0"
          stroke-width="0"
          fill="#6d9cd0"
        >
          <path d="M 123.5 33.25 L 114 33.25 L 114 0 L 123.5 0 L 123.5 19 L 133 19 L 133 14.25 L 137.75 14.25 L 137.75 9.5 L 147.25 9.5 L 147.25 14.25 L 142.5 14.25 L 142.5 19 L 137.75 19 L 137.75 23.75 L 142.5 23.75 L 142.5 28.5 L 147.25 28.5 L 147.25 33.25 L 137.75 33.25 L 137.75 28.5 L 133 28.5 L 133 23.75 L 123.5 23.75 L 123.5 33.25 Z M 275.5 33.25 L 266 33.25 L 266 0 L 294.5 0 L 294.5 4.75 L 299.25 4.75 L 299.25 19 L 289.75 19 L 289.75 23.75 L 294.5 23.75 L 294.5 28.5 L 299.25 28.5 L 299.25 33.25 L 285 33.25 L 285 28.5 L 280.25 28.5 L 280.25 23.75 L 275.5 23.75 L 275.5 33.25 Z M 9.5 33.25 L 0 33.25 L 0 9.5 L 4.75 9.5 L 4.75 4.75 L 9.5 4.75 L 9.5 0 L 23.75 0 L 23.75 4.75 L 28.5 4.75 L 28.5 9.5 L 33.25 9.5 L 33.25 33.25 L 23.75 33.25 L 23.75 23.75 L 9.5 23.75 L 9.5 33.25 Z M 47.5 33.25 L 38 33.25 L 38 9.5 L 66.5 9.5 L 66.5 14.25 L 71.25 14.25 L 71.25 33.25 L 61.75 33.25 L 61.75 14.25 L 47.5 14.25 L 47.5 33.25 Z M 104.5 33.25 L 80.75 33.25 L 80.75 28.5 L 76 28.5 L 76 14.25 L 80.75 14.25 L 80.75 9.5 L 104.5 9.5 L 104.5 14.25 L 109.25 14.25 L 109.25 23.75 L 85.5 23.75 L 85.5 28.5 L 104.5 28.5 L 104.5 33.25 Z M 180.5 33.25 L 156.75 33.25 L 156.75 28.5 L 152 28.5 L 152 14.25 L 156.75 14.25 L 156.75 9.5 L 180.5 9.5 L 180.5 14.25 L 185.25 14.25 L 185.25 23.75 L 161.5 23.75 L 161.5 28.5 L 180.5 28.5 L 180.5 33.25 Z M 199.5 33.25 L 190 33.25 L 190 9.5 L 218.5 9.5 L 218.5 14.25 L 223.25 14.25 L 223.25 33.25 L 213.75 33.25 L 213.75 14.25 L 199.5 14.25 L 199.5 33.25 Z M 408.5 33.25 L 384.75 33.25 L 384.75 28.5 L 380 28.5 L 380 14.25 L 384.75 14.25 L 384.75 9.5 L 408.5 9.5 L 408.5 14.25 L 413.25 14.25 L 413.25 23.75 L 389.5 23.75 L 389.5 28.5 L 408.5 28.5 L 408.5 33.25 Z M 365.75 33.25 L 356.25 33.25 L 356.25 28.5 L 351.5 28.5 L 351.5 23.75 L 346.75 23.75 L 346.75 9.5 L 356.25 9.5 L 356.25 23.75 L 365.75 23.75 L 365.75 9.5 L 375.25 9.5 L 375.25 23.75 L 370.5 23.75 L 370.5 28.5 L 365.75 28.5 L 365.75 33.25 Z M 337.25 33.25 L 308.75 33.25 L 308.75 28.5 L 318.25 28.5 L 318.25 14.25 L 313.5 14.25 L 313.5 9.5 L 327.75 9.5 L 327.75 28.5 L 337.25 28.5 L 337.25 33.25 Z M 432.25 9.5 L 432.25 14.25 L 437 14.25 L 437 19 L 432.25 19 L 432.25 33.25 L 422.75 33.25 L 422.75 9.5 L 432.25 9.5 Z M 9.5 9.5 L 9.5 19 L 23.75 19 L 23.75 9.5 L 19 9.5 L 19 4.75 L 14.25 4.75 L 14.25 9.5 L 9.5 9.5 Z M 275.5 4.75 L 275.5 19 L 285 19 L 285 14.25 L 289.75 14.25 L 289.75 4.75 L 275.5 4.75 Z M 85.5 14.25 L 85.5 19 L 99.75 19 L 99.75 14.25 L 85.5 14.25 Z M 161.5 14.25 L 161.5 19 L 175.75 19 L 175.75 14.25 L 161.5 14.25 Z M 389.5 14.25 L 389.5 19 L 403.75 19 L 403.75 14.25 L 389.5 14.25 Z M 437 14.25 L 451.25 14.25 L 451.25 9.5 L 437 9.5 L 437 14.25 Z M 327.75 4.75 L 318.25 4.75 L 318.25 0 L 327.75 0 L 327.75 4.75 Z" vector-effect="non-scaling-stroke"/>
        </g>
        <g stroke="#6d9cd0" stroke-linecap="round" fill="none" stroke-width="3px">
          <path id="wave-path-1" d="M10,50 L50,140 L90,90">
          </path>
          <path id="wave-path-2" d="M10,90 L50,180 L90,130">
          </path>
        </g>
      </svg>
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
  mounted() {
    this.onStartAnimation();
  },
  data() {
    return {
      isAnimating: false,
    }
  },
  methods: {
    _getIsAnimating() {
      return this.isAnimating;
    },
    _setIsAnimating(value) {
      this.isAnimating = value;
    },
    onStartAnimation() {
      this.animateWaves(this._getIsAnimating.bind(this), this._setIsAnimating.bind(this));
    },
    animateWaves(getIsAnimating, setIsAnimating) {
      if (getIsAnimating()) return;
      setIsAnimating(true);
      let xs = [];
      for (var i = 5; i <= 445; i++) {
        xs.push(i);
      }
      let t = 0;

      function animate() {
        const points = xs.map(x => {
          let y = 49 + 7 * Math.sin((x + t) / 8)
          return [x, y]
        });
        const path1 = "M" + points.map(p => p[0] + "," + p[1]).join(" L");
        const path2 = "M" + points.map(p => p[0] + "," + (p[1] + 14)).join(" L");
        document.getElementById("wave-path-1").setAttribute("d", path1);
        document.getElementById("wave-path-2").setAttribute("d", path2);
        t += 0.9;
        if (t < 60) {
          requestAnimationFrame(animate)
        } else {
          setIsAnimating(false);
        }
      }

      animate()
    }
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
.HeaderComponent__svg--text {
  transition: fill 0.1s ease-in-out, stroke-width 0.1s ease-in-out;
}
.HeaderComponent__link:hover .HeaderComponent__svg--text {
  fill: #131921;
  stroke-width: 2px;
}
</style>