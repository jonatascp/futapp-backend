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
  "active": true,
  "_id": "5d4b25c55865c4022761843f",
  "name": "Campeonato",
  "createdAt": "2019-08-07T19:25:57.897Z",
  "updatedAt": "2019-08-07T19:25:57.897Z",
  "__v": 0
}
```

### Listagem de campeonatos

Lista somente os campeonatos que estão ativos

```bash
GET: http://localhost:3333/api/competitions

RESULT:
[
  {
    "active": true,
    "_id": "{ID_COMPETITION}",
    "name": "Campeonato Série A",
    "createdAt": "2019-08-07T12:27:23.126Z",
    "updatedAt": "2019-08-07T12:27:23.126Z",
    "__v": 0
  },
  {
    "active": true,
    "_id": "{ID_COMPETITION}",
    "name": "Campeonato Série B",
    "createdAt": "2019-08-07T12:27:54.146Z",
    "updatedAt": "2019-08-07T13:05:27.207Z",
    "__v": 0
  }
]
```

### Listagem de campeonatos inativos

```bash
GET: http://localhost:3333/api/competitions?active=0

RESULT:
[
  {
    "active": false,
    "_id": "{ID_COMPETITION}",
    "name": "Campeonato Série A",
    "createdAt": "2019-08-07T12:27:23.126Z",
    "updatedAt": "2019-08-07T12:27:23.126Z",
    "__v": 0
  },
  {
    "active": false,
    "_id": "{ID_COMPETITION}",
    "name": "Campeonato Série B",
    "createdAt": "2019-08-07T12:27:54.146Z",
    "updatedAt": "2019-08-07T13:05:27.207Z",
    "__v": 0
  }
]
```

### Obter um campeonato

```bash
GET: http://localhost:3333/api/competitions/{ID_COMPETITION}

RESULT:
{
  "active": true,
  "_id": "{ID_COMPETITION}",
  "name": "Campeonato A",
  "createdAt": "2019-08-08T19:28:41.437Z",
  "updatedAt": "2019-08-08T19:28:41.437Z",
  "__v": 0
}
```

### Alterar um campeonato

```bash
PUT: http://localhost:3333/api/competitions

BODY:

{
	"competitionId": "5d4ac3ca881fb622aae2c2f8",
	"name": "Campeonato",
	"active": true
}

