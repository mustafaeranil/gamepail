<template>
  <div>
    <h1>Champions</h1>
    <ul v-for="champion in champions.data" :key="champion.id">
      <li>
        <p>
          {{ champion.name }} -- {{ champion.title }} // {{ champion.tags }}
        </p>
        <img
          :src="
            'http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/' +
            champion.id +
            '.png'
          "
        />
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  async asyncData({ $axios, $config }) {
    const champions = await $axios.$get(`/data/en_US/champion.json`)
    return { champions }
  },
}
</script>
