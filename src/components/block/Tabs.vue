<template>
  <ul v-for="(item,index) in props.data" :key="index">
    <li>{{item.title}}</li>
  </ul>
</template>
<script setup lang="ts">

//  タブ切り替えコンポーネント

type TabItem = {
  id: number,
  title: string,
  content: string,
}

interface Props {
  data: Array<TabItem>
}


</script>