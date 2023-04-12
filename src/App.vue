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
      showModal: false,
      isLight: false
    }
  },
  computed: {
    isShowModal() {
      return !this.showModal
    }
  },
  beforeMount() {
    this.showModal = localStorage.overage === "true"
  },
  watch: {
    isLight: function () {
      localStorage.setItem("isLight", JSON.stringify(this.isLight));
    }
  },
  created() {
    this.isLight = JSON.parse(localStorage.getItem("isLight"));
  },
  methods: {
    hiddenModal() {
      this.showModal = true;
    },
    toggleMode() {
      this.isLight = !this.isLight;
    }
  }
}
</script>

<template >
  <ModalAge @hiddenModal="hiddenModal" v-if="isShowModal"></ModalAge>

  <header :class="{ 'light-mode': isLight }">
    <div class="title-logo">
      <h1>Drunky<span>Ducks</span></h1>
    </div>
    <div class='theme-button-wrapper'>
      <button v-if="isLight" @click=toggleMode> 🌙 </button>
      <button v-else @click=toggleMode> 😎 </button>
    </div>
  </header>
  <div class="container" :class="{ 'light-mode': isLight }">
    <RouterView />
  </div>
  <FooterPage :class="{ 'light-mode': isLight }" />
</template>

<style scoped>
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

.theme-button-wrapper {
  display: flex;
  justify-content: end;
  transition: all 1s;
  margin-right: 10%;
}

.theme-button-wrapper button {
  background-color: gray;
  border: none;
  border-radius: 50%;
  padding: 0.5%;
  font-size: 150%;
}
</style>
