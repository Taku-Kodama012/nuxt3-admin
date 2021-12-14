<template>
  <button @click="clickEmit">
      <i class="fas fa-bars"></i>
  </button>
</template>
<script lang="ts">
import {defineComponent,SetupContext} from 'vue'

export default defineComponent({
  setup(_props, context: SetupContext){
    const clickEmit = () => {
      context.emit('clickParent')
    }
    return {
      clickEmit
    }
  }
})
</script>
