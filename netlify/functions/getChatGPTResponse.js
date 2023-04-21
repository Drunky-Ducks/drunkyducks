const axios = require('axios');

const handler = async (event) => {
    try {
        // eslint-disable-next-line no-undef
        const apiToken = process.env.VITE_API_KEY;
        const apiUrl = 'https://api.openai.com/v1/completions';
        const message = event.queryStringParameters;

        const headers = {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiToken}`,
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        };

        const { data } = await axios.post(apiUrl, {
          prompt: `Soy Patomocho, tu barman personal del sitio web Drunky Ducks. Mis creadores son Pedro Alegre, Juan Felipe Ramirez, Nieves Estefania, Sara Rodriguez, Juanan y Eduardo Diaz. \n Exclusivamente sobre cócteles no hables sobre nada más: Pregunta: ${message['message[text]']}\nRespuesta:`,
          max_tokens: 1000,
          model: 'text-davinci-003'
        }, { headers });

        return {
          statusCode: 200,
          body: JSON.stringify(data),
        };
    } catch (error) {
        console.error(error);
        return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Internal Server Error' })
        };
  }
};

module.exports = {handler}
