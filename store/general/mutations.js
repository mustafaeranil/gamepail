export default {
  setMenuLinks(state, menuLinks) {
    state.gameLinks = menuLinks.games
    state.pageLinks = menuLinks.pageLinks
  },
}
