<template>
  <div>
    <ul>
      <li v-for="(item,index) in tabList" :key="index">
        <label :for="`${tabTitle}${index}`">{{item}}</label>
        <input
          type="radio"
          :id="`${tabTitle}${index}`"
          :name="`${tabTitle}-tab`"
          :value="index + 1"
          v-model="active"
        >
      </li>
    </ul>
    <template v-for="(item,index) in tabList" :key="index">
      <div :key="index" v-if="index + 1 === active">
        <slot :name="`tabContent-${index + 1}`" />
      </div>
    </template>

  </div>
</template>
<script lang="ts">
export default {
  name:"Tab"
}
</script>

<script setup lang="ts">

//  タブ切り替えコンポーネント
interface Props {
  tabTitle:string,
  tabList: Array<string>
}
const {tabTitle,tabList} = defineProps<Props>()

const active = ref(1)
</script>