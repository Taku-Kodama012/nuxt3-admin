<template>
  <div class="pageWrap">
    <card>
      test
    </card>
  </div>
</template>
<script lang="ts">
import {defineComponent,SetupContext} from 'vue'

import Card from "../components/block/Card.vue"

export default defineComponent({
  components:{
    Card
  }
})
</script>
<style lang="sass">
@import '../style/page.sass'

</style>
