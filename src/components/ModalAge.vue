<script>
export default {
  name: "ModalAge",
  methods: {
    overAge: function () {
      localStorage.setItem("overage", true);
      this.$emit("hiddenModal")
    },
    underAge: function () {
      location.replace("https://www.google.com/");
    }
  }
}
</script>

<template>
  <div class="modal">
    <div class="container">
      <div class="line-hr"></div>
      <h1>BIENVENIDO A <span>DRUNKY</span> <span>DUCKS</span></h1>
      <div class="line-hr"></div>
      <h2>¿Eres mayor de edad?</h2>
      <div class="buttons-container">
        <button @click="overAge()" class="button overage">SI</button>
        <button @click="underAge()" class="button underage">NO</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  bottom: 0;
  display: grid;
  place-content: center;
  width: 100%;
  height: 100%;
  background: #2b373d;
  z-index: 3;
}

.container {
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 100px;
}

.line-hr {
  background: #ffc300;
  width: 80%;
  height: 5px;
}

.modal h1 {
  color: var(--default-color);
  font-family: var(--font-no-default);
  font-size: 3em;
}

.modal h1 span {
  color: #de5109;
  font-family: Cheri, fantasy;
  font-size: 1.2em;
}

.modal h1 span:first-child {
  color: #40bfc1;
}

.modal h2 {
  color: var(--default-color);
  font-family: var(--font-no-default);
  font-size: 1.5em;
  text-transform: uppercase;
  margin-top: 20px;
}

.buttons-container {
  display: flex;
  gap: 40px;
}

.buttons-container .button:hover {
  border-width: 3px;
  transform: scale(1.2);
}

.buttons-container .button:first-child:hover {
  border-color: rgb(96 243 96);
  color: rgb(96 243 96);
}

.buttons-container .button:last-child:hover {
  border-color: rgb(244 74 74);
  color: rgb(244 74 74);
}

.overage,
.underage {
  margin-top: 20px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: transparent;
  border: 4px solid var(--default-color);
  color: var(--default-color);
  font-size: 1.5rem;
  cursor: pointer;
}
</style>
