# Lecto Translation API Documentation

Documentation for the [Lecto Translation API](https://lecto.ai) which provides fast machine translation at reasonable prices.

- Fast, high quality Translation API powered by Neural Machine Translation models.
- Free Translation API trial plan, with paid plans as low as \$0.3 per million characters.
- Text/HTML/JSON translation
- Multiple source texts and target languages in a single request.
- Protected JSON values: Skip translations as desired with JSON data payload.
- 90+ languages supported.

For personalized integration support or private plans with higher quotas, please contact [support@lecto.ai](mailto:%73%75%70%70%6f%72%74%40%6c%65%63%74%6f%2e%61%69) or via Telegram @lectoai . Or hit us up on [Twitter @LectoAI](https://twitter.com/LectoAI)

## OpenAPI Documentation

The OpenAPI 2.0 Documentation for the Lecto Translation API is present within this repo at `./swagger.yaml`.

### Registration & Authentication

You can sign up to our site directly or access us via your RapidAPI subscription.

#### Direct Registration

Firstly, [sign up to our Lecto Translation API Dashboard](https://dashboard.lecto.ai/docs). After signing up, you'll get access to your Personal API Key, which you can use to access our API right away. We provide a limited free trial for you to try out our API, after which you can subscribe to one of our generous [Pricing Plans](https://dashboard.lecto.ai/pricing). Our lowest pricing plan starts at just US\$1.99/month for 1 million translated characters per month.

You must send your API Key as the value of the header `X-API-Key`.

Sample Request with API Key:

```sh
curl -i -X POST "https://api.lecto.ai/v1/translate/text" \
    -H 'X-API-Key: <API Key>' \
    -H 'Content-Type: application/json' \
    -H 'Accept: application/json' \
    --data-raw '{
        "texts": ["Just try it mate.","What are you waiting for?"],
        "to": ["pt-BR", "de"],
        "from": "en"
    }' --compressed
```

#### RapidAPI Registration

Sign up to a Free Translation API trial for [Lecto Translation API at RapidAPI](https://rapidapi.com/lecto-lecto-default/api/lecto-translation/) to obtain your RapidAPI API Key which is authorized to access the Lecto Translation API.

You can use your RapidAPI API Key with the Lecto Translation API for authentication after signing up to one of our plans. This API key must be sent as the value of the header `X-Rapidapi-Key`.

Sample Request with RapidAPI API Key:

```sh
curl -i "https://lecto-translation.p.rapidapi.com/v1/translate/text" \
    -H 'X-Rapidapi-Key: <RapidAPI API Key>' \
    -H 'Content-Type: application/json' \
    -H 'Accept: application/json' \
    --data-raw '{"texts":["Just try it mate.","What are you waiting for?"],"to":["hi"],"from":"en"}' \
    --compressed
```

### Code Samples

We have provided several code samples to get you started with the Lecto Translation API.

#### Python

A sample python script based on the `requests` package is provided in `examples/python/request.py`.

1. Install the `requests` package with `python -m pip install requests`

2. Run our sample python script with:

```sh
API_KEY=<YOUR-API-KEY> python examples/python/request.py
```

Note that the value of the `API_KEY` environment variable here is the API Key you obtained from the [Lecto Translation API Documentation](https://dashboard.lecto.ai/docs) in the previous section.
