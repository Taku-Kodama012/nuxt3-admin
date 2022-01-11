<template>
  <div class="card">
    <template v-if="props.fileName">
      <img :src="`/img/${props.fileName}.jpg`" :alt=props.imgAlt class="cardThumb">
    </template>
    <div class="cardInner">
      <h3 class="cardTitle" v-if="$slots.header">
        <slot name="header"></slot>
      </h3>
      <div class="cardDesc" :style="lineClamps">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "Card"
}
</script>
<script setup lang="ts">
import {computed} from 'vue'

interface Props {
  fileName?: string
  imgAlt?: string
  lineClamp?: number
}

const props = withDefaults(defineProps<Props>(),{
  fileName:"",
  imgAlt:"",
  lineClamp: 5
})


// 文章を省略したい時に使う
const lineClamps = computed(() => {
  return {
    'display': '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': props.lineClamp,
    'overflow': 'hidden',
    'width':' 100%',
    'max-height': `(${props.lineClamp} * 1.7)em`,
  }
})

</script>
<style lang="sass" scoped>
.card
  background: #fff
  box-shadow: 0px 8px 16px -2px rgba(10,10,10,0.1), 0px 0px 0px 1px rgba(10,10,10,0.02)
  border-radius:8px
  overflow: hidden

.cardInner
  padding: 20px
  box-shadow: none

.cardThumb
  width: 100%
  height: 200px
  object-fit: cover

.cardTitle
  margin: 0 0 20px

.cardDesc
  display: block
  line-height: 1.7
  // font-size: 1.4rem

</style>
