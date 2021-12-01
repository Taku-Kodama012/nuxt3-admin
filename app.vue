<template>
  <div>
    <two-columns />
  </div>
</template>
<script lang="ts">
import TwoColumns from './components/Layout/TwoColumns.vue'
export default defineComponent({
  components: { TwoColumns },
})
</script>
<style lang="sass">
ul
  margin: 0
  padding: 0

li 
  list-style-type: none

</style>