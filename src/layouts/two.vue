<template>
  <div class="contentWrap">
    <div class="sidebarWrap">
      <custom-sidebar />
    </div>
    <div class="mainContent">
      <custom-header />
      <div class="mainContent">
      <!-- <NuxtPage /> -->
      <slot />
      </div>
    </div>
  </div>
</template>
<script lang="ts">

import CustomSidebar from "../components/block/common/sidebar/CustomSidebar.vue"
import CustomHeader from "../components/block/common/header/CustomHeader.vue"
export default {
  name: 'two',
  components:{CustomSidebar,CustomHeader},
}
</script>

<style lang="sass" scoped>
.contentWrap
  display: flex
  background: #F4F4F4
.sidebarWrap
  flex-shrink: 0
.mainContent
  flex-grow: 2
</style>
