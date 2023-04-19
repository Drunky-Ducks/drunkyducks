<script>
export default {
    name: 'NewCocktailForm'
}
</script>
<template>
    <div class="form-container">
        <form action="https://formsubmit.co/drunkyducks@gmail.com" method="POST">
            <h1>Crea tu propio cóctel</h1>

            <div class="cocktail-details">
                <input type="email" name="email" class="email" placeholder="Correo electrónico" required>
                <input type="cocktail" name="cocktail" class="cocktail" placeholder="Nombre del cóctel" required>
                <textarea name="description" class="description"
                    placeholder="Descripción o ingredientes del cóctel"></textarea>
            </div>

            <button type="submit">ENVIAR</button>

            <!-- <input type="hidden" name="_next" value="PONER DOMINIO DE DRUNKY DUCKS"> -->
            <input type="hidden" name="_captcha" value="false">
        </form>
    </div>
</template>

<style scoped>
@media screen and (min-width: 320px) {
    .form-container {
        display: flex;
        justify-content: center;
    }

    form {
        width: 84vw;
        height: 50vh;
        background-color: var(--clr-base-bg);
        display: grid;
        grid-template-rows: 0.3fr 1.2fr 0.5fr;
        gap: 30px;
    }

    h1 {
        color: var(--clr-primary);
        align-self: center;
        text-align: center;
        font-weight: 700;
        font-size: 2rem;
        text-shadow: 2px 2px 2px black;
        font-family: DynaPuff-Regular;
    }

    .cocktail-details {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    input,
    textarea {
        padding: 8px;
        background-color: #f5f5f5;
        border: none;
        outline: none;
        font-size: 16px;
        box-shadow: 0 0 2px #f5f5f5;
        font-family: Durusans, monospace;
        border-radius: 15px;

    }

    textarea {
        resize: none;
        height: 200px;
    }

    form button {
        width: 100px;
        padding: 10px;
        background-color: var(--clr-primary);
        color: black;
        border: none;
        border-radius: 15px;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        font-weight: 700;
        align-self: flex-start;
        justify-self: center;
        font-family: Durusans, monospace;

    }
}

@media screen and (min-width: 425px) {
    form {
        width: 80vw;
    }
}

@media screen and (min-width: 768px) {
    form {
        width: 60vw;
        height: 90vh;
        grid-template-rows: 1fr 1fr 1fr;
        gap: 20px;
    }

    h1 {
        font-size: 3rem;
    }

    input,
    textarea {
        padding: 15px;
        font-size: 18px;
    }
}

@media screen and (min-width: 1024px) {
    h1 {
        font-size: 3rem;
    }

    form {
        width: 50vw;
        gap: 10px;
    }

    form button:active {
        box-shadow: 0 0 10px var(--clr-primary);
        transform: scale(0.95);
        transition: all 0.2s ease-out;
    }

    input:hover,
    textarea:hover {
        background-color: #e4e4e4f5;
        transition: all 0.7s ease-in-out;
    }
}

@media screen and (min-width: 1440px) {
    h1 {
        font-size: 3rem;
    }

    form {
        width: 35vw;
    }
}
</style>