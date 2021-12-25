<template>
  <button type="buttom" :class="classes" :disabled="disabled" :style="styles" @click="$emit('btnClick')">
    <slot></slot>
  </button>
</template>

<script lang="ts">
// componentsをexport
export default {
  name: 'ButtonIcons'
}
</script>

<script setup lang="ts">
import {computed} from 'vue'

interface Props {
  appearance?: string,
  bgColor?: string,
  txtColor?: string
  bdrColor?: string
  outline?: boolean
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  appearance: "",
  bgColor: "#fff",
  txtColor: "#fff",
  outline:false,
  disabled: false
})

// CSSプロパティの値をpropsによって変更するための算出プロパティ
const styles = computed(() => {
  return {
    "background": props.bgColor,
    "color":props.txtColor,
    "borderColor":props.bdrColor
  }
})

// propsの値によって付与するクラスを変更する算出プロパティ
const classes = computed(() => {
  return {
    "base": true,
    "rounded": props.appearance === "round",
    "outline":props.outline,
    "disabled": props.disabled
  }
})
</script>

<style lang="sass">

.base
  background: #fff
  color: #fff
  padding: 8px 16px
  border: none
  border-radius: 4px

.rounded
  border-radius: 50px

.outline
  border: 2px solid #164EC1

.disabled
  opacity: .4
  pointer-events: none
</style>
