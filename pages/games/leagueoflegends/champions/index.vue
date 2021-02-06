<template>
  <div>
    <div class="container mx-auto">
      <h1>Champions</h1>
      <championListTable :champions="championList"></championListTable>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import championListTable from '@/components/leagueoflegends/champion/championListTable'
export default {
  components: {
    championListTable,
  },
  computed: {
    ...mapGetters({
      championList: 'game/leagueoflegends/champions/getChampionList',
    }),
  },
  created() {
    this.getChampionList()
  },
  methods: {
    ...mapActions({
      getChampionList: 'game/leagueoflegends/champions/getChampionList',
    }),
  },
}
</script>
