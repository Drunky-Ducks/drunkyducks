<script>
import MobileNav from './MobileNav.vue'
import DesktopNav from './DesktopNav.vue'

export default {
  name: 'NavBar',
  components: {
    MobileNav,
    DesktopNav
  },
  data() {
    return {
      isMobileSize: ''
    }
  },
  beforeMount() {
    this.isMobileSize = document.documentElement.clientWidth < 500
    window.addEventListener('resize', this.changeContent)
  },
  unmounted() {
    window.removeEventListener('resize', this.changeContent)
  },
  methods: {
    changeContent() {
      this.isMobileSize = document.documentElement.clientWidth < 500
    }
  }
}
</script>

<template>
  <MobileNav v-if="isMobileSize"></MobileNav>
  <DesktopNav v-else>Hola</DesktopNav>
</template>

<style>
.navbar {
  display: flex;
  justify-content: space-between;
  gap: 1px;
  z-index: 2;
}

.nav-item {
  width: 100%;
  background-color: #131313;
  text-align: center;
  font-size: 2rem;
  padding: 10px;
  display: grid;
  place-content: center;
  font-family: DynaPuff-Regular;
}

a {
  text-decoration: none;
  color: var(--clr-primary);
}
</style>
