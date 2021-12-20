<template>
  <div class="flex">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import {defineComponent,SetupContext} from 'vue'

type Props = {
  col?:number,
  align?:string,
  justify?:string
}

export default defineComponent({
  setup(prop:Props,context: SetupContext){

  }
})
</script>
<style lang="sass" >
.flex
  display: flex

</style>
