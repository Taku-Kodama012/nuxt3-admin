<template>
  <div v-if="store.toggleState">
    <aside class="sidbar">
      <div class="sidebarTop">
        <p class="logoText">Nuxt3 admin</p>
      </div>
      <ul class="navList">
        <li class="navListItem">
          <i class="fas fa-tachometer-alt navIcon"></i>
          <NuxtLink to="/">daxhboard</NuxtLink>
        </li>
        <li class="navListItem">
          <accordion>
            <template v-slot:label>
              <i class="fab fa-buromobelexperte navIcon"></i>
              UI Elements
            </template>
            <template v-slot:content>
              <NuxtLink to="/uiElements/button">button</NuxtLink>
            </template>
          </accordion>
        </li>
        <li class="navListItem">
          <i class="fas fa-users navIcon"></i>
          <NuxtLink to="/users">users</NuxtLink>
        </li>
      </ul>
    </aside>
  </div>
</template>
<script lang="ts">
import {useSidebar} from '../../../store/sidebar'
import {defineComponent,SetupContext} from 'vue'

// components
import Accordion from "../../module/Accordion.vue"

export default defineComponent({
  components:{Accordion},
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

.navList
  margin: 50px 0 0
  list-style-type: none

.navListItem
  display: flex
  align-items: center
  padding: 0 8px
  border-radius: 4px
  &:hover
    background-color: rgba(255,255,255,.1)
    color: #FFF
  a
    display: block
    padding: 8px
    text-decoration: none
    color: #c2c7d0
.navIcon
  color: #fff
</style>
