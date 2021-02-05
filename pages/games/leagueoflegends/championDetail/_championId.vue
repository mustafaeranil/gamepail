<template>
  <div>
    <div class="container mx-auto">
      <h1>TEST</h1>
      <div v-for="champion in championData" :key="champion.id">
        {{ champion.image.full }}
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      championData: 'game/leagueoflegends/championDetail/getChampionData',
    }),
  },
  created() {
    this.getChampionData(this.$route.params.championId)
  },
  methods: {
    ...mapActions({
      getChampionData: 'game/leagueoflegends/championDetail/getChampionData',
    }),
  },
}
</script>
