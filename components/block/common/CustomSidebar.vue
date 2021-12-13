<template>
  <aside class="sidbar">
    <div class="sidebarTop">
      <p class="logoText">Nuxt3 admin</p>
    </div>
    <ul class="navList">
      <li class="navListItem">
        <i class="fas fa-tachometer-alt"></i>
        <NuxtLink to="/">daxhboard</NuxtLink>
      </li>
      <li class="navListItem">
        <NuxtLink to="/users">users</NuxtLink>
      </li>
    </ul>
  </aside>
</template>
<script lang="ts">
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
  a
    display: block
    padding: 8px
    text-decoration: none
    color: #c2c7d0
    border-radius: 4px
    &:hover
      background-color: rgba(255,255,255,.1)
      color: #FFF
</style>
