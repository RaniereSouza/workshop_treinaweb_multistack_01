import requests

def buscar_cidade_cep(cep):

  result = requests.get(f'https://viacep.com.br/ws/{cep}/json')

  return result
