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
          <div class="container mx-auto">
            <h1 class="text-white text5rem text-9xl font-black">
              {{ championData.name }}
            </h1>
            <h2 class="text-white text-2xl">{{ championData.title }}</h2>
          </div>
          <div class="bg-gradient-to-b from-transparent to-black h-16"></div>
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
                    <button
                      @click="
                        setActiveSpell(
                          championData.passive.name,
                          championData.passive.description,
                          0
                        )
                      "
                    >
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
                    <button
                      @click="
                        setActiveSpell(
                          spell.name,
                          spell.description,
                          spellKey + 1
                        )
                      "
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
                    {{ activeSpellTitle || championData.passive.name }}
                  </div>
                  <div class="text-white">
                    {{ activeSpellDesc || championData.passive.description }}
                  </div>
                </div>
              </div>
              <div>
                <video></video>
                <video width="400" autoplay>
                  <source
                    :src="
                      'https://blitz-cdn-videos.blitz.gg/tooltip_videos/' +
                      championData.name +
                      '/' +
                      spellStates[activeSpellState] +
                      '.webm'
                    "
                    type="video/webm"
                  />
                  Your browser does not support HTML video.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
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
      activeSpellTitle: '',
      activeSpellDesc: '',
      championId: this.$route.params.championId,
    }
  },
  computed: {
    ...mapGetters({
      championData: 'game/leagueoflegends/championDetail/getChampionData',
    }),
  },

  methods: {
    ...mapActions({
      getChampionData: 'game/leagueoflegends/championDetail/getChampionData',
    }),
    setActiveSpell(spellTitle, spellDesc, spellKey) {
      this.activeSpellTitle = spellTitle
      this.activeSpellDesc = spellDesc
      this.activeSpellState = spellKey
    },
  },
}
</script>
