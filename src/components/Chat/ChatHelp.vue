<script>
import { RouterLink } from 'vue-router';

export default {
  name: "ChatHelp",
  components: {
    RouterLink
  }
}
</script>

<template>
  <RouterLink class="pop-up" to="/chat" title="Te ayudo?">
    <img src="/media/chat.png" alt="">
  </RouterLink>
</template>

<style scoped>
.pop-up {
  width: 4rem;
  height: 4rem;
  position: fixed;
  bottom: 70px;
  right: 10px;
  z-index: 3;
  background-color: var(--clr-secondary);
  color: var(--clr-base-bg);
  font-size: 2rem;
  font-weight: 900;
  font-family: DynaPuff-Regular;
  display: grid;
  place-content: center;
  border-radius: 15px;
}
</style>
