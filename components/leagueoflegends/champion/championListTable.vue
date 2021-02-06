<template>
  <div>
    <ul v-for="championData in champions" :key="championData.id">
      <championListBox :champion-data="championData"> </championListBox>
    </ul>
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
