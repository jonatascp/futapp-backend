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
## Listagem dos jogadores que ainda não estão associados ao campeonato


