<template>
  <g
    :transform="'translate(' + x +', ' + y + ')'"
    :class="'group' + el.group" :symbol="el.symbol">
    <rect
      :width="width" :height="height"
      :column="column" :row="row"
      rx=2
    />
    <text class="symbol" transform ="translate(33, 35)">{{el.symbol}}</text>
    <text class="number" transform ="translate(5, 12)">{{el.number}}</text>
    <text class="name" transform ="translate(33, 65)">{{el.name}}</text>
  </g>
</template>

<script lang="ts">
import { Element as El } from 'elementry'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Element extends Vue {
  @Prop()
  private el!: El

  @Prop({ default: 65, type: Number })
  private width!: number

  @Prop({ default: 70, type: Number })
  private height!: number

  @Prop({ default: 5, type: Number })
  private padding!: number

  public get x() {
    return (this.width + this.padding) * this.column
  }

  public get y() {
    return (this.height + this.padding) * this.row
  }

  private get column() {
    const n = this.el.number
    const group = this.el.group
    if (group === 'La') return n - 53.5
    if (group === 'Ac') return n - 85.5
    return group
  }

  private get row() {
    const n = this.el.number
    if (n <= 2) return 0
    if (n <= 10) return 1
    if (n <= 18) return 2
    if (n <= 36) return 3
    if (n <= 54) return 4
    if (n >= 57 && n <= 71) return 7.5;
    if (n <= 86) return 5;
    if (n >= 89 && n <= 103) return 8.5;
    if (n <= 118) return 6;
    return 9 // because, why not
  }
}
</script>
