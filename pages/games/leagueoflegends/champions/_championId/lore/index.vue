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
            <div class="py-20 items-center">
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
                <div class="text-primary">{{ championData.lore }}</div>
              </div>
            </div>
            <div class="bg-primary mx-auto w-10/12 h-px"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import splashcarousel from '@/components/leagueoflegends/splashCarousel'
export default {
  components: {
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

  computed: {
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
    ...mapGetters({
      championData: 'game/leagueoflegends/championDetail/getChampionData',
    }),
  },
}
</script>
