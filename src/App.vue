<template>
  <div id="app">
    <svg id="periodic-table">
      <Element v-for="el in elements" :key="el.number" :el="el"></Element>

      <filter id="dropshadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
        <feOffset dx="2" dy="3" result="offsetblur"/>
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.4"/>
        </feComponentTransfer>
        <feMerge>
          <feMergeNode/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </svg>
  </div>
</template>

<script lang="ts">
import { Element as El } from 'elementry'
import { Component, Vue } from 'vue-property-decorator'
import Element from './components/Element.vue'

@Component({ components: { Element } })
export default class App extends Vue {
  private elements = El.getAll()
}
</script>

<style lang="less">
body {
  background-color: #eee;
}

#app {
  margin-top: 20px;

  &, & > svg {
    width: 1400px;
    height: 760px;
  }

  svg {
    text {
      font-family: "Helvetica Neue";
      fill: #111;
    }

    text.symbol {
      font-size: 18px;
      text-anchor: middle;
      fill: #fff;
      text-shadow: 0 1px 4px #111;
    }

    text.number {
      font-size: 9px;
      text-anchor: right;
    }

    text.name {
      font-size: 9px;
      font-weight: bold;
      text-anchor: middle;
    }

    g {
      rect {
        fill: #5bbd92;
        stroke: #444;
        stroke-width: 0.5;
        filter:url(#dropshadow);
      }

      &.group1 rect {
        fill: #714883;
      }
      &.group2 rect {
        fill: #256194;
      }
      &.group13 rect {
        fill: #e0cb24;
      }
      &.group14 rect {
        fill: #d59832;
      }
      &.group15 rect {
        fill: #cc623a;
      }
      &.group16 rect {
        fill: #bd3138;
      }
      &.group17 rect {
        fill: #8a2f3e;
      }
      &.group18 rect {
        fill: #6ecdf8;
      }
      &.groupLa rect {
        fill: #5aa7c7;
      }
      &.groupAc rect {
        fill: #30a486;
      }
    }

    g.group1, g.group2, g.group16, g.group17 {
      text.name, text.number {
        fill: #fff;
      }
    }
  }
}
</style>
