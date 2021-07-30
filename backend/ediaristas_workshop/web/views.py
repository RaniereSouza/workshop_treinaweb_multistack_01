from django.shortcuts import render, redirect

from .models              import Diarista
from .forms.diarista_form import DiaristaForm

# Create your views here.

def cadastrar_diarista(request):

  if request.method == 'POST':

    form = DiaristaForm(request.POST, request.FILES)

    if form.is_valid():
      form.save()
      return redirect('listar_diaristas')
  else:
    form = DiaristaForm()

  return render(request, 'form_diarista.html', {'diarista_form': form})

def listar_diaristas(request):

  diaristas = Diarista.objects.all()

  return render(request, 'lista_diaristas.html', {'diaristas': diaristas})

def editar_diarista(request, _id):

  diarista = Diarista.objects.get(id=_id)

  if request.method == 'POST':

    form = DiaristaForm(request.POST or None, request.FILES, instance=diarista)

    if form.is_valid():
      form.save()
      return redirect('listar_diaristas')
  else:
    form = DiaristaForm(instance=diarista)
  
  return render(request, 'form_diarista.html', {'diarista_form': form})

def remover_diarista(request, _id):

  diarista = Diarista.objects.get(id=_id)
  diarista.delete()

  return redirect('listar_diaristas')
