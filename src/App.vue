<script>
import { RouterView } from 'vue-router';

import FooterPage from './components/FooterPage.vue';
import ModalAge from './components/ModalAge.vue';
import Navbar from './components/Navbar/Navbar.vue';
import ChatHelp from './components/Chat/ChatHelp.vue';
import SwitcherTheme from './components/SwitcherTheme.vue';

export default {
  components: {
    ModalAge, FooterPage, Navbar, ChatHelp,
    RouterView, SwitcherTheme
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
    }
  },
  beforeMount() {
    this.showModal = localStorage.overage === "true"
    this.isLight = JSON.parse(localStorage.getItem("isLight"))
    document.body.classList = this.isLight ? "light-mode" : "dark-mode"
  },
  watch: {
    isLight: function () {
      localStorage.setItem("isLight", JSON.stringify(this.isLight));
      document.body.classList = this.isLight ? "light-mode" : "dark-mode"
    },
    $route(to) {
      const { fullPath: actualPath } = to
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
  <SwitcherTheme :isLight="isLight" @toggleMode="toggleMode"></SwitcherTheme>
  <ChatHelp v-if="showPopUp"></ChatHelp>
  <header>
    <div class="title-logo animate__animated animate__fadeInDown animate__delay-10">
      <h1>Drunky<span>Ducks</span></h1>
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
  text-shadow: 2px 2px 3px black;
  font-family: Cheri, fantasy;
}

.title-logo a {
  text-decoration: none;
}

.title-logo h1 {
  margin: 0;
  color: var(--clr-secondary);
}

.title-logo span {
  color: var(--clr-primary);
}

.container {
  flex: 1;
  margin: 20px 5px;
}

@media screen and (min-width: 500px) {
  .title-logo {
    margin-top: 5rem;
  }
}
</style>
