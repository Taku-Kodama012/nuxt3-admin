<template>
  <div class="contentWrap">
    <div class="sidebarWrap">
      <custom-sidebar />
    </div>
    <div class="mainContent">
      <custom-header />
      <div class="mainContent">
      <NuxtPage />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent,SetupContext} from 'vue'

import CustomSidebar from "../block/common/sidebar/CustomSidebar.vue"
import CustomHeader from "../block/common/header/CustomHeader.vue"
export default defineComponent({
  components:{CustomSidebar,CustomHeader}
})
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
