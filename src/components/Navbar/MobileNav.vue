<script>
import { RouterLink } from 'vue-router';
export default {
  name: "MobileNav",
  components: RouterLink
}
</script>

<template>
  <div class="mobile navbar">
    <RouterLink class="nav-item" to="/">🏠</RouterLink>
    <RouterLink class="nav-item" to="/buscador">🔍</RouterLink>
    <RouterLink class="nav-item" to="/juegos">🎮</RouterLink>

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
