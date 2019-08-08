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

### Criar um jogador

```bash
POST: http://localhost:3333/api/players

BODY: 
{
	"name": "Jogador A",
	"competitionId": "{ID_COMPETITION}",
	"avatar": "avatar.png"
}

RESULT:
{
  "avatar": "avatar.png",
  "_id": "{ID_PLAYER}",
  "name": "Jogador A",
  "competition": "{ID_COMPETITION}",
  "createdAt": "2019-08-07T19:30:24.545Z",
  "updatedAt": "2019-08-07T19:30:24.545Z",
  "__v": 0
}
```

### Listagem de jogadores

```bash
GET: http://localhost:3333/api/players/{ID_COMPETITION}

RESULT:
[
  {
    "avatar": "avatar.png",
    "_id": "{ID_PLAYER}",
    "name": "Jogador A",
    "competition": "{ID_COMPETITION}",
    "createdAt": "2019-08-07T19:26:28.419Z",
    "updatedAt": "2019-08-07T19:26:28.419Z",
    "__v": 0
  },
  {
    "avatar": "avatar.png",
    "_id": "{ID_PLAYER}",
    "name": "Jogador B",
    "competition": "{ID_COMPETITION}",
    "createdAt": "2019-08-07T19:26:37.404Z",
    "updatedAt": "2019-08-07T19:26:37.404Z",
    "__v": 0
  }
]
```

### Alterar um jogador

```bash
PUT: http://localhost:3333/api/players

BODY:

{
	"playerId": "{ID_PLAYER}",
	"name": "Nome do Jogador",
	"avatar": "http://url_avatar.com/avatar.png"
}

RESULT:
{
  "avatar": "http://url_avatar.com/avatar.png",
  "_id": "5d4ad1d2fd6c874339a423e5",
  "name": "Nome do Jogador",
  "competition": "{ID_COMPETITION}",
  "createdAt": "2019-08-07T13:27:46.553Z",
  "updatedAt": "2019-08-07T13:53:44.661Z",
  "__v": 0
}
```

### Criar um time

```bash
POST: http://localhost:3333/api/teams

BODY: 
{
	"name": "Barcelona",
	"competitionId": "{ID_COMPETITION}"
}

RESULT:
{
  "_id": "5d4b260e5865c40227618443",
  "name": "Barcelona",
  "competition": "{ID_COMPETITION}",
  "createdAt": "2019-08-07T19:27:10.117Z",
  "updatedAt": "2019-08-07T19:27:10.117Z",
  "__v": 0
}
```

### Listagem de times

```bash
GET: http://localhost:3333/api/teams/{ID_COMPETITION}

RESULT:
[
  {
    "_id": "5d4b26045865c40227618442",
    "name": "Real Madrid",
    "competition": "{ID_COMPETITION}",
    "createdAt": "2019-08-07T19:27:00.294Z",
    "updatedAt": "2019-08-07T19:27:00.294Z",
    "__v": 0
  },
  {
    "_id": "5d4b260e5865c40227618443",
    "name": "Barcelona",
    "competition": "{ID_COMPETITION}",
    "createdAt": "2019-08-07T19:27:10.117Z",
    "updatedAt": "2019-08-07T19:27:10.117Z",
    "__v": 0
  }
]
```

### Alterar um time

```bash
PUT: http://localhost:3333/api/teams

BODY:

{
	"teamId": "{ID_TEAM}",
	"name": "Barcelona"
}

RESULT:
{
  "_id": "5d4ad9d1b4384054e9574b52",
  "name": "Barcelona",
  "competition": "{ID_COMPETITION}",
  "createdAt": "2019-08-07T14:01:53.759Z",
  "updatedAt": "2019-08-07T14:03:19.553Z",
  "__v": 0
}
```

### Criar uma partida

```bash
POST: http://localhost:3333/api/games

BODY: 
{
	"playerA": {
		"id": "5d4b25e45865c40227618440"
	},
	"playerB": {
		"id": "5d4b26d05865c40227618447"
	},
	"competitionId": "5d4b25c55865c4022761843f",
	"round": 1
}

RESULT:
{
  "_id": "5d4c4f5de1e50d6176d2d06a",
  "competition": "5d4b25c55865c4022761843f",
  "players": [
    {
      "_id": "5d4c4f5de1e50d6176d2d06c",
      "player": "5d4b25e45865c40227618440"
    },
    {
      "_id": "5d4c4f5de1e50d6176d2d06b",
      "player": "5d4b26d05865c40227618447"
    }
  ],
  "valid": false,
  "round": 1,
  "createdAt": "2019-08-08T16:35:41.786Z",
  "updatedAt": "2019-08-08T16:35:41.786Z",
  "__v": 0
}
```

### Listagem de partidas

```bash
GET: http://localhost:3333/api/games/{ID_COMPETITION}

RESULT:
[
  {
    "_id": "5d4c4f5de1e50d6176d2d06a",
    "competition": "{ID_COMPETITION}",
    "players": [
      {
        "_id": "5d4c4f5de1e50d6176d2d06c",
        "player": "{ID_PLAYER}",
        "gol": 6,
        "team": "{ID_TEAM}"
      },
      {
        "_id": "5d4c4f5de1e50d6176d2d06b",
        "player": "{ID_PLAYER}",
        "gol": 4,
        "team": "{ID_TEAM}"
      }
    ],
    "valid": false,
    "round": 1,
    "createdAt": "2019-08-08T16:35:41.786Z",
    "updatedAt": "2019-08-08T17:11:39.292Z",
    "__v": 0
  }
]
```

### Atualizar uma partida

```bash
PUT: http://localhost:3333/api/games

BODY: 
{
	"gameId": "5d4c4f5de1e50d6176d2d06a",
	"golA": 6,
	"golB": 4,
	"teamIdA": "5d4b26045865c40227618442",
	"teamIdB": "5d4b260e5865c40227618443"
}

RESULT:
{
  "_id": "5d4c4f5de1e50d6176d2d06a",
  "competition": "5d4b25c55865c4022761843f",
  "players": [
    {
      "_id": "5d4c4f5de1e50d6176d2d06c",
      "player": "5d4b25e45865c40227618440",
      "gol": 6,
      "team": "5d4b26045865c40227618442"
    },
    {
      "_id": "5d4c4f5de1e50d6176d2d06b",
      "player": "5d4b26d05865c40227618447",
      "gol": 4,
      "team": "5d4b260e5865c40227618443"
    }
  ],
  "valid": false,
  "round": 1,
  "createdAt": "2019-08-08T16:35:41.786Z",
  "updatedAt": "2019-08-08T17:11:39.292Z",
  "__v": 0
}
```