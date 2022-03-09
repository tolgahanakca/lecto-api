// We use node-fetch for NodeJS as fetch is not available natively in NodeJS
// If you are using fetch client side (i.e. in a browser)
// then see `fetch_browser.js` instead
// If you're in NodeJS, install node-fetch with npm install node-fetch@2
// Run with RAPIDAPI_API_KEY=<RapidAPI API Key> node examples/javascript/fetch_node.js

const fetch = require("node-fetch");
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

const options = {
  method: "POST",
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    "x-rapidapi-host": "lecto-translation.p.rapidapi.com",
    "x-rapidapi-key": process.env.RAPIDAPI_API_KEY,
  },
  body: params,
};

fetch("https://lecto-translation.p.rapidapi.com/v1/translate/text", options)
  .then((response) => response.json())
  .then((json) => console.log(JSON.stringify(json)))
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
