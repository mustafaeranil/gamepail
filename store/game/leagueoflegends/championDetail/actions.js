export default {
  async getChampionData({ commit }, championId) {
    const championData = await this.$axios.$get(
      `/data/en_US/champion/${championId}.json`
    )
    commit('setChampionData', championData.data)
  },
}
