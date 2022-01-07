<template>
  <ul class="navList">
    <li class="navListItem">
      <NuxtLink to="/">
        <i class="fas fa-tachometer-alt navIcon"></i>
        daxhboard
      </NuxtLink>
    </li>
    <li class="navListItem">
      <accordion>
        <template v-slot:label>
          <i class="fab fa-buromobelexperte navIcon"></i>
          UI Elements
        </template>
        <template v-slot:content>
          <NuxtLink to="/uiElements/button">button</NuxtLink>
          <NuxtLink to="/uiElements/cards">cards</NuxtLink>
          <NuxtLink to="/uiElements/tabs">tabs</NuxtLink>
        </template>
      </accordion>
    </li>
    <li class="navListItem">
      <NuxtLink to="/users">
        <i class="fas fa-users navIcon"></i>
        users
      </NuxtLink>
    </li>
    <li class="navListItem">
      <NuxtLink to="/login">
        <i class="fas fa-users navIcon"></i>
        login
      </NuxtLink>
    </li>
  </ul>
</template>
<script lang="ts">
import {defineComponent,SetupContext} from 'vue'

import Accordion from "../../../module/Accordion.vue"

export default defineComponent({
  components:{Accordion},
})
</script>
<style lang="sass" scoped>
.navList
  margin: 50px 0 0
  list-style-type: none

.navListItem
  a
    display: flex
    align-items: center
    width: 100%
    padding: 8px
    border-radius: 4px
    text-decoration: none
    color: #c2c7d0
    &:hover
      background-color: rgba(255,255,255,.1)
      color: #FFF

.navIcon
  color: #fff
  margin: 0 8px 0 0
</style>
