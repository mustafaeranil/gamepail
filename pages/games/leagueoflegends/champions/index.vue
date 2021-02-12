<template>
  <div>
    <div class="relative">
      <img src="/lol_banner.jpg" class="w-full" />
      <div
        class="absolute top-0 left-0 w-full h-full flex justify-center items-center"
      >
        <img style="max-width: 100%; width: 450px" src="/lol_banner_text.png" />
      </div>
    </div>
    <div class="container mx-auto">
      <div class="my-10">
        <h1 class="text-primary font-bold text-5xl">Champions</h1>
      </div>
      <div class="flex justify-center mb-4">
        <div class="relative">
          <input
            id="championSearch"
            v-model="championSearchBox"
            placeholder="Search a champion"
            class="border border-gray-400 text-center p-2 max-w-full w-64"
            style="outline: none"
            type="textbox"
            autocomplete="off"
            @keyup="
              setFilteredChampionList({
                query: $event.target.value,
                filterOption: activeFilter,
                championList: championList,
              })
            "
          />
          <div
            v-if="championSearchBox"
            class="absolute left-0 w-full bg-white z-10 shadow"
            style="top: 100%"
          >
            <div
              v-for="filteredChampion in searchedChampions"
              :key="filteredChampion.id"
            >
              <button
                class="p-4 hover:bg-gray-300 w-full text-left"
                @click="
                  setFilteredChampionList({
                    query: filteredChampion.name,
                    filterOption: activeFilter,
                    championList: championList,
                  }),
                    (championSearchBox = filteredChampion.name)
                "
              >
                {{ filteredChampion.name }}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-4 flex justify-center items-center border border-gray-400">
        <div
          v-for="filterOption in filterOptions"
          :key="filterOption.query"
          class="px-2 py-4 border-b-2 border-white text-gray-400"
          :class="{
            'border-primary text-gray-800': activeFilter === filterOption.query,
          }"
        >
          <button
            style="outline: none"
            @click="
              ;(activeFilter = filterOption.query),
                setFilteredChampionList({
                  query: '',
                  filterOption: filterOption.query,
                  championList: championList,
                }),
                (championSearchBox = '')
            "
          >
            {{ filterOption.name }}
          </button>
        </div>
      </div>
      <championListTable :champions="filteredChampionList"></championListTable>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import championListTable from '@/components/leagueoflegends/champion/championListTable'
export default {
  components: {
    championListTable,
  },
  async asyncData({ store }) {
    await store.dispatch('game/leagueoflegends/champions/getChampionList')
  },
  data() {
    return {
      activeFilter: '',
      championSearchBox: '',
      filterOptions: {
        all: {
          id: '1',
          name: 'All',
          query: '',
        },
        assassins: {
          id: '2',
          name: 'Assassins',
          query: 'Assassin',
        },
        mages: {
          id: '3',
          name: 'Mages',
          query: 'Mage',
        },
        fighter: {
          id: '4',
          name: 'Supports',
          query: 'Support',
        },
        marksmans: {
          id: '5',
          name: 'Marksmans',
          query: 'Marksman',
        },
        tank: {
          id: '6',
          name: 'Tanks',
          query: 'Tank',
        },
      },
    }
  },
  computed: {
    searchedChampions() {
      return this.firstN(this.filteredChampionList, 5)
    },
    ...mapGetters({
      championList: 'game/leagueoflegends/champions/getChampionList',
      filteredChampionList:
        'game/leagueoflegends/champions/getFilteredChampionList',
    }),
  },
  methods: {
    ...mapActions({
      setFilteredChampionList:
        'game/leagueoflegends/champions/setFilteredChampionList',
    }),
    setActiveSpell(spellKey) {
      this.activeSpellState = spellKey
    },
    firstN(obj, n) {
      return Object.keys(obj)
        .sort()
        .slice(0, n)
        .reduce(function (memo, current) {
          memo[current] = obj[current]
          return memo
        }, {})
    },
  },
}
</script>
