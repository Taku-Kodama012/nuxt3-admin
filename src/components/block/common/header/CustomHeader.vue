<template>
  <header class="adminHeader">
    <div>
      <hamburger @clickParent="store.setSidebarToggle()"/>
    </div>
    <div>
    </div>
    <div>
      <p class="avater">
        <i class="fas fa-user-circle"></i>
        user name
      </p>
    </div>
  </header>
</template>
<script lang="ts">
import {defineComponent,SetupContext,computed} from 'vue'
// store
import {useSidebar} from '../../../../store/sidebar'
// components
import Hamburger from './Hamburger.vue'

export default defineComponent({
  components: { Hamburger },
  setup(_props, context:SetupContext){
    const store = useSidebar()
    return{
      store,
    }
  }
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

.avater
  display: flex
  align-items: center
  i
    margin: 0 8px 0 0

</style>
