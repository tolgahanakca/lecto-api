# Lecto Translation API Documentation

Documentation for the [Lecto Translation API](https://lecto.ai/) which provides fast machine translation at reasonable prices.

- Fast, high quality Translation API powered by Neural Machine Translation models.
- Free Translation API trial plan, with paid plans as low as \$0.3 per million characters.
- Text/HTML/JSON translation
- Multiple source texts and target languages in a single request.
- Protected JSON values: Skip translations as desired with JSON data payload.
- 90+ languages supported.

For personalized integration support or private plans with higher quotas, please contact [support@lecto.ai](mailto:%73%75%70%70%6f%72%74%40%6c%65%63%74%6f%2e%61%69) or via Telegram @lectoai . Or hit us up on [Twitter @LectoAI](https://twitter.com/LectoAI)

## OpenAPI Documentation

The OpenAPI 2.0 Documentation for the Lecto Translation API is present within this repo at `./swagger.yaml`.

### Authentication

This API uses RapidAPI API Key for authentication. This API key must be sent as the value of the header `X-Rapidapi-Key`. Sign up to a Free Translation API trial for [Lecto Translation API at RapidAPI](https://rapidapi.com/lecto-lecto-default/api/lecto-translation/) to obtain your RapidAPI API Key which is authorized to access the Lecto Translation API.

Sample Request with RapidAPI API Key:

```bash
curl "https://lecto-translation.p.rapidapi.com/v1/translate/text" -H 'X-Rapidapi-Key: <RapidAPI API Key>' -H 'Content-Type: application/json' -H 'Accept: application/json' --data-raw '{"texts":["Just try it mate.","What are you waiting for?"],"to":["zh-TW"],"from":"en"}' --compressed
```
