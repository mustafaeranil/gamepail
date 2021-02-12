<template>
  <div>
    <div>
      <div class="relative">
        <splashcarousel
          :slides="carouselSlides"
          :champion-name="championData.name"
          :champion-title="championData.title"
        ></splashcarousel>
      </div>
      <div class="">
        <div class="bg-black">
          <div class="container mx-auto">
            <div class="grid grid-cols-2 py-20 items-center">
              <div class="grid">
                <div class="py-8 px-2">
                  <div
                    class="rounded-full mr-8 float-left overflow-hidden w-32 border-primary border-2"
                  >
                    <img
                      class="w-full"
                      :src="
                        'http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/' +
                        championData.image.full
                      "
                    />
                  </div>
                  <div class="">
                    <div class="text-5xl font-black text-primary">
                      {{ championData.name }}
                    </div>
                    <div class="text-white italic">
                      "
                      <span
                        v-for="(tag, key) in championData.tags"
                        :key="tag.index"
                      >
                        {{ tag }}
                        <template v-if="key + 1 < championData.tags.length"
                          >,</template
                        >
                      </span>
                      "
                    </div>
                  </div>
                </div>
                <div class="text-primary">{{ championData.blurb }}</div>
              </div>
              <div class="flex flex-wrap items-center">
                <div class="relative w-16 h-48 overflow-hidden float-left">
                  <div
                    style="right: 33px"
                    class="border-8 absolute top-0 bottom-0 m-auto border-primary transform rotate-45 w-16 h-16"
                  ></div>
                </div>
                <NuxtLink :to="$route.path + '/lore'">
                  <div class="text-primary text-5xl font-black">Discover</div>
                  <div class="text-primary text-3xl font-bold">
                    The Full Story
                  </div>
                </NuxtLink>
              </div>
            </div>
            <div class="bg-primary mx-auto w-10/12 h-px"></div>
            <div class="grid grid-cols-2 py-20">
              <div
                class="text-5xl font-black text-primary col-span-2 italic text-center mb-8"
              >
                Spells
              </div>
              <div>
                <div class="float-left w-full flex flex-wrap items-end mb-4">
                  <div
                    class="float-left mr-2 border-2 border-primary rounded overflow-hidden"
                    :class="{
                      'spell-active': !selectSpell.activeSpellKey,
                    }"
                  >
                    <button class="float-left" @click="setActiveSpell(0)">
                      <img
                        :src="
                          'http://ddragon.leagueoflegends.com/cdn/11.3.1/img/passive/' +
                          championData.passive.image.full
                        "
                      />
                    </button>
                  </div>
                  <div
                    v-for="(spell, spellKey) in championData.spells"
                    :key="spell.index"
                    class="float-left mr-2 border-2 border-primary rounded overflow-hidden"
                    :class="{
                      'spell-active':
                        selectSpell.activeSpellKey === spellKey + 1,
                    }"
                  >
                    <button
                      class="float-left"
                      @click="setActiveSpell(spellKey + 1)"
                    >
                      <img
                        :src="
                          'http://ddragon.leagueoflegends.com/cdn/11.3.1/img/spell/' +
                          spell.id +
                          '.png'
                        "
                      />
                    </button>
                  </div>
                </div>
                <div>
                  <div class="text-primary font-black italic">
                    {{ selectSpell.name }}
                  </div>
                  <div class="text-white">
                    {{ selectSpell.description }}
                  </div>
                </div>
              </div>
              <div>
                <video
                  width="450"
                  height="380"
                  controls
                  :src="selectSpell.video"
                  style="min-height: 300px"
                ></video>
              </div>
            </div>
            <div class="bg-primary mx-auto w-10/12 h-px"></div>
            <div class="grid py-20">
              <div
                class="text-5xl font-black text-primary text-center italic mb-8"
              >
                Character Stats
              </div>
              <div>
                <div
                  v-for="stat in champStats"
                  :key="stat.index"
                  class="text-gray-200 flex flex-row items-center mb-8 justify-center"
                >
                  <div>
                    <div
                      class="inline-block h-2 w-2 rounded-full bg-primary mr-4"
                    ></div>
                  </div>
                  <div class="text-2xl">
                    <span class="text-primary font-bold"
                      >{{ stat.name }} :
                    </span>
                    {{ stat.stat }}
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-primary mx-auto w-10/12 h-px"></div>
            <div class="grid grid-cols-2 py-20">
              <div
                class="text-5xl font-black text-primary col-span-2 text-center italic mb-8"
              >
                Tips
              </div>
              <div>
                <div
                  class="text-3xl font-bold text-primary text-center mb-8 italic"
                >
                  As {{ championData.name }}
                </div>
                <div>
                  <div
                    v-for="allytip in championData.allytips"
                    :key="allytip.index"
                    class="text-gray-200 flex flex-row items-center mb-8"
                  >
                    <div>
                      <div
                        class="inline-block h-2 w-2 rounded-full bg-primary mr-4"
                      ></div>
                    </div>
                    <div>{{ allytip }}</div>
                  </div>
                </div>
              </div>
              <div>
                <div
                  class="text-3xl font-bold text-primary text-center mb-8 italic"
                >
                  Againts {{ championData.name }}
                </div>
                <div>
                  <div
                    v-for="enemytip in championData.enemytips"
                    :key="enemytip.index"
                    class="text-gray-200 flex flex-row items-center mb-8"
                  >
                    <div>
                      <div
                        class="inline-block h-2 w-2 rounded-full bg-primary mr-4"
                      ></div>
                    </div>
                    <div>{{ enemytip }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="relative">
          <div
            class="z-10 bg-gradient-to-t absolute top-0 w-full left-0 from-transparent to-black h-8"
          ></div>
          <div>
            <skincarousel :slides="carouselSlides"></skincarousel>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import splashcarousel from '@/components/leagueoflegends/splashCarousel'
import skincarousel from '@/components/leagueoflegends/carousel'
export default {
  components: {
    skincarousel,
    splashcarousel,
  },
  async asyncData({ params, error, store }) {
    try {
      await store.dispatch(
        'game/leagueoflegends/championDetail/getChampionData',
        params.championId
      )
    } catch (e) {
      error({})
    }
  },
  data() {
    return {
      activeSpellState: 0,
      spellStates: ['P', 'Q', 'W', 'E', 'R'],
      championId: this.$route.params.championId,
    }
  },

  computed: {
    ...mapGetters({
      championData: 'game/leagueoflegends/championDetail/getChampionData',
    }),
    carouselSlides() {
      const carouselObj = this.championData.skins
      for (const slide of carouselObj) {
        slide.imageUrl =
          'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/' +
          this.championData.id +
          '_' +
          slide.num +
          '.jpg'
      }
      return carouselObj
    },
    champStats() {
      const champStatsObj = {}
      champStatsObj.hp = {}
      champStatsObj.hp.name = 'Healt Point'
      champStatsObj.hp.stat =
        this.championData.stats.hp +
        '(+' +
        this.championData.stats.hpperlevel +
        ')'
      champStatsObj.mp = {}
      champStatsObj.mp.name = 'Mana/Energy Point'
      champStatsObj.mp.stat =
        this.championData.stats.mp +
        '(+' +
        this.championData.stats.mpperlevel +
        ')'
      champStatsObj.armor = {}
      champStatsObj.armor.name = 'Armor'
      champStatsObj.armor.stat =
        this.championData.stats.armor +
        '(+' +
        this.championData.stats.armorperlevel +
        ')'
      champStatsObj.ms = {}
      champStatsObj.ms.name = 'Move Speed'
      champStatsObj.ms.stat = this.championData.stats.movespeed
      champStatsObj.sp = {}
      champStatsObj.sp.name = 'Spell Block'
      champStatsObj.sp.stat =
        this.championData.stats.spellblock +
        '(+' +
        this.championData.stats.spellblockperlevel +
        ')'
      champStatsObj.ar = {}
      champStatsObj.ar.name = 'Attack Range'
      champStatsObj.ar.stat =
        this.championData.stats.attackrange +
        '(+' +
        this.championData.stats.attackrangeperlevel +
        ')'
      champStatsObj.ad = {}
      champStatsObj.ad.name = 'Attack Damage'
      champStatsObj.ad.stat =
        this.championData.stats.attackdamage +
        '(+' +
        this.championData.stats.attackdamageperlevel +
        ')'
      champStatsObj.as = {}
      champStatsObj.as.name = 'Attack Speed'
      champStatsObj.as.stat =
        this.championData.stats.attackspeed +
        '(+' +
        this.championData.stats.attackspeedperlevel +
        ')'
      return champStatsObj
    },
    selectSpell() {
      const activeSpellKey = this.activeSpellState
      const video =
        'https://blitz-cdn-videos.blitz.gg/tooltip_videos/' +
        this.championData.id +
        '/' +
        this.spellStates[this.activeSpellState] +
        '.webm'
      if (this.activeSpellState === 0) {
        return { ...this.championData.passive, video }
      } else {
        return {
          ...this.championData.spells[this.activeSpellState - 1],
          video,
          activeSpellKey,
        }
      }
    },
  },

  methods: {
    ...mapActions({
      getChampionData: 'game/leagueoflegends/championDetail/getChampionData',
    }),
    setActiveSpell(spellKey) {
      this.activeSpellState = spellKey
    },
  },
}
</script>
<style scoped>
.spell-active img {
  width: 90px;
}
</style>
