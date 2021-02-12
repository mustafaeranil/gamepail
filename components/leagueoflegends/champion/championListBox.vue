<template>
  <div>
    <NuxtLink
      class="block relative rounded-b-xl overflow-hidden"
      :to="$route.path + '/' + championData.id"
    >
      <img
        class="w-full"
        :src="
          'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/' +
          championData.id +
          '_0.jpg'
        "
      />
      <div
        class="absolute bg-primary text-2xl text-white font-bold py-2 bottom-0 left-0 w-full text-center"
      >
        {{ championData.name }}
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    championData: {
      required: true,
      type: Object,
    },
  },
}
</script>

<style></style>
