<template>
  <div :style="styles" :class="classes">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: "flexContainer"
}
</script>

<script setup lang="ts">
import {computed,ref} from 'vue'

interface Props {
  wrap?:boolean,
  column?: boolean,
  justify?:string,
  align?:string
}
const props = withDefaults(defineProps<Props>(), {
  column: false,
  justify: 'flex-start',
})
const styles = computed(() => {
  return {
    "justifyContent": props.justify
  }
})

const classes = computed(() => {
  return {
    "flexContainer": true
  }
})
</script>
<style lang="sass" >
.flexContainer
  display: flex
</style>