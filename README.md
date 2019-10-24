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

# Criar um campeonato

Endpoint (POST):
```
{{ baser_url  }}/competitions
```
Body:
```
{
	"name": "Campeonato Validando Fluxo"
}
```

# Criar jogadores (será substituído com a integração do login google)

Endpoint (POST):
```
{{ baser_url  }}/players
```
Body:
```
{
	"name": "Jogador 001 Validando o Fluxo"
}
```

# Criar Times

Endpoint (POST):
```
{{ baser_url  }}/teams
```
Body:
```
{
	"name": "Time A para validação"
}
```

# Associar Jogadores ao Campeonato

## Listagem dos campeonatos que estão ativos

Endpoint (GET):
```
{{ baser_url  }}/competitions
```
Response:
```
[
  {
    "active": true,
    "avatar": "https://png.pngtree.com/png-clipart/20190516/original/pngtree-champions-league-uefa-logo-png-image_3643132.jpg",
    "_id": "5daeefb977f01949feff5048",
    "name": "Campeonato Validando Fluxo",
    "createdAt": "2019-10-22T12:02:01.574Z",
    "updatedAt": "2019-10-22T12:02:01.574Z",
    "__v": 0
  }
]
```
## Listagem dos jogadores que ainda não estão associados ao campeonato selecionado

Endpoint (GET):
```
{{ baser_url  }}/players-not-exist/{{ id_campeonato  }}
```
Response:
```
[
  {
    "avatar": "https://png.pngtree.com/png-clipart/20190619/original/pngtree-vector-avatar-icon-png-image_4013749.jpg",
    "_id": "5daef0a44395494cc1550e2f",
    "name": "Jogador 002 Validando o Fluxo",
    "createdAt": "2019-10-22T12:05:56.014Z",
    "updatedAt": "2019-10-22T12:05:56.014Z",
    "__v": 0
  }
]
```

## Associando Jogador com o campeonato

Endpoint (POST):
```
{{ baser_url  }}/players/add-competition-player
```
Body:
```
{
	"playerId": "{{ id_jogadorA  }}",
	"competitionId": "{{ id_campeonato  }}"
}
```

# Classificação do campeonato

Endpoint (GET):
```
{{ baser_url  }}/classifications/{{ id_campeonato }}
```
Response:
```
[
  {
    "player": {
      "name": "Jogador 001 Validando o Fluxo",
      "id": "5daef06277f01949feff5049",
      "avatar": "https://png.pngtree.com/png-clipart/20190619/original/pngtree-vector-avatar-icon-png-image_4013749.jpg"
    },
    "games": 0,
    "win": 0,
    "lost": 0,
    "draw": 0,
    "gp": 0,
    "gc": 0,
    "points": 0
  },
  {
    "player": {
      "name": "Jogador 002 Validando o Fluxo",
      "id": "5daef0a44395494cc1550e2f",
      "avatar": "https://png.pngtree.com/png-clipart/20190619/original/pngtree-vector-avatar-icon-png-image_4013749.jpg"
    },
    "games": 0,
    "win": 0,
    "lost": 0,
    "draw": 0,
    "gp": 0,
    "gc": 0,
    "points": 0
  }
]
```

## Gerar todos os jogos do campeonato

Endpoint (POST):
```
{{ baser_url  }}/allgames/generate
```

BODY:
```
{
	"competitionId": "{{ id_campeonato }}"
}
```

## Listar jogos da rodada

Endpoint (GET):
```
{{ baser_url  }}/rounds/{{ id_campeonato  }}?round={{ number_round }}
```

