<script>
import { RouterView } from 'vue-router';

import FooterPage from './components/FooterPage.vue';
import ModalAge from './components/ModalAge.vue';
import Navbar from './components/Navbar/Navbar.vue';

export default {
  components: {
    ModalAge, FooterPage, Navbar,
    RouterView
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
  <Navbar></Navbar>
  <header :class="{ 'light-mode': isLight }">
    <div class="title-logo animate__animated animate__fadeInDown animate__delay-10">
      <h1>Drunky<span>Ducks</span></h1>
    </div>
    <div class='theme-button-wrapper'>
      <button v-if="isLight" @click=toggleMode>
        <img src="media/dark-duck.png" class="icon-mode" />
      </button>
      <button v-else @click=toggleMode>
        <img src="media/light-duck.png" class="icon-mode" />
      </button>
    </div>
  </header>
  <div class="container" :class="{ 'light-mode': isLight }">
    <RouterView />
  </div>
  <FooterPage :class="{ 'light-mode': isLight }" />
</template>

<style scoped>
header {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 30px 5px;
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
  margin: 7px;
}

.theme-button-wrapper {
  display: flex;
  justify-content: end;
  transition: all 1s;
  margin-right: 10%;
  align-items: center;
}

.theme-button-wrapper button {
  background-color: gray;
  border: none;
  border-radius: 50%;
  padding: 0.5%;
  font-size: 150%;
}

@media screen and (max-width: 576px) {
  .theme-button-wrapper {
    margin-top: 2rem;
    padding: 0;
  }
}

@media screen and (max-width: 776px) {
  .theme-button-wrapper {
    margin-top: 3rem;
  }
}
@media screen and (min-width: 500px) {
  .title-logo{
    margin-top: 5rem;
   }
  }
</style>
