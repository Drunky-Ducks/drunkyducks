<template>
    <div class='theme-button-wrapper'>
        <button @click=toggleMode aria-label="cambiar tema">
            <img :src="getURL" class="icon-mode" alt="cambiar tema"/>
        </button>
    </div>
</template>

<script>
export default {
    name: 'SwitcherTheme',
    props: {
        isLight: {
            type: Boolean
        }
    },
    computed: {
        getURL() {
            return this.isLight ? "/media/light-duck.png" : "/media/dark-duck.png"
        }
    },
    methods: {
        toggleMode() {
            this.$emit('toggleMode')
        }
    },
}
</script>

<style scoped>
/* Light Mode Theme */
.theme-button-wrapper button {
    box-shadow: 0 0 5px black;
}

.icon-mode {
    width: 80%;
}

.theme-button-wrapper {
    width: 4rem;
    height: 4rem;
    position: fixed;
    left: 10px;
    z-index: 3;
    transition: all 1s;
}

.theme-button-wrapper button {
    background-color: gray;
    border: none;
    border-radius: 15px;
    padding: 5px;
    width: 100%;
    height: 100%;
}

@media screen and (max-width: 575px) {
    .theme-button-wrapper {
        bottom: 70px;
    }
}

@media screen and (min-width: 576px) {
    .theme-button-wrapper {
        top: 4rem;

    }

}
</style>