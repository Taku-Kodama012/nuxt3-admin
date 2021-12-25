<template>
  <div class="pageWrap">
    <h2>Card Components</h2>
    <card>
      <h3>DEFAULT</h3>
      <p>The unique stripes of zebras make them one of the animals most familiar to people. They occur in a variety of habitats, such as grasslands, savannas, woodlands, thorny scrublands, mountains, and coastal hills. Various anthropogenic factors have had a severe impact on zebra populations, in particular hunting for skins and habitat destruction. Grévy's zebra and the mountain zebra are endangered. While plains zebras are much more plentiful, one subspecies, the quagga.
</p>
    </card>
  </div>
</template>
<script lang="ts">
import {defineComponent,SetupContext} from 'vue'
import Card from "../../components/block/Card.vue"

export default defineComponent({
  components:{Card}
})
</script>
<style lang="sass">
@import '../../style/page.sass'

</style>
