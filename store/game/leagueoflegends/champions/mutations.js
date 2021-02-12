export default {
  setChampionList(state, championList) {
    state.champions = championList
    state.filteredChampions = championList
  },
  setFilteredChampionList(state, championList) {
    state.filteredChampions = championList
  },
}
