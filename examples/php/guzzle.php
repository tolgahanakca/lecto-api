<?php

require 'vendor/autoload.php';

use GuzzleHttp\Client;
use GuzzleHttp\Middleware;

$api_key = getenv('RAPIDAPI_API_KEY');

$client = new Client([
    'base_uri' => 'https://lecto-translation.p.rapidapi.com',
]);

$clientHandler = $client->getConfig('handler');
$tapMiddleware = Middleware::tap(function ($request) {
    echo $request->getHeaderLine('Content-Type');
    echo "\n";
    echo $request->getBody();
    echo "\n";
});

$response = $client->request('POST', '/v1/translate/text', [
    'json'    => ['texts' => ['Just try it mate.', 'What are you waiting for?'], 'to' => ['de'], 'from' => 'en'],
    'headers' => [
        'x-rapidapi-key' => $api_key
    ],
    'handler' => $tapMiddleware($clientHandler)
]);

$body = $response->getBody();
echo $body;

/*
Output:

application/json
{"texts":["Just try it mate.","What are you waiting for?"],"to":["de"],"from":"en"}
{"translations":[{"to":"de", "translated":["Probieren Sie es einfach aus, Kumpel.", "Worauf wartest du?"]}], "from":"en", "translated_characters":42}
*/
