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