RESPONSE:
{
  "round": 1,
  "games": [
    {
      "_id": "5daf4595570b777dbaecff88",
      "competition": "5daeefb977f01949feff5048",
      "valid": false,
      "round": 1,
      "createdAt": "2019-10-22T18:08:21.383Z",
      "updatedAt": "2019-10-22T18:33:00.149Z",
      "__v": 0,
      "playerA": {
        "player": {
          "_id": "5daef06277f01949feff5049",
          "name": "Jogador 001 Validando o Fluxo",
          "avatar": "https://png.pngtree.com/png-clipart/20190619/original/pngtree-vector-avatar-icon-png-image_4013749.jpg"
        },
        "gol": 3,
        "team": {
          "_id": "5d5c4a62cb493a4613a35e60",
          "name": "Barcelona"
        }
      },
      "playerB": {
        "player": {
          "_id": "5daef0a44395494cc1550e2f",
          "name": "Jogador 002 Validando o Fluxo",
          "avatar": "https://png.pngtree.com/png-clipart/20190619/original/pngtree-vector-avatar-icon-png-image_4013749.jpg"
        },
        "gol": 3,
        "team": {
          "_id": "5d5c4a6acb493a4613a35e61",
          "name": "Real Madrid"
        }
      }
    },
    {
      "_id": "5daf4596570b777dbaecff8b",
      "competition": "5daeefb977f01949feff5048",
      "valid": false,
      "round": 1,
      "createdAt": "2019-10-22T18:08:22.164Z",
      "updatedAt": "2019-10-22T18:08:22.164Z",
      "__v": 0,
      "playerA": {
        "player": {
          "_id": "5d4ad1d2fd6c874339a423e5",
          "name": "Jonatas 2",
          "avatar": "avatar.png"
        }
      },
      "playerB": {
        "player": {
          "_id": "5d4b062d33d58c33a40c033e",
          "name": "João",
          "avatar": "avatar.png"
        }
      }
    }
  ],
  "hasNext": true,
  "hasPrevious": false,
  "firstRound": 1,
  "lastRound": 3
}

## Listagem de times cadastrados (Selecionar os times ao atualizar uma partida)

Endpoint (GET):
```
{{ baser_url  }}/teams
```

RESPONSE:
```
[
  {
    "avatar": "https://png.pngtree.com/element_origin_min_pic/16/09/01/2057c825c1498c5.jpg",
    "_id": "5d4ad9d1b4384054e9574b52",
    "name": "Barcelona",
    "competition": "5d4ac3ca881fb622aae2c2f8",
    "createdAt": "2019-08-07T14:01:53.759Z",
    "updatedAt": "2019-08-07T14:03:19.553Z",
    "__v": 0
  }
]
```

## Atualizar placar do jogo (adicionar os gols e os times utilizados)

Endpoint (PUT):
```
{{ baser_url  }}/games
```

BODY:
```
{
	"gameId": "5daf4595570b777dbaecff88",
	"golA": 3,
	"golB": 2,
	"teamIdA": "{{ id_barcelona  }}",
	"teamIdB": "{{ id_real_madrid  }}"
}
```

## Aprovar o jogo com as informações preenchidas e salvas (botão de aprovação no jogo)

Endpoint (PUT):
```
{{ baser_url  }}/games/approve
```

BODY:
```
{
	"gameId": "5daf4595570b777dbaecff88"
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

### Listagem de jogadores da competição

```bash
GET: http://localhost:3333/api/players/{ID_COMPETITION}

RESULT:
[
  {
    "avatar": "https://png.pngtree.com/png-clipart/20190619/original/pngtree-vector-avatar-icon-png-image_4013749.jpg",
    "_id": "5daef06277f01949feff5049",
    "name": "Jogador 001 Validando o Fluxo",
    "createdAt": "2019-10-22T12:04:50.616Z",
    "updatedAt": "2019-10-22T12:04:50.616Z",
    "__v": 0
  }
]
```

### Obter um jogador

```bash
GET: http://localhost:3333/api/players/{ID_COMPETITION}/{ID_PLAYER}

