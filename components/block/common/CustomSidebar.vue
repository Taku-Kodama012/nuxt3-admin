<template>
  <div class="sidbar">
    <div class="sidebarTop">
      <p>Nuxt3 admin</p>
    </div>
    <ul>
      <li>
        <NuxtLink to="/">top</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/users">users</NuxtLink>
      </li>
    </ul>
  </div>
</template>
<style lang="sass" scoped>
.sidbar
  background: #313644
</style>