<template>
  <header class="adminHeader">
    <div>
      ハンバーガーメニュー
    </div>
    <div>
      nav link
    </div>
    <div>
      avater
    </div>
  </header>
</template>
<script lang="ts">
import Vue from 'vue'
export default defineComponent({
})
</script>

<style lang="sass" scoped>
.adminHeader
  display: flex
  justify-content: space-between
  align-items: center
  width: 100%
  min-height: 40px
  padding: 0 20px
  box-shadow: 0 0 6px 0 rgb(3 0 0 / 16%)

</style>
