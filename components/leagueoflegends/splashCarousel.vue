<template>
  <div>
    <div class="relative">
      <swiper ref="swiperTop" class="swiper" :options="swiperOptionTop">
        <swiper-slide
          v-for="slide in slides"
          :key="slide.num"
          class="w-full grid grid-cols-1"
        >
          <div>
            <div>
              <img class="w-full pointer-events-none" :src="slide.imageUrl" />
            </div>
          </div>
        </swiper-slide>
        <div slot="button-prev" class="swiper-button-prev swiper-button"></div>
        <div slot="button-next" class="swiper-button-next swiper-button"></div>
      </swiper>

      <div class="absolute w-full bottom-0 left-0 z-10">
        <div class="container mx-auto">
          <div class="grid grid-cols-2">
            <div class="relative z-10">
              <div class="text-9xl text-white font-black">
                {{ championName }}
              </div>
              <div class="bg-primary w-24 h-1"></div>
              <div class="text-2xl text-white font-black mt-4">
                {{ championTitle }}
              </div>
            </div>

            <div class="mb-8">
              <swiper
                ref="swiperThumbs"
                class="swiper swiper-thumb-splash"
                :options="swiperOptionThumbs"
              >
                <swiper-slide
                  v-for="slide in slides"
                  :key="slide.num"
                  class="w-full grid grid-cols-1"
                >
                  <div>
                    <img
                      class="pointer-events-none w-full"
                      :src="slide.imageUrl"
                    />
                  </div>
                </swiper-slide>
              </swiper>
            </div>
          </div>
        </div>
        <div
          class="bg-gradient-to-b absolute bottom-0 w-full left-0 from-transparent to-black h-48"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    slides: {
      required: true,
      type: [Object, Array],
    },
    championName: {
      type: String,
      default: '',
    },
    championTitle: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      swiperOptionTop: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      swiperOptionThumbs: {
        centeredSlides: true,
        slidesPerView: 3,
        touchRatio: 0.2,
        slideToClickedSlide: true,
        spaceBetween: 20,
      },
    }
  },
  computed: {
    loopedSlides() {
      return this.slider.length
    },
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.$swiper
      const swiperThumbs = this.$refs.swiperThumbs.$swiper
      swiperTop.controller.control = swiperThumbs
      swiperThumbs.controller.control = swiperTop
    })
  },
  methods: {
    slideUpdate() {
      console.log(this.oldSlideIndex)
    },
    slideRight() {},
  },
}
</script>

<style scoped>
.swiper-button {
  color: #a57d41;
  height: 70px;
  width: 70px;
  margin: auto;
  top: 0;
  bottom: 0;
  outline: 0;
}
.swiper-button:after {
  content: '';
  border: solid #a57d41;
  border-width: 0 7px 7px 0;
  display: inline-block;
  padding: 3px;
  width: 50px;
  height: 50px;
}
.swiper-button-prev {
  left: 5%;
}
.swiper-button-next {
  right: 5%;
}
.swiper-button-prev:after {
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
}
.swiper-button-next:after {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  right: 5%;
}
.swiper-thumb-splash .swiper-slide img {
  border: 2px solid #a57d41;
}
.swiper-thumb-splash .swiper-slide .skin-title {
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.2s ease;
}
.swiper-thumb-splash .swiper-slide-active .skin-title {
  visibility: visible;
  opacity: 1;
}
</style>
