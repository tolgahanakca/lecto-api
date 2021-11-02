import os
import requests

apiKey = os.getenv('API_KEY')

headers = {
    'X-API-Key': apiKey,
    'Content-Type': 'application/json',
    'Accept': 'application/json',
}

data = '{\n        "texts": ["Just try it mate.","What are you waiting for?"],\n        "to": ["pt-BR", "de"],\n        "from": "en"\n    }'

response = requests.post('https://api.lecto.ai/v1/translate/text', headers=headers, data=data)

print(response.headers)
print(response.json())
