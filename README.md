## Description

Essa api é responsável por buscar urls de um banco de dados mongodb.

## Installation

Partindo do princípio que já há o docker instalado, abra o terminal e execute os
comandos a seguir

```bash
//Criará um volume de dados na raiz do docker, para quando destruir o container, 
não se perder os

docker volume create --name=mongodata
```

```bash
// Subirá uma imagem do mongo na porta 27017 em background, com o nome "mongodb"
apontando a pasta /data/db para o volume criado no passo anterior. 
Isso pode levar alguns segundos se você não tiver a imagem do mongodb ainda.

docker run --name mongodb -v mongodata:/data/db -d -p 27017:27017 mongo
```

```bash
// Agora para verificar se funcionou, precisamos entrar no container

docker exec -it mongodb bash

// Após executar esse comando, você estará dentro do container do mongo em um 
terminal, então apenas digite mongo, para verificar se está ok.

mongo
```

Deverá aparecer uma mensagem semelhante

"MongoDB shell version v4.2.6
connecting to: mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("d15f73b2-b716-40b3-924c-dbb238c3d44a") }
MongoDB server version: 4.2.6..."


// Agora que estamos dentro do mongo, precisamos criar a database que utilizaremos
basta executar o seguinte comando:
```bash
use servicosdb
```

// Após isso, basta sair rodando o comando, mais de uma vez se for preciso:
```bash
exit
```

Como já está fora do mongo, pode rodar o comando a seguir:
```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

// Acesse as urls localhost:3000/'' e veja se funcionou!
