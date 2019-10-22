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