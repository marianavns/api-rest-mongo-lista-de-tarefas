# Usando MongoDB na Construção de APIs

# Sumário

1. [Por que integrar sua API com o Mongo DB](#Por-que-integrar-sua-API-com-o-mongo-DB)

2. [Ferramentas necessárias para integrar API com o Mongo DB](#Ferramentas-necessárias-para-integrar-API-com-o-Mongo-DB)

# Por que integrar sua API com o Mongo DB

Lembra que, nas APIs passadas, usávamos arquivos JSON na pasta Models? Se fosse uma API de filmes, todos os filmes precisariam estar lá, expostos. O mesmo para as APIs de séries, jogos e **pessoas**. Será que ter informações de pessoas expostas para qualquer usuário que veja a API é a melhor coisa a se fazer? Não, né?

Para isso, usamos os bancos de dados. 

Exemplo: quando integramos uma API de pessoas com o banco de dados, **o antigo arquivo JSON (que ficava em models) é substituído por um arquivo .js sem informações pessoais. Este arquivo .js apenas "se comunica" com um banco de dados escondido e joga os dados lá**. 

O que teremos em models, agora, será um arquivo apenas os *tipos de informações* sobre as pessoas. Observe abaixo o JSON no lado esquerdo e o .js no lado direito:

![Coparativo entre JSON e Schema](https://i.imgur.com/ssgUdjX.png)

> Chamamos este arquivo .js de *Schema*, que quer dizer **esboço**. 

Não se adiciona mais os dados integrais na API, e sim o esboço dos dados para futuras inserções.

# Ferramentas necessárias para integrar API com o Mongo DB

## Ferramentas de sempre

Para qualquer API que fizermos usando o node.js, de acordo com tudo o que já foi visto, precisamos:

**1.** do gerenciador de pacotes *NPM*: Digite </br> `npm init`

**2.** do framework *Express*, para criar o servidor: Digite </br> `npm install express`

**3.** do pacote *Nodemon* para facilitar seu trabalho: Digite </br> `npm install nodemon`

## Ferramenta Nova Mongoose

Precisaremos de uma nova ferramenta, o

**4.** módulo *Mongoose*. Digite: </br> `npm install mongoose`

### O que faz o Mongoose?

Em resumo, o mongoose é uma ferramenta que:
- Cria esta nova funcionalidade, o *schema*;
- Controla os tipos de dados que podem entrar em cada chave-valor a sua API (number, string, boolean...);
- Cria uma collection no banco de dados. A collection, sim, é nosso antigo arquivo JSON real com as informações. A diferença é que, aqui, ele é criado direto no banco de dados.

