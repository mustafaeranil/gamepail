<template>
  <div>
    <headerComp :page-links="pageLinks" :game-links="gameLinks"></headerComp>
    <Nuxt />
    <footerComp :page-links="pageLinks" :game-links="gameLinks"></footerComp>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import headerComp from '@/components/general/header'
import footerComp from '@/components/general/footer'
export default {
  components: {
    headerComp,
    footerComp,
  },
  computed: {
    ...mapGetters({
      pageLinks: 'general/getPageLinks',
      gameLinks: 'general/getGameLinks',
    }),
  },
  methods: {
    test() {
      const menuLinks = this.$axios.$get(`/menu_links.json`)
      console.log(menuLinks)
    },
  },
}
</script>
