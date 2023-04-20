<script>
import { RouterLink } from 'vue-router';
import  HomeIcon  from '../Icons/HomeIcon.vue';
import  SearchIcon  from '../Icons/SearchIcon.vue';
import  GamesIcon  from '../Icons/GamesIcon.vue';
export default {
  name: "MobileNav",
  components: { RouterLink, HomeIcon, SearchIcon, GamesIcon }
}
</script>
<template>
  <div class="mobile navbar">
    <router-link class="nav-item" to="/"><HomeIcon></HomeIcon></router-link>
    <router-link class="nav-item" to="/buscador"><SearchIcon></SearchIcon></router-link>
    <router-link class="nav-item" to="/juegos"><GamesIcon></GamesIcon></router-link>
  </div>
</template>


<style scoped>
.mobile {
  order: 1;
  position: sticky;
  bottom: 0;
  background-color: rgb(51, 51, 51);
}
.fa-house {
  font-size: 2rem;
  color: red;
}
</style>
