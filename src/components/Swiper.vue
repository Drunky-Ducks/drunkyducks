<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <h1>{{ this.title }}</h1>
  <swiper :slidesPerView="4" :spaceBetween="30" :navigation="true" :modules="modules" :loop="true" class="mySwiper">
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
  setup() {
    return {
      modules: [Navigation],
    };
  },
  props: {
    // eslint-disable-next-line vue/require-prop-type-constructor
    title: "",
    cocktails: [],
  }
};
</script>
