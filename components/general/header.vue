<template>
  <div class="w-full text-center z-10 relative">
    <div class="bg-primary w-full float-left">
      <div class="container mx-auto">
        <div class="float-right flex items-stretch">
          <div v-for="game in gameLinks" :key="game.id" class="float-left">
            <template v-if="game.id === 'lol'">
              <NuxtLink
                :to="game.link"
                class="font-black text-primary text-xs bg-white flex float-left px-3 py-2 flex items-center"
              >
                <img :src="'/navIcons/' + game.imgName" class="h-5 mr-1" />
                <div class="float-left">{{ game.name }}</div></NuxtLink
              >
            </template>
            <template v-else>
              <NuxtLink
                :to="game.link"
                class="font-black text-white text-xs px-3 py-2 flex items-center"
                >{{ game.name }}</NuxtLink
              >
            </template>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full">
      <div class="container mx-auto">
        <div class="w-full flex justify-between items-center flex-wrap">
          <div class="float-left py-4">
            <NuxtLink to="/">
              <img src="/logo.svg" style="height: 45px" />
            </NuxtLink>
          </div>
          <div class="float-right">
            <div v-for="page in pageLinks" :key="page.id" class="float-left">
              <NuxtLink
                :to="page.link"
                class="font-bold text-gray-900 text-sm px-3 py-2 flex items-center"
                >{{ page.name }}</NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
