export default {
  async getChampionData({ commit }, championId) {
    const championData = await this.$axios.$get(
      `/data/en_US/champion/${championId}.json`
    )
    let championSubData = {}
    for (const value of Object.entries(championData.data)) {
      championSubData = value
    }
    console.log(championSubData[1])
    commit('setChampionData', championSubData[1])
  },
}
