<template>
  <div class="pageWrap">
    <h2>tabs Components</h2>
    <card>
      <template v-slot:content>
        <tab :tablist="tableList"/>
      </template>
      </card>
  </div>
</template>
<script lang="ts">
import {defineComponent,SetupContext} from 'vue'
import Card from "../../components/block/Card.vue"
import Tab from "../../components/block/Tabs.vue"

export default defineComponent({
  components:{Card,Tab},
  setup(){
    const tabList = [
      {id:1,title:"tab01",content:"hogehogehoge"},
      {id:2,title:"tab02",content:"fugafuga"}
    ]
    return{
      tabList
    }
  }
})
</script>
<style lang="sass">
@import '../../style/page.sass'

</style>
