<template>
  <div>
    <headerComp></headerComp>
    <Nuxt />
    <footerComp></footerComp>
  </div>
</template>

<script>
import headerComp from '@/components/general/header'
import footerComp from '@/components/general/footer'
export default {
  components: {
    headerComp,
    footerComp,
  },
}
</script>
