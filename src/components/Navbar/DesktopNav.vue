<script>
import { RouterLink } from 'vue-router'
export default {
  name: 'DesktopNav',
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
  height: 5rem;
  box-shadow: -1px 8px 17px 2px rgba(0, 0, 0, 0.48);
  background-color: #131313;
}
@media screen and (min-width: 900px) {
  .nav-item {
    transition: all 0.3s ease-in-out;
  }
  .nav-item:hover {
    color: #40bfc1;
    border-bottom: #40bfc1 3px solid;
    transform: scale(1.1);
  }
}
</style>
