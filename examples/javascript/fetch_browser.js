// This is a pure browser (client-side) example of using the Browser `fetch` API
// For NodeJS example, please use `fetch_node.js` instead.

const params = new URLSearchParams();
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
    "x-rapidapi-key": "<YOUR_API_KEY>",
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
