export default {
  actions: {
    async nuxtServerInit({ dispatch }) {
      await dispatch('general/getMenuLinks')
    },
  },
}
