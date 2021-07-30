from django.urls import path

from .views import DiaristasCidadeList

urlpatterns = [
    path('diaristas_cidade', DiaristasCidadeList.as_view(), name='diaristas_cidade_list')
]

