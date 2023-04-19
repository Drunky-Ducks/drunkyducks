<script>
import { RouterView } from 'vue-router';

import FooterPage from './components/FooterPage.vue';
import ModalAge from './components/ModalAge.vue';
import Navbar from './components/Navbar/Navbar.vue';
import ChatHelp from './components/ChatHelp.vue';

export default {
  components: {
    ModalAge, FooterPage, Navbar, ChatHelp,
    RouterView
  },
  data: () => {
    return {
      showModal: false,
      isLight: false,
      showPopUp: true
    }
  },
  computed: {
    isShowModal() {
      return !this.showModal
    },
    getURL() {
      return this.isLight ? "/media/light-duck.png" : "/media/dark-duck.png"
    }
  },
  beforeMount() {
    this.showModal = localStorage.overage === "true"
    this.isLight = JSON.parse(localStorage.getItem("isLight"))
  },
  watch: {
    isLight: function () {
      localStorage.setItem("isLight", JSON.stringify(this.isLight));
    },
    $route (to) {
      const { fullPath: actualPath} = to
      this.showPopUp = actualPath !== '/chat'
    }
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

<template>
  <ModalAge @hiddenModal="hiddenModal" v-if="isShowModal"></ModalAge>
  <Navbar></Navbar>
  <ChatHelp v-if="showPopUp"></ChatHelp>
  <header :class="{ 'light-mode': isLight }">
    <div class="title-logo animate__animated animate__fadeInDown animate__delay-10">
      <h1>Drunky<span>Ducks</span></h1>
    </div>
    <div class='theme-button-wrapper'>
      <button @click=toggleMode>
        <img :src="getURL" class="icon-mode" />
      </button>
    </div>
  </header>
  <div class="container">
    <RouterView />
  </div>
  <FooterPage />
</template>

<style scoped>
header {
  background-color: var(--clr-base-bg);
  color: var(--clr-base-txt);
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
  margin: 20px 5px;
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
