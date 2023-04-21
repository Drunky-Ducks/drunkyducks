<script>
import InstagramIcon from './Icons/InstagramIcon.vue';
import EmailIcon from './Icons/EmailIcon.vue';
import TwitterIcon from './Icons/TwitterIcon.vue'

export default {
  name: "FooterPage",
  components: {
    InstagramIcon, EmailIcon, TwitterIcon
  }
}
</script>

<template>
  <footer class="footer">
    <div class="social-container">
      <div class="icon-container">
        <a class='icon instagram' href="https://www.instagram.com/drunkyducks/" aria-label="Link to us Instagram page">
          <InstagramIcon></InstagramIcon>
        </a>
        <a class='icon twitter' href="https://twitter.com/DrunkyDucks " aria-label="Link to us Twitter page">
          <TwitterIcon></TwitterIcon>
        </a>
        <a class='icon email' href=mailto:drunkyducks@gmail.com aria-label="Send a message to us">
          <EmailIcon></EmailIcon>
        </a>
      </div>
    </div>
    <div class="developed">
      <span>Desarrollado por Drapper Drake ©</span>
    </div>
  </footer>
</template>

<style>
footer {
  border-top: 5px solid var(--clr-primary);
  background: var(--clr-base-bg);
  color: var(--clr-base-txt);
  width: 100%;
  display: grid;
  padding: 10px;
  grid-template-rows: repeat(2, 1fr);
  font-size: 1em;
  gap: 10px;
}

.social-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.icon-container {
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: center;
}

.icon {
  font-size: 1em;
  color: var(--clr-base-txt);
  text-decoration: none;
  width: 2em;
  height: 2em;
}

.developed {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
