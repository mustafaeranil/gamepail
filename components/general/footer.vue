<template>
  <footer>
    <div class="bg-black py-20 w-full float-left">
      <div class="container mx-auto">
        <div class="grid grid-cols-7">
          <div class="mb-10 col-span-3">
            <NuxtLink to="/">
              <img class="w-64 max-w-full" src="/footer_logo.svg" />
            </NuxtLink>
          </div>
          <div class="col-span-2">
            <div class="text-3xl font-bold text-primary mb-2 italic">Games</div>
            <div>
              <div v-for="game in gameLinks" :key="game.id">
                <NuxtLink
                  :to="game.link"
                  class="font-bold text-gray-400 text-xs pr-3 py-2 flex items-center"
                  >{{ game.name }}</NuxtLink
                >
              </div>
            </div>
          </div>
          <div class="col-span-2">
            <div class="text-3xl font-bold text-primary mb-2 italic">Pages</div>
            <div>
              <div v-for="page in pageLinks" :key="page.id">
                <NuxtLink
                  :to="page.link"
                  class="font-bold text-gray-400 text-xs pr-3 py-2 flex items-center"
                  >{{ page.name }}</NuxtLink
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-900 mx-auto w-full float-left h-px"></div>
    <div class="bg-black float-left w-full">
      <div class="text-center text-gray-800 py-6 text-xs font-bold">
        ©{{ new Date().getFullYear() }} GamePail - Tüm hakları saklıdır.
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    gameLinks: {
      type: [Object, Array, JSON],
      default: () => ({}),
    },
    pageLinks: {
      type: [Object, Array, JSON],
      default: () => ({}),
    },
  },
}
</script>

<style></style>
