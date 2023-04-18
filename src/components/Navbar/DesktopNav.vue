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
     <RouterLink class="nav-item" to="/">INICIO</RouterLink>
      <RouterLink class="nav-item" to="/search">BUSCADOR</RouterLink>
      <RouterLink class="nav-item" to="/juegos">JUEGOS</RouterLink>
    </div>
</template>

<style>
.desktop {
  position: fixed;
  width: 100%;
  top: 0;
  background-color: rgb(116, 116, 116);
  height: 4rem;
}
</style>
