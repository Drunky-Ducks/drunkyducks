<script>
import { RouterView } from 'vue-router';
import FooterPage from './components/FooterPage.vue';
import ModalAge from './components/ModalAge.vue';
export default {
  components: {
    ModalAge, FooterPage, RouterView
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

  <header>
    <div class="title-logo">
      <h1>Drunky<span>Ducks</span></h1>
    </div>
  </header>
  <div class="container">
    <RouterView></RouterView>
  </div>
  <FooterPage></FooterPage>
</template>

<style scoped>

header {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 50px 5px;
}

.title-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  text-shadow: 2px 2px 10px black;
  font-family: Cheri, fantasy;
}

.title-logo a {
  text-decoration: none;
}

.title-logo h1 {
  margin: 0;
  color: #40bfc1;
}

.title-logo span {
  color: #f6c343;
}

.container {
  flex: 1;
}
</style>
