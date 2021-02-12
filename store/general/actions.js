export default {
  async getMenuLinks({ commit }) {
    const menuLinks = await this.$axios.$get(`/menu_links.json`)
    commit('setMenuLinks', menuLinks)
  },
}
