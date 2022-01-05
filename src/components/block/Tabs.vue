<template>
  <ul v-for="item in props.tablist" :key="item.id">
    <li>{{item.title}}</li>
  </ul>
</template>
<script lang="ts">
export default {
  name:"Tab"
}
</script>

<script setup lang="ts">

//  タブ切り替えコンポーネント
type TabItem = {
  id: number,
  title: string,
  content: string,
}

interface Props {
  tablist: Array<TabItem>
}

</script>
