from django.shortcuts        import render
from rest_framework.views    import APIView
from rest_framework.response import Response

from .serializers.diaristas_cidade_serializer import DiaristaCidadeSerializer
from .pagination.diaristas_cidade_pagination  import DiaristasCidadePagination
from .services.cidades_atendimento_service    import listar_diaristas_cidade

# Create your views here.

class DiaristasCidadeList(APIView, DiaristasCidadePagination):

  def get(self, request, format=None):

    cep        = self.request.query_params.get('cep', None)
    diaristas  = listar_diaristas_cidade(cep)
    paginated  = self.paginate_queryset(diaristas, request)
    serialized = DiaristaCidadeSerializer(paginated, many=True, context={'request': request})

    return self.get_paginated_response(serialized.data)
