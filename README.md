# FutAPP - API

API criada para criação de campeonatos e controle de jogadores e partidas de futebol virtual.

## Install and Run project

### Install
```bash
npm install
```
or
```bash
yarn
```
### Run

```bash
npm run dev
```
or
```bash
yarn dev
```

## API's

### Criar um campeonato

```bash
POST: http://localhost:3333/api/competitions

BODY: 
{
    "name": "Campeonato"
}

RESULT:
{
  "_id": "5d4b25c55865c4022761843f",
  "name": "Campeonato",
  "createdAt": "2019-08-07T19:25:57.897Z",
  "updatedAt": "2019-08-07T19:25:57.897Z",
  "__v": 0
}
```

### Listagem de campeonatos

```bash
GET: http://localhost:3333/api/competitions

RESULT:
[
  {
    "_id": "5d4ac3ab881fb622aae2c2f7",
    "name": "Campeonato Série A",
    "createdAt": "2019-08-07T12:27:23.126Z",
    "updatedAt": "2019-08-07T12:27:23.126Z",
    "__v": 0
  },
  {
    "_id": "5d4ac3ca881fb622aae2c2f8",
    "name": "Campeonato Série B",
    "createdAt": "2019-08-07T12:27:54.146Z",
    "updatedAt": "2019-08-07T13:05:27.207Z",
    "__v": 0
  }
]
```

### Alterar um campeonato

```bash
PUT: http://localhost:3333/api/competitions

BODY:

{
	"competitionId": "5d4ac3ca881fb622aae2c2f8",
	"name": "Campeonato"
}

RESULT:
{
  "_id": "5d4ac3ca881fb622aae2c2f8",
  "name": "Campeonato",
  "createdAt": "2019-08-07T12:27:54.146Z",
  "updatedAt": "2019-08-07T13:05:27.207Z",
  "__v": 0
}
```
