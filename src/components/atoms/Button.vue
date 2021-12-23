<template>
  <button type="buttom" :class="classes" :style="styles" @click="$emit('button-click')">{{label}}</button>
</template>

<script lang="ts">
// componentsをexport
export default {
  name: 'CustomButton'
}
</script>

<script setup lang="ts">
import {computed} from 'vue'

interface Props {
  label:string,
  appearance?: string,
  bgColor?: string,
  txtColor?: string
  bdrColor?: string
  outline?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  label:"",
  appearance: "",
  bgColor: "#164EC1",
  txtColor: "#fff",
  outline:false
})

// CSSプロパティの値をpropsによって変更するための算出プロパティ
const styles = computed(() => {
  return {
    "backgroundColor": props.bgColor,
    "color":props.txtColor,
    "borderColor":props.bdrColor
  }
})

// propsの値によって付与するクラスを変更する算出プロパティ
const classes = computed(() => {
  return {
    "base": true,
    "rounded": props.appearance === "round",
    "outline":props.outline
  }
})
</script>

<style lang="sass">
@import '../../style/_variable.sass'

.base
  background: #164EC1
  color: #fff
  padding: 8px 16px
  border: none
  border-radius: 4px

.rounded
  border-radius: 50px

.outline
  border: 1px solid #164EC1
</style>
