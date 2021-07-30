import json

from rest_framework import serializers

from web.models   import Diarista
from web.services import cep_service

def buscar_cidade_cep(cep):

  result = cep_service.buscar_cidade_cep(cep)

  if result.status_code == 400:
    raise serializers.ValidationError('O CEP informado está incorreto')
    
  cep_data = json.loads(result.content)

  if 'erro' in cep_data:
    raise serializers.ValidationError('O CEP informado não foi encontrado')

  return cep_data

def listar_diaristas_cidade(cep):

  codigo_ibge = buscar_cidade_cep(cep)['ibge']

  try:
    diaristas = Diarista.objects.filter(codigo_ibge=codigo_ibge).order_by('id')
    return diaristas
  except Diarista.DoesNotExist:
    return []
