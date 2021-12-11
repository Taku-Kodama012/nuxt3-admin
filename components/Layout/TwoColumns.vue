<template>
  <div class="contentWrap">
    <div class="sidebarWrap">
      <custom-sidebar />
    </div>
    <div class="mainContent">
      <NuxtPage />
    </div>
  </div>
</template>
<script lang="ts">
import CustomSidebar from "../block/common/CustomSidebar.vue";
export default defineComponent({
  components:{CustomSidebar}
})
</script>
<style lang="sass" scoped>
.contentWrap
  display: flex
  background: #F4F4F4
</style>