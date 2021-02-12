export default {
  async getChampionData({ commit }, championId) {
    const championData = await this.$axios.$get(
      `http://ddragon.leagueoflegends.com/cdn/11.3.1/data/en_US/champion/${championId}.json`
    )
    let championSubData = {}
    for (const value of Object.entries(championData.data)) {
      championSubData = value
    }
    commit('setChampionData', championSubData[1])
  },
}
