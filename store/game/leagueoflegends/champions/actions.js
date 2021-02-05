export default {
  async getChampionList({ commit }) {
    const championList = await this.$axios.$get(`/data/en_US/champion.json`)
    commit('setChampionList', championList.data)
  },
}
