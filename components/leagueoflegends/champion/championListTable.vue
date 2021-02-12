<template>
  <div class="grid grid-cols-5 gap-4 mb-10">
    <div v-for="championData in champions" :key="championData.id">
      <championListBox :champion-data="championData"> </championListBox>
    </div>
  </div>
</template>

<script>
import championListBox from '@/components/leagueoflegends/champion/championListBox'
export default {
  components: {
    championListBox,
  },
  props: {
    champions: {
      required: true,
      type: [Object, Array],
    },
  },
}
</script>

<style></style>
