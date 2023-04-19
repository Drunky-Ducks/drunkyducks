
<template>
  <div class="chat-container">
    <div class="chat-box" ref="chatBox">
      <div v-for="message in messages" :key="message.id">
        <p v-if="message.isReceived" class="received">{{ message.text }}</p>
        <p v-else class="sent">{{ message.text }}</p>
      </div>
    </div>
    <div class="form">
      <form @submit.prevent="sendMessage">
        <input type="text" v-model="newMessage" placeholder="Hola soy Patomocho.¿En que puedo ayudarle?">
        <button type="submit">Enviar</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [],
      newMessage: '',
    };
  },
  methods: {
    async sendMessage() {
      const message = {
        id: Date.now(),
        text: `Yo: ${this.newMessage}`,
        isReceived: false,
      };
      this.messages.push(message);
      this.newMessage = '';

      this.$nextTick(() => {
        this.$refs.chatBox.scrollTo(0, this.$refs.chatBox.scrollHeight);
      });

      try {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer   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');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST');
        headers.append('Access-Control-Allow-Headers', 'Content-Type, Authorization');

        const response = await fetch('https://api.openai.com/v1/completions', {
          method: 'POST',
          headers: headers,
          body: JSON.stringify({
            prompt: `Soy Patomocho, tu barman personal.\nSobre cócteles: Pregunta: ${message.text}\nRespuesta:`,
            max_tokens: 1000,
            model: 'text-davinci-003'
          })
        });

        const generatedText = (await response.json()).choices[0].text.trim();

        const receivedMessage = {
          id: Date.now(),
          text: `Patomocho: ${generatedText}`,
          isReceived: true,
        };
        this.messages.push(receivedMessage);

        // Desplazar automáticamente el chat-box hasta el fondo después de recibir un mensaje
        this.$nextTick(() => {
          this.$refs.chatBox.scrollTo(0, this.$refs.chatBox.scrollHeight);
        });
      } catch (error) {
        console.error(error);
        const errorMessage = {
          id: Date.now(),
          text: 'Patomocho ha bebido demasiado..',
          isReceived: true,
        };
        this.messages.push(errorMessage);
      }
    },
  },
};
</script>



<style>
.chat-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
}

.chat-box,
.form {
  width: 100%;
  max-width: 500px;
}

.chat-box {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
  box-sizing: border-box;
  overflow-y: auto;
  gap: 10px;
}

form {
  display: flex;
  margin-top: 10px;
}

input[type="text"] {
  flex-grow: 1;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px 0 0 5px;
  margin-right: 5px;
}

button[type="submit"] {
  padding: 10px;
  font-size: 16px;
  background-color: var(--clr-primary);
  color: black;
  border: none;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
}

.received {
  background-color: var(--clr-secondary);
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 5px;
  max-width: 80%;
  align-self: flex-start;
  color: var(--clr-base-bg);

  margin-right: auto;
  margin-left: 0;
}

.sent {
  background-color: var(--clr-primary);
  color: black;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 5px;
  max-width: 80%;
  align-self: flex-end;
  margin-left: auto;
  margin-right: 0;
}

.sent::before {

  font-weight: bold;
}

.received::before {

  font-weight: bold;
}

@media only screen and (max-width: 500px) {
  .chat-box {
    max-height: 500px;
  }

  .sent,
  .received {
    max-width: 90%;
  }
}

@media only screen and (min-width: 500px) {
  .chat-box {
    max-height: 600px;
  }
}
</style>


