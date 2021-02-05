<template>
  <div>
    <div class="container mx-auto">
      <h1>Champions</h1>
      <ul v-for="champion in champions" :key="champion.id">
        <li>
          <NuxtLink
            class="mb-4 flex"
            :to="'/games/leagueoflegends/championDetail/' + champion.id"
          >
            <img
              class="mr-4 w-10"
              :src="
                'http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/' +
                champion.id +
                '.png'
              "
            />
            <span
              >{{ champion.name }} -- {{ champion.title }} //
              {{ champion.tags }}</span
            >
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      champions: 'game/leagueoflegends/champions/getChampionList',
    }),
  },
  created() {
    this.getChampionList()
  },
  methods: {
    ...mapActions({
      getChampionList: 'game/leagueoflegends/champions/getChampionList',
    }),
  },
}
</script>
