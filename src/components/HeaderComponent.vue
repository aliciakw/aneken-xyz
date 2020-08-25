<template>
  <div class="HeaderComponent flex flex-row justify-center pb_5">
    <a href="/" v-on:mouseover="onStartAnimation" class="HeaderComponent__link mt1 mb_5">
      <h1 class="subtitle press-start-2p mx_5 color-ice-blue">Aneken River</h1>
      <svg viewBox="0 0 451.25 40" xmlns="http://www.w3.org/2000/svg">
        <g stroke="#bcd1e7" stroke-linecap="round" fill="none" stroke-width="2px">
          <path id="wave-path-1" d="M10,50 L50,140 L90,90"></path>
          <path id="wave-path-2" d="M10,90 L50,180 L90,130"></path>
          <path id="wave-path-3" d="M10,50 L50,140 L90,150"></path>
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
      const xOffset = 2;
      const wavePeriod = 7;
      const yOffset = 12;
      const amplitude = 5;
      const waveSpacing = 9;
      const animationSpeed = 0.9;
      const numberOfFrames = 60;

      if (getIsAnimating()) return;
      setIsAnimating(true);
      let xs = [];
      for (var i = xOffset; i <= 445; i++) {
        xs.push(i);
      }
      let t = 0;

      function animate() {
        const points = xs.map(x => {
          let y = yOffset + amplitude * Math.sin((x + t) / wavePeriod)
          return [x, y]
        });
        const path1 = "M" + points.map(p => p[0] + "," + p[1]).join(" L");
        const path2 = "M" + points.map(p => p[0] + "," + (p[1] + waveSpacing)).join(" L");
        const path3 = "M" + points.map(p => p[0] + "," + (p[1] + 2 * waveSpacing)).join(" L");
        document.getElementById("wave-path-1").setAttribute("d", path1);
        document.getElementById("wave-path-2").setAttribute("d", path2);
        document.getElementById("wave-path-3").setAttribute("d", path3);
        t += animationSpeed;
        if (t < numberOfFrames) {
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
.HeaderComponent__link:hover, .HeaderComponent__link:active, .HeaderComponent__link:focus {
  text-decoration: none;
}
/* .HeaderComponent__svg--text {
  transition: fill 0.1s ease-in-out, stroke-width 0.1s ease-in-out;
}
.HeaderComponent__link:hover .HeaderComponent__svg--text {
  fill: none;
  stroke-width: 2px;
} */
</style>