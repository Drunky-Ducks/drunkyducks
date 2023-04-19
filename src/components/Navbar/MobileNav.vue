<script>
import { RouterLink } from 'vue-router';
export default {
  name: "MobileNav",
  components: RouterLink
}
</script>

<template>
  <div class="mobile navbar">
    <div class="nav-item">
      <RouterLink to="/">🏠</RouterLink>
    </div>
    <div class="nav-item">
      <RouterLink to="/buscador">🔍</RouterLink>
    </div>
    <div class="nav-item">
      <RouterLink to="/juegos">🎮</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.mobile {
  order: 1;
  position: sticky;
  bottom: 0;
  background-color: rgb(51, 51, 51);
}
</style>
