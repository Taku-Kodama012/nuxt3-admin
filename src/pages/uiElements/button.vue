<template>
  <div class="pageWrap">
    <h2>Buttom Components</h2>
    <card>
      <h3>Button types</h3>
      <flex-container wrap>
        <custom-button label="sample" bgColor="#154EC1" txtColor="#fff" @btnClick="parentEvent" />
        <custom-button label="disabled" disabled bgColor="#154EC1" txtColor="#fff" @btnClick="parentEvent" />
        <custom-button label="sample" txtColor="#154EC1" outline bdrColor="#154EC1" @btnClick="parentEvent"/>
        <custom-button label="sample" bgColor="none" txtColor="#154EC1" outline bdrColor="#154EC1" @btnClick="parentEvent"/>
        <custom-button label="sample" bgColor="#154EC1" txtColor="#fff" appearance="round" @btnClick="parentEvent"/>
        <custom-button label="sample" disabled bgColor="#154EC1" txtColor="#fff" appearance="round" @btnClick="parentEvent"/>
        <custom-button label="sample" txtColor="#154EC1" appearance="round" outline bdrColor="#154EC1" @btnClick="parentEvent"/>
        <custom-button label="sample" txtColor="#154EC1" appearance="round" outline bdrColor="#154EC1" bgColor="none" @btnClick="parentEvent"/>
      </flex-container>
    </card>

    <card>
      <h3>Button colors</h3>
      <flex-container wrap>
        <custom-button label="sample" bgColor="#E42222" txtColor="#fff" @btnClick="parentEvent" />
        <custom-button label="sample" bgColor="#2C82E0" txtColor="#fff" @btnClick="parentEvent" />
        <custom-button label="sample" bgColor="#262824" txtColor="#fff" @btnClick="parentEvent" />
        <custom-button label="sample" bgColor="#FFD43B" txtColor="#fff" @btnClick="parentEvent" />
        <custom-button label="sample" bgColor="#3C920A" txtColor="#fff" @btnClick="parentEvent" />
        <custom-button label="sample" bgColor="#767C88" txtColor="#fff" @btnClick="parentEvent" />
      </flex-container>
    </card>

    <card>
      <h3>Button with Icons</h3>
      <flex-container wrap>
        <button-icons bgColor="#154EC1" txtColor="#fff" @btnClick="parentEvent" >
        sample
        <i class="fas fa-angle-right"></i>
        </button-icons>
        <button-icons disabled bgColor="#154EC1" txtColor="#fff" @btnClick="parentEvent" >
        sample
        <i class="fas fa-angle-right"></i>
        </button-icons>
        <button-icons txtColor="#154EC1" outline bdrColor="#154EC1" @btnClick="parentEvent">
        <i class="fas fa-angle-left"></i>
        sample
        </button-icons>
        <button-icons bgColor="none" txtColor="#154EC1" outline bdrColor="#154EC1" @btnClick="parentEvent">
          <i class="fas fa-times"></i>
        </button-icons>
        <button-icons bgColor="#154EC1" txtColor="#fff" appearance="round" @btnClick="parentEvent">
        sample
          <i class="fas fa-times"></i>
        </button-icons>
        <button-icons disabled bgColor="#154EC1" txtColor="#fff" appearance="round" @btnClick="parentEvent">
          <i class="fas fa-times"></i>
        sample
        </button-icons>
        <button-icons txtColor="#154EC1" appearance="round" outline bdrColor="#154EC1" @btnClick="parentEvent">
          <i class="fas fa-times"></i>
        </button-icons>
        <button-icons txtColor="#154EC1" appearance="round" outline bdrColor="#154EC1" bgColor="none" @btnClick="parentEvent">
        sample
          <i class="fas fa-times"></i>
        </button-icons>
      </flex-container>
    </card>
  </div>
</template>

<script lang="ts">
import {defineComponent,SetupContext} from 'vue'

import flexContainer from "../../components/container/FlexBox.vue"
import CustomButton from "../../components/atoms/Button.vue"
import ButtonIcons from "../../components/atoms/ButtonWithIcon.vue"
import Card from "../../components/block/Card.vue"
export default defineComponent({
  components:{ flexContainer,CustomButton,ButtonIcons, Card },
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