RESULT:
{
  "avatar": "https://png.pngtree.com/png-clipart/20190619/original/pngtree-vector-avatar-icon-png-image_4013749.jpg",
  "_id": "5daef06277f01949feff5049",
  "name": "Jogador 001 Validando o Fluxo",
  "createdAt": "2019-10-22T12:04:50.616Z",
  "updatedAt": "2019-10-22T12:04:50.616Z",
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

```

### Listagem de times

```bash
GET: http://localhost:3333/api/teams

RESULT:
[
  {
    "avatar": "https://png.pngtree.com/element_origin_min_pic/16/09/01/2057c825c1498c5.jpg",
    "_id": "5d4ad9d1b4384054e9574b52",
    "name": "Barcelona",
    "competition": "5d4ac3ca881fb622aae2c2f8",
    "createdAt": "2019-08-07T14:01:53.759Z",
    "updatedAt": "2019-08-07T14:03:19.553Z",
    "__v": 0
  }
]
```

### Obter um time

```bash
GET: http://localhost:3333/api/teams/{ID_TEAM}

RESULT:

{
  "avatar": "https://png.pngtree.com/element_origin_min_pic/16/09/01/2057c825c1498c5.jpg",
  "_id": "5d5c4a62cb493a4613a35e60",
  "name": "Barcelona",
  "competition": "5d5c49d6cb493a4613a35e58",
  "createdAt": "2019-08-20T19:30:42.506Z",
  "updatedAt": "2019-08-20T19:30:42.506Z",
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

```
### Listagem de partidas

```bash
GET: http://localhost:3333/api/games/{ID_COMPETITION}

RESULT:
[
  {
    "_id": "5d5c4c43cb493a4613a35e62",
    "competition": "{ID_COMPETITION}",
    "players": [
      {
        "_id": "5d5c4c43cb493a4613a35e64",
        "player": {
          "_id": "5d5c4a0fcb493a4613a35e59",
          "name": "Jogador A"
        },
        "gol": 3,
        "team": {
          "_id": "5d5c4a62cb493a4613a35e60",
          "name": "Barcelona"
        }
      },
      {
        "_id": "5d5c4c43cb493a4613a35e63",
        "player": {
          "_id": "5d5c4a1acb493a4613a35e5a",
          "name": "Jogador B"
        },
        "gol": 2,
        "team": {
          "_id": "5d5c4a6acb493a4613a35e61",
          "name": "Real Madrid"
        }
      }
    ],
    "valid": false,
    "round": 1,
    "createdAt": "2019-08-20T19:38:43.382Z",
    "updatedAt": "2019-08-26T16:50:19.903Z",
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

### Gerar todos os jogos do campeonato
Serviço gera todas as partidas do campeonato, caso já existam partidas, será apenas completo os jogos que faltam.

```bash
POST: http://localhost:3333/api/allgames/generate

BODY:
{
	"competitionId": "{ID_COMPETITION}"
}
RESULT:
{
  "message": "All games created"
}
```

### Lista de jogos da rodada
Caso não seja informada a rodada na chamada será retornada a rodada atual

```bash
GET: http://localhost:3333/api/rounds/{ID_COMPETITION}?round={NUMBER_ROUND}

RESULT:
{
  "round": 1,
  "games": [
    {
      "_id": "5d5c4c43cb493a4613a35e62",
      "competition": "5d5c49d6cb493a4613a35e58",
      "players": [
        {
          "_id": "5d5c4c43cb493a4613a35e64",
          "player": {
            "_id": "5d5c4a0fcb493a4613a35e59",
            "name": "Jogador A"
          },
          "gol": 3,
          "team": {
            "_id": "5d5c4a62cb493a4613a35e60",
            "name": "Barcelona"
          }
        },
        {
          "_id": "5d5c4c43cb493a4613a35e63",
          "player": {
            "_id": "5d5c4a1acb493a4613a35e5a",
            "name": "Jogador B"
          },
          "gol": 2,
          "team": {
            "_id": "5d5c4a6acb493a4613a35e61",
            "name": "Real Madrid"
          }
        }
      ],
      "valid": false,
      "round": 1,
      "createdAt": "2019-08-20T19:38:43.382Z",
      "updatedAt": "2019-08-26T16:50:19.903Z",
      "__v": 0
    }
  ],
  "hasNext": true,
  "hasPrevious": false,
  "firstRound": 1,
  "lastRound": 5
}