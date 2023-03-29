<script>
import ModalAge from './components/ModalAge.vue';
export default {
  components: {
    ModalAge
  },
  data: () => {
    return {
      showModal: false
    }
  },
  computed: {
    isShowModal() {
      return !this.showModal
    }
  },
  mounted() {
    this.showModal = localStorage.overage === "true"
  },
  methods: {
    hiddenModal() {
      this.showModal = true;
    }
  }
}
</script>

<template>
  <ModalAge @hiddenModal="hiddenModal" v-if="isShowModal"></ModalAge>
  <h1>drunkyducks</h1>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
