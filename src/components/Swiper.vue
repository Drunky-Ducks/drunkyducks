<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <h1>{{ this.title }}</h1>
  <swiper :slidesPerView="1" :spaceBetween="10" :navigation="false" :modules="modules" :loop="true" :autoplay="{
    delay: 3000,
    disableOnInteraction: false,
  }" :breakpoints="{
  '520': {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  '640': {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  '768': {
    slidesPerView: 2,
    spaceBetween: 30,
  },
  '1024': {
    slidesPerView: 3,
    spaceBetween: 40,
  },
  '1440': {
    slidesPerView: 4,
    spaceBetween: 40,
  },
}" class="mySwiper">
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
import { Navigation, Autoplay } from 'swiper';

export default {
  components: {
    Swiper, SwiperSlide, CardMinimal,
  },
  setup() {
    return {
      modules: [Navigation, Autoplay],
    };
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    cocktails: {
      type: Array,
      default: () => [],
    },
  }
};
</script>
