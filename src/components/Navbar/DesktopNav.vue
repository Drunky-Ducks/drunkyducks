<script>
import { RouterLink } from 'vue-router';
export default {
  name: "DesktopNav",
  components: {
    RouterLink
  }
}
</script>

<template>
  <div class="desktop navbar">
    <div class="nav-item">
      <RouterLink to="/">Inicio</RouterLink>
    </div>
    <div class="nav-item">
      <RouterLink to="/search">Buscador</RouterLink>
    </div>
    <div class="nav-item">
      <RouterLink to="/juegos">Juegos</RouterLink>
    </div>
  </div>
</template>

<style>
.desktop {
  position: fixed;
  width: 100%;
  top: 0;
  background-color: rgb(116, 116, 116);
}
</style>
