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
