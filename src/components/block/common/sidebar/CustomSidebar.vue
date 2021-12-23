<template>
  <div v-if="store.toggleState">
    <aside class="sidbar">
      <div class="sidebarTop">
        <p class="logoText">Nuxt3 admin</p>
      </div>
      <side-nav />
    </aside>
  </div>
</template>
<script lang="ts">
import {useSidebar} from '../../../../store/sidebar'
import {defineComponent,SetupContext} from 'vue'

// components
import SideNav from "./SidebarNav.vue"

export default defineComponent({
  components:{SideNav},
  setup(_props, context: SetupContext) {
    const store = useSidebar()
    return {
      store
    }
  }
})

</script>
<style lang="sass" scoped>
.sidbar
  min-height: 100vh
  padding: 30px 10px
  background: #343a40
  box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22)

.logoText
  font-size: 24px
  font-weight: bold
  color: #fff

</style>
