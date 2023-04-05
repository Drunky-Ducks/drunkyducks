<template>
  <h1>{{ this.title }}</h1>
  <swiper :slidesPerView="3" :spaceBetween="30" :freeMode="true" :pagination="{
    clickable: true,
  }" :modules="modules" class="mySwiper">
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

import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper';

export default {
  components: {
    Swiper, SwiperSlide, CardMinimal,
  },
  setup() {
    return {
      modules: [FreeMode, Pagination],
    };
  },
  props: {
    title: "",
    cocktails: [],
  }
};
</script>