RESULT:
{
  "active": true,
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

### Obter um jogador

```bash
GET: http://localhost:3333/api/players/{ID_COMPETITION}/{ID_PLAYER}

RESULT:
{
  "avatar": "avatar.png",
  "_id": "{ID_PLAYER}",
  "name": "Jogador A",
  "competition": "{ID_COMPETITION}",
  "createdAt": "2019-08-08T19:29:56.740Z",
  "updatedAt": "2019-08-08T19:31:32.410Z",
  "__v": 0
}
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
  "_id": "{ID_PLAYER}",
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
  "_id": "{ID_TEAM}",
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
    "_id": "{ID_TEAM}",
    "name": "Real Madrid",
    "competition": "{ID_COMPETITION}",
    "createdAt": "2019-08-07T19:27:00.294Z",
    "updatedAt": "2019-08-07T19:27:00.294Z",
    "__v": 0
  },
  {
    "_id": "{ID_TEAM}",
    "name": "Barcelona",
    "competition": "{ID_COMPETITION}",
    "createdAt": "2019-08-07T19:27:10.117Z",
    "updatedAt": "2019-08-07T19:27:10.117Z",
    "__v": 0
  }
]
```

### Obter um time

```bash
GET: http://localhost:3333/api/teams/{ID_TEAM}

RESULT:

{
  "_id": "{ID_TEAM}",
  "name": "Real Madrid",
  "competition": "{ID_COMPETITION}",
  "createdAt": "2019-08-07T19:27:00.294Z",
  "updatedAt": "2019-08-07T19:27:00.294Z",
  "__v": 0
}
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
  "_id": "{ID_TEAM}",
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
		"id": "{ID_PLAYER_A}"
	},
	"playerB": {
		"id": "{ID_PLAYER_B}"
	},
	"competitionId": "{ID_COMPETITION}",
	"round": 1
}

RESULT:
{
  "_id": "{ID_GAME}",
  "competition": "{ID_COMPETITION}",
  "players": [
    {
      "_id": "5d4c4f5de1e50d6176d2d06c",
      "player": "{ID_PLAYER_A}"
    },
    {
      "_id": "5d4c4f5de1e50d6176d2d06b",
      "player": "{ID_PLAYER_B}"
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
	"gameId": "{ID_GAME}",
	"golA": 6,
	"golB": 4,
	"teamIdA": "{ID_TEAM_A}",
	"teamIdB": "{ID_TEAM_B}"
}

RESULT:
{
  "_id": "5d4c4f5de1e50d6176d2d06a",
  "competition": "5d4b25c55865c4022761843f",
  "players": [
    {
      "_id": "5d4c4f5de1e50d6176d2d06c",
      "player": "{ID_PLAYER_A}",
      "gol": 6,
      "team": "{ID_TEAM_A}"
    },
    {
      "_id": "5d4c4f5de1e50d6176d2d06b",
      "player": "{ID_PLAYER_B}",
      "gol": 4,
      "team": "{ID_TEAM_B}"
    }
  ],
  "valid": false,
  "round": 1,
  "createdAt": "2019-08-08T16:35:41.786Z",
  "updatedAt": "2019-08-08T17:11:39.292Z",
  "__v": 0
}
```

### Classificação do campeonato

```bash
GET: http://localhost:3333/api/classifications/{ID_COMPETITION}

RESULT:
[
  {
    "player": {
      "name": "Jogador A",
      "id": "{ID_PLAYER_A}"
    },
    "games": 2,
    "win": 1,
    "lost": 0,
    "draw": 1,
    "gp": 7,
    "gc": 5,
    "points": 4
  },
  {
    "player": {
      "name": "Jogador C",
      "id": "{ID_PLAYER_C}"
    },
    "games": 1,
    "win": 0,
    "lost": 0,
    "draw": 1,
    "gp": 3,
    "gc": 3,
    "points": 1
  },
  {
    "player": {
      "name": "Jogador B",
      "id": "{ID_PLAYER_B}"
    },
    "games": 1,
    "win": 0,
    "lost": 1,
    "draw": 0,
    "gp": 2,
    "gc": 4,
    "points": 0
  }
]
```

### Criar jogo
Serviço gera uma partida entre dois jogadores que ainda não se enfrentaram e estão com menos jogos que os demais.

```bash
POST: http://localhost:3333/api/games/generate

BODY:
{
	"competitionId": "{ID_COMPETITION}"
}
RESULT:
{
  "_id": "{ID_GAME}",
  "competition": "{ID_COMPETITION}",
  "players": [
    {
      "_id": "5d4c90ca4584837654dbe69e",
      "player": "{ID_PLAYER_A}"
    },
    {
      "_id": "5d4c90ca4584837654dbe69d",
      "player": "{ID_PLAYER_B}"
    }
  ],
  "valid": false,
  "round": 1,
  "createdAt": "2019-08-08T21:14:50.374Z",
  "updatedAt": "2019-08-08T21:14:50.374Z",
  "__v": 0
}
```

### Lista de jogos da rodada
Caso não seja informada a rodada na chamada será retornada a rodada atual

```bash
GET: http://localhost:3333/api/rounds/{ID_COMPETITION}?round={NUMBER_ROUND}

RESULT:
{
  "round": "2",
  "games": [
    {
      "_id": "5d52bd93b5e7e00494ea6543",
      "competition": "5d50da68834df04ffc60b169",
      "players": [
        {
          "_id": "5d52bd93b5e7e00494ea6545",
          "player": "5d52bd7ab5e7e00494ea6542"
        },
        {
          "_id": "5d52bd93b5e7e00494ea6544",
          "player": "5d52bd3ab5e7e00494ea653d"
        }
      ],
      "valid": false,
      "round": 2,
      "createdAt": "2019-08-13T13:39:31.539Z",
      "updatedAt": "2019-08-13T13:39:31.539Z",
      "__v": 0
    }
  ],
  "hasNext": false,
  "hasPrevious": true
}