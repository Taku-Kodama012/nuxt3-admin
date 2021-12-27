<template>
  <div class="pageWrap">
    <h2>Card Components</h2>

    <card>
      <template v-slot:header>
        default
      </template>
      <template v-slot:content>
        The unique stripes of zebras make them one of the animals most familiar to people. They occur in a variety of habitats, such as grasslands, savannas, woodlands, thorny scrublands, mountains, and coastal hills. Various anthropogenic factors have had a severe impact on zebra populations, in particular hunting for skins and habitat destruction. Grévy's zebra and the mountain zebra are endangered. While plains zebras are much more plentiful, one subspecies, the quagga.
      </template>
      </card>
    <flex-container>
      <card>
        <template v-slot:header>
          default
        </template>
        <template v-slot:content>
          The unique stripes of zebras make them one of the animals most familiar to people. They occur in a variety of habitats, such as grasslands, savannas, woodlands, thorny scrublands, mountains, and coastal hills. Various anthropogenic factors have had a severe impact on zebra populations, in particular hunting for skins and habitat destruction. Grévy's zebra and the mountain zebra are endangered. While plains zebras are much more plentiful, one subspecies, the quagga.
        </template>
        </card>

      <card fileName="sample01">
        <template v-slot:header>
          default
        </template>
        <template v-slot:content>
          The unique stripes of zebras make them one of the animals most familiar to people. They occur in a variety of habitats, such as grasslands, savannas, woodlands, thorny scrublands, mountains, and coastal hills. Various anthropogenic factors have had a severe impact on zebra populations, in particular hunting for skins and habitat destruction. Grévy's zebra and the mountain zebra are endangered. While plains zebras are much more plentiful, one subspecies, the quagga.
        </template>
        </card>
    </flex-container>
    <flex-container>
      <card fileName="sample02">
        <template v-slot:content>
          The unique stripes of zebras make them one of the animals most familiar to people. They occur in a variety of habitats, such as grasslands, savannas, woodlands, thorny scrublands, mountains, and coastal hills. Various anthropogenic factors have had a severe impact on zebra populations, in particular hunting for skins and habitat destruction. Grévy's zebra and the mountain zebra are endangered. While plains zebras are much more plentiful, one subspecies, the quagga.
        </template>
        </card>

      <card fileName="sample01">
        <template v-slot:header>
          default
        </template>
        <template v-slot:content>
          The unique stripes of zebras make them one of the animals most familiar to people. They occur in a variety of habitats, such as grasslands, savannas, woodlands, thorny scrublands, mountains, and coastal hills. Various anthropogenic factors have had a severe impact on zebra populations, in particular hunting for skins and habitat destruction. Grévy's zebra and the mountain zebra are endangered. While plains zebras are much more plentiful, one subspecies, the quagga.
        </template>
        </card>

      <card fileName="sample02" lineClamp=3>
        <template v-slot:content>
          The unique stripes of zebras make them one of the animals most familiar to people. They occur in a variety of habitats, such as grasslands, savannas, woodlands, thorny scrublands, mountains, and coastal hills. Various anthropogenic factors have had a severe impact on zebra populations, in particular hunting for skins and habitat destruction. Grévy's zebra and the mountain zebra are endangered. While plains zebras are much more plentiful, one subspecies, the quagga.
        </template>
        </card>
    </flex-container>

  </div>
</template>
<script lang="ts">
import {defineComponent,SetupContext} from 'vue'

import Card from "../../components/block/Card.vue"
import FlexContainer from "../../components/container/FlexBox.vue"
export default defineComponent({
  components:{Card,FlexContainer}
})
</script>
<style lang="sass">
@import '../../style/page.sass'

</style>
