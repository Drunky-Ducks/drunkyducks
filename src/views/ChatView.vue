  <template>
    <div class="chat-box">
      <div v-for="message in messages" :key="message.id">
        <p v-if="message.isReceived" class="received">{{ message.text }}</p>
        <p v-else class="sent">{{ message.text }}</p>
      </div>
      <form @submit.prevent="sendMessage">
        <input type="text" v-model="newMessage" placeholder="Hola soy Patomocho.¿En que puedo ayudarle?">
        <button type="submit">Enviar</button>
      </form>
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
              prompt: `Soy Patomocho, tu barman  personal.\nSobre cócteles: Pregunta: ${message.text}\nRespuesta:`,  
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
 .chat-box {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 500px;
  margin-bottom: 100px;


  
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
  background-color: #f6c343;
  color: black;
  border: none;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
}

.received {
  background-color: #40bfc1;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 5px;
  max-width: 80%;
  align-self: flex-start;
  color: black;
 
  margin-right: auto;
  margin-left: 0;
}

.sent {
  background-color: #f6c343;
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
    height: auto;
    max-width: 100%;
    margin: 0;
  }

  .sent,
  .received {
    max-width: 90%;
  }
}

  </style> 

 
  