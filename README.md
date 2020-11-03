# Usando MongoDB na Construção de APIs

# Sumário

1. [Por que integrar sua API com o Mongo DB](#Por-que-integrar-sua-API-com-o-mongo-DB)

2. [Ferramentas necessárias para integrar API com o Mongo DB](#Ferramentas-necessárias-para-integrar-API-com-o-Mongo-DB)

2.1 [Ferramenta Nova Mongoose](#Ferramenta-Nova-Mongoose)

2.1.1 [O que faz o Mongoose](#O-que-faz-o-Mongoose)

3. [Projeto prático para exemplo](#Projeto-prático-para-exemplo)

# Por que integrar sua API com o Mongo DB

Lembra que, nas APIs passadas, usávamos arquivos JSON na pasta Models? 

Se fosse uma API de filmes, todos os filmes precisariam estar lá, expostos. O mesmo para as APIs de séries, jogos e **pessoas**. Será que ter informações de pessoas expostas para qualquer usuário que veja a API é a melhor coisa a se fazer? Não, né?

Para isso, usamos os bancos de dados. 

<img src= https://i.imgur.com/XDM7ol0.gif alt="Ilustração. Cofre e com um segurança na frente" width="400" height="400">

Vem comigo: integrar uma API de pessoas com o banco de dados é **substituir o antigo arquivo JSON (que ficava em models) por um arquivo .js que não tem nenhuma informação pessoal. Este arquivo .js apenas "se comunica" com um banco de dados escondido e joga os dados lá**.

O que teremos em models, agora, será um arquivo apenas os *tipos de informações* sobre as pessoas. Observe abaixo o JSON no lado esquerdo e o .js no lado direito:

![Comparativo entre JSON e Schema](https://i.imgur.com/ssgUdjX.png)

**Chamamos este arquivo .js de *Schema*, que quer dizer esboço.**

Não se adiciona mais os dados integrais na API, e sim o esboço dos dados para futuras inserções.

# Ferramentas necessárias para integrar API com o Mongo DB

## Ferramentas de sempre

Para qualquer API que fizermos usando o node.js, de acordo com tudo o que já foi visto, precisamos:

**1.** do gerenciador de pacotes *NPM*: Digite </br> `npm init`

**2.** do framework *Express*, para criar o servidor: Digite </br> `npm install express`

**3.** do pacote *Nodemon* para facilitar seu trabalho: Digite </br> `npm install nodemon`

**4.** do aplicativo *Postman* para visualizar os resultados: Clique [aqui](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop/related?hl=pt-BR).

## Ferramenta Nova Mongoose

Precisaremos de uma nova ferramenta, o

**5.** módulo *Mongoose*. Digite: </br> `npm install mongoose`

### O que faz o Mongoose

Em resumo, o mongoose é uma ferramenta que:
- Cria esta nova funcionalidade, o *schema*;
- Controla os tipos de dados que podem entrar em cada chave-valor a sua API (number, string, boolean...);
- Cria uma collection no banco de dados. A collection, sim, é nosso antigo arquivo JSON real com as informações. A diferença é que, aqui, ele é criado direto no banco de dados.

## Ferramenta Nova Robo 3T

Um software vai ajudar a visualizar o banco de dados de forma mais amigável,

**6.** o Robo 3T: Baixe o software clicando [aqui](#https://download.studio3t.com/robomongo/windows/robo3t-1.4.2-windows-x86_64-8650949.exe) e instale. Depois, conecte o Robo 3T em todos os bancos de dados que estão no seu pc seguindo [estes passos](#https://king.host/wiki/artigo/como-conectar-um-base-mongodb-atraves-do-aplicativo-robomongo/).

Assim que o Robo 3T parece:

![Print de uma tela do Robo3T](https://i.imgur.com/t9yq5Ji.png)

# Projeto prático para exemplo

✔️ 1 - Instale a dependência do mongoose no projeto;

✔️ 2 - Crie a string de conexão com o mongo no seu `app.js`. O nome do banco de dados será *clientes*. 

✔️ 3 - Crie a conexão e valide se realmente o banco está logado exibindo uma mensagem de sucesso no console.

✔️ 4 - Crie o Schema com as seguintes informações:
```js
nome (String)
email: (String)
cpf: (Number)
dataNascimento: (String)
estadoCivil: (String)
telefone: (Number)
comprou: (Boolean)
```

✔️ 5 - Crie uma coleção no Postman com suas requisições.

✔️ 6 - Crie a rota para incluir um novo cliente (HTTP 201 OK).

✔️ 7 - Crie a rota para retornar todos os clientes (HTTP 200 OK)

8 - Crie a rota para retornar a lista com os clientes (e e-mails) que já realizaram alguma compra (HTTP 200 OK).

9 - Crie a rota para retornar a lista de clientes de acordo com o elemento informado como parâmetro (HTTP 200 OK).