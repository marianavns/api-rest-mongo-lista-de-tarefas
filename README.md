# Usando MongoDB na Construção de APIs

# Sumário

1. [Por que integrar sua API com o Mongo DB](#Por-que-integrar-sua-API-com-o-mongo-DB)

2. [Ferramentas necessárias para integrar API com o Mongo DB](#Ferramentas-necessárias-para-integrar-API-com-o-Mongo-DB)

# Por que integrar sua API com o Mongo DB

Lembra que, nas APIs passadas, usávamos arquivos JSON na pasta Models? Se fosse uma API de filmes, todos os filmes precisariam estar lá, expostos. O mesmo para as APIs de séries, jogos e **pessoas**. Será que ter as informações de pessoas expostas para qualquer pessoa que veja sua API? Não, né?

Para isso, usamos os bancos de dados. 

Exemplo: quando integramos uma API de pessoas com o banco de dados, **o antigo arquivo JSON em models**, contendo todas as pessoas expostas, **é substituído por um arquivo .js que se comunica com um banco de dados escondido**. O que teremos em models, agora, será apenas os tipos de informações sobre as pessoas.

# Ferramentas necessárias para integrar API com o Mongo DB

## Ferramentas de sempre

Para qualquer API que fizermos usando o node.js, de acordo com tudo o que já foi visto, precisamos:

**1.** do gerenciador de pacotes *NPM*: Digite </br> `npm init`

**2.** do framework *Express*, para criar o servidor: Digite </br> `npm install express`

**3.** do pacote *Nodemon* para facilitar seu trabalho: Digite </br> `npm install nodemon`

## Ferramentas Novas

Aqui seremos apresentados a novas funcionalidades. Ainda precisamos:

**4.** do módulo *Mongoose*. Digite: </br> `npm install mongoose`
