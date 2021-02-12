export default {
  async getChampionList({ commit }) {
    const championList = await this.$axios.$get(
      `http://ddragon.leagueoflegends.com/cdn/11.3.1/data/en_US/champion.json`
    )
    commit('setChampionList', championList.data)
  },
  setFilteredChampionList({ commit }, params) {
    Object.filter = (obj, predicate) =>
      Object.assign(
        ...Object.keys(obj)
          .filter((key) => predicate(obj[key]))
          .map((key) => ({ [key]: obj[key] }))
      )
    if (params.query && params.filterOption) {
      const filtered = Object.filter(
        params.championList,
        (champion) =>
          champion.name.toLowerCase().search(params.query.toLowerCase()) >= 0
      )
      const filtered2 = Object.filter(filtered, (champion) =>
        champion.tags.includes(params.filterOption)
      )
      commit('setFilteredChampionList', filtered2)
    } else if (params.query) {
      const filtered = Object.filter(
        params.championList,
        (champion) =>
          champion.name.toLowerCase().search(params.query.toLowerCase()) >= 0
      )
      commit('setFilteredChampionList', filtered)
    } else if (params.filterOption) {
      const filtered = Object.filter(params.championList, (champion) =>
        champion.tags.includes(params.filterOption)
      )
      commit('setFilteredChampionList', filtered)
    } else {
      commit('setFilteredChampionList', params.championList)
    }
  },
}
