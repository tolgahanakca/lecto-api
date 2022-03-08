// Install axios with npm install axios
// Run with RAPIDAPI_API_KEY=<RapidAPI API Key> node examples/javascript/axios.js

const axios = require("axios").default;
const url = require("url");

const params = new url.URLSearchParams();
params.append("to", "es");
params.append("to", "de");
params.append("from", "en");
params.append(
  "texts",
  `"Just try it mate. "
  "What are you waiting for?
`
);
params.append(
  "texts",
  `“Never memorize something that you can look up.”
― Albert Einstein
`
);

var options = {
  method: "POST",
  url: "https://lecto-translation.p.rapidapi.com/v1/translate/text",
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    "x-rapidapi-host": "lecto-translation.p.rapidapi.com",
    "x-rapidapi-key": process.env.RAPIDAPI_API_KEY,
  },
  data: params,
};

axios
  .request(options)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.error(error);
  });

/*
Output:

{
  "translations": [
    {
      "to": "es",
      "translated": [
        "\"Pruébalo, amigo.\"\n  \"¿Que estas esperando?",
        "\"Nunca memorices algo que puedas buscar\".\n- Albert Einstein"
      ]
    },
    {
      "to": "de",
      "translated": [
        "\"Versuch es einfach, Kumpel.\"\n  \"Worauf wartest du?",
        "„Merke nie etwas aus, was du nachschlagen kannst.“\n- Albert Einstein"
      ]
    }
  ],
  "from": "en",
  "translated_characters": 234
}
*/
