<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <h1>{{ this.title }}</h1>
  <swiper :slidesPerView="4" :breakpoints="swiperOptions.breakpoints" :navigation="true" :modules="modules" :loop="true"
    class="mySwiper">
    <swiper-slide v-for="(cocktail, index) in cocktails" :key="index">
      <CardMinimal :cocktail="cocktail"></CardMinimal>
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import CardMinimal from '../components/CardMinimal.vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper';

export default {
  components: {
    Swiper, SwiperSlide, CardMinimal,
  },
  data() {
    return {
      swiperOptions: {
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          770: {
            slidesPerView: 2,
            spaceBetween: 50
          },

          771: {
            slidesPerView: 4,
            spaceBetween: 30
          }
        }
      }
    }
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
};
</script>
