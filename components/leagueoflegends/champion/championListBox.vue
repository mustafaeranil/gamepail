<template>
  <div>
    <li>
      <NuxtLink
        class="mb-4 flex"
        :to="'/games/leagueoflegends/champions/' + championData.id"
      >
        <img
          class="mr-4 w-10"
          :src="
            'http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/' +
            championData.id +
            '.png'
          "
        />
        <span>{{ championData.name }} {{ championData.tags }}</span>
      </NuxtLink>
    </li>
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
