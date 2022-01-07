<template>
  <div class="pageWrap">
    <h2>tabs Components</h2>
    <card>
      <template v-slot:content>
        <tab tabTitle="sample01" :tabList="tabList">
          <template v-slot:tabContent-1>hogehoge</template>>
          <template v-slot:tabContent-2>fugafuga</template>>
        </tab>
      </template>
    </card>
  </div>
</template>
<script lang="ts">
import {defineComponent,SetupContext} from 'vue'
import Card from "../../components/block/Card.vue"
import Tab from "../../components/block/Tabs.vue"

export default defineComponent({
  layout:"two",
  components:{Card,Tab},
  setup(){
    const tabList = ['tab1','tab2']
    return{
      tabList
    }
  }
})
</script>
<style lang="sass">
@import '../../style/page.sass'

</style>
