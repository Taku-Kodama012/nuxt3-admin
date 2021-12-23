<template>
  <div class="pageWrap">
    <h2>Buttom Components</h2>
    <card>
      <custom-button label="sample" bgColor="#ff00ff" txtColor="#000"/>
      <custom-button label="sample" bgColor="#fff" txtColor="#000" appearance="round"/>
      <custom-button label="sample" bgColor="#fff" txtColor="#000" appearance="round" outline bdrColor="#000"/>
    </card>
  </div>
</template>
<script lang="ts">
import {defineComponent,SetupContext} from 'vue'

import CustomButton from "../../components/atoms/Button.vue"
import Card from "../../components/block/Card.vue"
export default defineComponent({
  components:{ CustomButton, Card }
})
</script>
<style lang="sass">
@import '../../style/page.sass'

</style>
