# Front-End com [React](https://reactjs.org/) e [Next](https://nextjs.org/) para Site dos Clientes
[status: concluído o conteúdo das aulas]

___

## Ambiente e Requisitos
* Node.js (compatível com a versão 14.17.1 e *npm* 6.14.13)
* *yarn* (compatível com a versão 1.22.10)

### Gerenciando múltiplas versões do Node.js com NVM
(Em breve)

### Instalando o *yarn*
(Em breve)

#### Por que *yarn* e não *npm*?
(Em breve)

___

## Rodando o Projeto
* Certifique-se de que o back-end está rodando e acessível, para que o front-end possa consumir seus dados (no caso deste repositório, os métodos da API estão disponíveis na URL "localhost:8000/api")
* Na pasta do front-end, use o comando `yarn dev` para rodar o servidor com hot-reload, uma versão de desenvolvimento que atualiza o browser toda vez que o código for alterado
    * Observação: para rodar o código no modo de produção, use os comandos `yarn build && yarn start`; porém, tome cuidado em seus projetos, pois de acordo com [essa discussão](https://github.com/vercel/next.js/discussions/15053), pode acontecer uma diferença de comportamento no browser entre o `yarn dev` e o `yarn build && yarn start` num projeto construído com o Next 

___

## TO DO
* ~~Concluir o conteúdo das aulas~~
* Melhorias:
    * Documentar o setup do ambiente e tudo que é necessário para rodar o projeto
    * (Mais em breve)
