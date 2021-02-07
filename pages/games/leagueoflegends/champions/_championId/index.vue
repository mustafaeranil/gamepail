<template>
  <div>
    <div>
      <div class="relative">
        <img
          class="w-full"
          :src="
            'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/' +
            championData.id +
            '_0.jpg'
          "
        />
        <div class="absolute bottom-0 left-0 w-full">
          <div class="bg-gradient-to-b from-transparent to-black h-48">
            <div class="container mx-auto">
              <h1 class="text-white text5rem text-9xl font-black">
                {{ championData.name }}
              </h1>
              <h2 class="text-white text-2xl">{{ championData.title }}</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="">
        <div class="bg-black">
          <div class="container mx-auto">
            <div class="grid grid-cols-2 py-20">
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
                      <span v-for="(tag, key) in championData.tags" :key="tag">
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
              <div></div>
            </div>
            <div class="bg-primary mx-auto w-10/12 h-px"></div>
            <div class="grid grid-cols-2 py-20">
              <div
                class="text-5xl font-black text-primary col-span-2 text-center"
              >
                Spells
              </div>
              <div>
                <div class="float-left w-full">
                  <div class="float-left mr-2">
                    <button @click="setActiveSpell(0)">
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
                    class="float-left mr-2"
                  >
                    <button @click="setActiveSpell(spellKey + 1)">
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
                <video width="450" controls :src="selectSpell.video"></video>
              </div>
            </div>
          </div>
        </div>
        <div class="relative">
          <div
            class="z-10 bg-gradient-to-t absolute top-0 w-full left-0 from-transparent to-black h-8"
          ></div>
          <div>
            <lolcarousel :slides="carouselSlides"></lolcarousel>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import lolcarousel from '@/components/leagueoflegends/carousel'
export default {
  components: {
    lolcarousel,
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
          this.championData.name +
          '_' +
          slide.num +
          '.jpg'
      }
      return carouselObj
    },
    selectSpell() {
      const video =
        'https://blitz-cdn-videos.blitz.gg/tooltip_videos/' +
        this.championData.name +
        '/' +
        this.spellStates[this.activeSpellState] +
        '.webm'
      if (this.activeSpellState === 0) {
        return { ...this.championData.passive, video }
      } else {
        return { ...this.championData.spells[this.activeSpellState - 1], video }
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
