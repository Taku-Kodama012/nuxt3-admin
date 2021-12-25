<template>
  <div class="accordion">
    <p class="accordion__label" @click="toggleExpand">
      <slot name="label"></slot>
    </p>
    <div v-show="isToggle" class="accordion__content">
      <slot name="content"></slot>
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent,SetupContext,ref} from 'vue'

type Props = {
  defaultExpand:boolean
}
export default defineComponent({
  setup(_props:Props,context:SetupContext) {
    const isToggle = ref(false)
    const toggleExpand = () => {
      isToggle.value = !isToggle.value
    }
    return{
      toggleExpand,
      isToggle
    }
  }
})
</script>
<style lang="sass" scoped>
.accordion
  margin: 2px 0
  // width: 100%
  cursor: pointer

.accordion__label
  position: relative
  margin: 0
  padding: 8px
  color: #c2c7d0
  &:after
    content:''
    position: absolute
    top: 50%
    right: 5px
    width: 7px
    height: 7px
    border-right: 2px solid #fff
    border-bottom: 2px solid #fff
    transform: rotate(45deg)
    transition: transform .5s

.accordion__label
  &.isOpen
    &:after
      content:''
      position: absolute
      top: 50%
      right: 5px
      width: 7px
      height: 7px
      border-right: 2px solid #fff
      border-bottom: 2px solid #fff
      transform: rotate(-135deg)

.accordion__content
  padding: 0 0 0 1rem
  color: #111
.accordion__content
  &.isFlex
    display: flex
    flex-wrap: wrap
    // padding: 20px 14px
    background: #fff
    color: #111

</style>
