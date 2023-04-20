<script>
export default {
  name: "WaitingResponse",
  data() {
    return {

    };
  },
  mounted() {
    const pointers = {
      0:this.$refs.pointer1,
      1:this.$refs.pointer2,
      2:this.$refs.pointer3,
      3:this.$refs.pointer4
    }

    const keyframes = [
      { transform: "translateY(0)" },
      { transform: "translateY(-5px)" }
    ];

    const options = {
      duration: 600,
      iterations: Infinity,
      direction: "alternate",
      easing: "ease-in-out"
    };

    pointers[0].animate(keyframes, options);
    setTimeout(() => pointers[1].animate(keyframes, options), 200);
    setTimeout(() => pointers[2].animate(keyframes, options), 400);
    setTimeout(() => pointers[3].animate(keyframes, options), 600);
  }
}
</script>

<template>
  <div class="loader">
    <div ref="pointer1" class="pointer"></div>
    <div ref="pointer2" class="pointer"></div>
    <div ref="pointer3" class="pointer"></div>
    <div ref="pointer4" class="pointer"></div>
  </div>
</template>

<style scoped>
.loader {
  display: flex;
  gap: 5px;
}

.pointer {
  width: 7px;
  height: 7px;
  background-color: var(--clr-base-bg);
  border-radius: 50%;
}
</style>
