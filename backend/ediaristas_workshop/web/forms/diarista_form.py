import json

from django import forms

from ..models               import Diarista
from ..services.cep_service import buscar_cidade_cep 

class DiaristaForm(forms.ModelForm):

  cpf      = forms.CharField(widget=forms.TextInput(attrs={'data-mask': '000.000.000-00'}))
  cep      = forms.CharField(widget=forms.TextInput(attrs={'data-mask': '00.000-000'}))
  telefone = forms.CharField(widget=forms.TextInput(attrs={'data-mask': '(00)00000-0000'}))
  # codigo_ibge = forms.IntegerField(required=False)

  class Meta:
    model   = Diarista
    exclude = ('codigo_ibge',)
    # fields = '__all__'

  def clean_cpf(self):
    cpf = self.cleaned_data['cpf']
    return cpf.replace('.', '').replace('-', '')

  def clean_cep(self):

    cep           = self.cleaned_data['cep']
    cep_formatted = cep.replace('.', '').replace('-', '')
    result        = buscar_cidade_cep(cep_formatted)

    if result.status_code == 400:
      raise forms.ValidationError('O CEP informado está incorreto')
    
    cep_data = json.loads(result.content)

    if 'erro' in cep_data:
      raise forms.ValidationError('O CEP informado não foi encontrado')

    return cep_formatted

  def clean_telefone(self):
    telefone = self.cleaned_data['telefone']
    return telefone.replace('(', '').replace(')', '').replace('-', '')

  def save(self, commit=True):

    instance = super(DiaristaForm, self).save(commit=False)
    result   = buscar_cidade_cep(self.cleaned_data.get('cep'))
    cep_data = json.loads(result.content)

    instance.codigo_ibge = cep_data['ibge']
    instance.save()

    return instance
