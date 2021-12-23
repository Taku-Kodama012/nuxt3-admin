<template>
  <div class="pageWrap">
    <h2>Buttom Components</h2>
    <card>
      <h3>Button</h3>
      <flex-container justify="space-between">
        <custom-button label="sample" bgColor="#154EC1" txtColor="#fff" @btnClick="parentEvent" />
        <custom-button label="sample" txtColor="#154EC1" outline bdrColor="#154EC1" @btnClick="parentEvent"/>
        <custom-button label="sample" bgColor="#154EC1" txtColor="#fff" appearance="round" @btnClick="parentEvent"/>
        <custom-button label="sample" txtColor="#154EC1" appearance="round" outline bdrColor="#154EC1" @btnClick="parentEvent"/>
      </flex-container>
    </card>
  </div>
</template>

<script lang="ts">
import {defineComponent,SetupContext} from 'vue'

import flexContainer from "../../components/container/FlexBox.vue"
import CustomButton from "../../components/atoms/Button.vue"
import Card from "../../components/block/Card.vue"
export default defineComponent({
  components:{ flexContainer,CustomButton, Card },
  setup(_props:Props,context:SetupContext){
    const parentEvent = () => {
      console.log('btn click')
    }
    return {
      parentEvent
    }
  }
})
</script>
<style lang="sass">
@import '../../style/page.sass'

</style>
