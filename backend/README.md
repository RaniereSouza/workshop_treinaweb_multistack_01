# Back-End com [Python](https://www.python.org/) e [Django](https://www.djangoproject.com/) para Site Administrativo e API Web
[status: concluído o conteúdo das aulas]

___

## Ambiente e Requisitos
* Python 3 (compatível com a versão 3.8 ou 3.9)
* *pip*
* *venv*
* Django (compatível com a versão 3.2) + pacotes complementares (*easy-mask*, *django-cors-headers*, *django-crispy-forms*, *djangorestframework*, ...)

### Instalando o Python 3
[Siga as instruções daqui](https://www.python.org/downloads/) para instalar a versão adequada para seu sistema, Windows ou Linux/MacOS.

### Instalando o *pip*
Normalmente, ao instalar o Python na sua máquina, o *pip* já vem como parte dele. Para garantir que a versão mais recente do *pip* está instalada, use o comando `python -m pip install --user --upgrade pip`.

### Não há instalação do *venv*, o mesmo é imbuído no Python a partir da versão 3.6
Caso você vá usar o Python numa versão 2.x, o equivalente do *venv* é o pacote *virtualenv*, que vai precisar ser instalado globalmente e manualmente.
#### Por quê o *venv*?
Para manipular projetos em Python sem a necessidade de instalar pacotes globalmente. O *venv* permite que os pacotes usados no seu projeto sejam persistidos apenas localmente, num ambiente virtual.

### Criando e ativando um ambiente virtual do Python
* Primeiramente, navegue para a pasta do projeto
* O comando `python -m venv venv` vai criar uma pasta chamada "venv" dentro do projeto, que vai representar o ambiente virtual utilizado
* Para ativar o ambiente virtual, utilize o comando `source ./venv/bin/activate` (existe um comando alternativo no Windows, [mais detalhes aqui](https://docs.python.org/3/library/venv.html#module-venv))
* Para desativar o ambiente virtual, basta usar o comando `deactivate` dentro do diretório com o ambiente ativo

### Instalando as dependências
Caso seu projeto já contenha um arquivo "requirements.txt", ao invés de instalar as dependências manualmente uma a uma no seu ambiente, apenas use o comando `pip install -r requirements.txt` (como é o caso do projeto neste repositório). Para salvar novas dependências de volta no arquivo, use o comando `pip freeze > requirements.txt`.

___

## Rodando o Projeto
* Navegue para dentro da pasta do projeto Django (no caso deste repositório, a pasta chamada "ediaristas_workshop" na raiz do back-end)
    * Observação: num projeto em branco, para iniciar um novo  projeto do Django, use o comando `django-admin startproject <nome do projeto>`; e para criar aplicações dentro desde projeto Django, navegue para dentro da pasta criada e use o comando `python manage.py startapp <nome da aplicação>`
* Execute as migrations do banco de dados com o comando `python manage.py migrate`
* Inicie o servidor com o comando `python manage.py runserver`
* Acesse "localhost:8000" no seu browser: seu site administrativo já estará rodando (na URL "/web", com a primeira página chamada "/listar_diaristas", no caminho completo "localhost:8000/web/listar_diaristas"); Basta então cadastrar alguns diaristas, para que seus dados sejam exibidos no front-end
    * Observação: os dados do back-end estão expostos para o front-end à partir da URL "/api" em "localhost:8000" (exemplo: o método GET "/diaristas_cidade", com caminho completo "localhost:8000/api/diaristas_cidade?cep=\<CEP passado pelo usuário\>", retorna as diaristas na mesma cidade que o CEP do parâmetro, em formato JSON)

___

## TO DO
* ~~Concluir o conteúdo das aulas~~
* Melhorias:
    * ~~Documentar o setup do ambiente e tudo que é necessário para rodar o projeto~~
    * (Mais em breve)
