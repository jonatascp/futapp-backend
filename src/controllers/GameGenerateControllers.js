const Competition = require('../models/Competition')
const Game = require('../models/Game')
const Player = require('../models/Player')

module.exports = {

    async store(req, res) {
        
        const { competitionId, round } = req.body
        
        // Obtém a competição
        const competition = await Competition.findById(competitionId)
        if(!competition) {
            return res.status(400).json({ error: 'Competition not exist' })
        }

        // Lista de jogadores da competição
        const playersCompetition = await Player.find({
            competition: competitionId
        })

        const maxGames = playersCompetition.length - 1

        // Representa todos os adversários de cada jogador
        let gamesPlayer = []

        // Para cada jogador é criado um objeto com o ID e um array de ID's vazio
        playersCompetition.forEach((element) => {
            gamesPlayer.push({
                player: element._id,
                games:[]
            })
        })
        
        // Lista de todos os jogos do campeonato
        const games = await Game.find({
            competition: competitionId
        })

        // Para cada gamePlayer será adicionado os oponentes daquele jogador no seu array de games
        const addGame = (gamePlayer) => {
            let arrayGames = games.filter((result) => {
                return result.players[0].player.toString() == gamePlayer.player
            })
            arrayGames.forEach((element) => {
                gamePlayer.games.push(element.players[1].player.toString())
            })
            
            arrayGames = games.filter((result) => {
                return result.players[1].player.toString() == gamePlayer.player
            })
            arrayGames.forEach((element) => {
                gamePlayer.games.push(element.players[0].player.toString())
            })

            return gamePlayer
        }

        // Gerando um novo array com os oponentes adicionados para cada jogador
        gamesPlayer = gamesPlayer.map(addGame)

        // Ordenação por jogador com menos jogos
        const sortGamesPlayer = (a, b) => {
            if (a.games.length > b.games.length) {
                return 1
            } else if (a.games.length == b.games.length) {
                return 0
            } else {
                return -1
            }
        }
        gamesPlayer = gamesPlayer.sort(sortGamesPlayer)

        if (gamesPlayer[0].games.length == maxGames) {
            return res.status(400).json({ error: 'All games created' })
        }

        for(i=1; i<gamesPlayer.length; i++) {
            
            if(gamesPlayer[i].games.indexOf(gamesPlayer[0].player.toString()) == -1) {
                const game = await Game.create({
                    competition: competition._id,
                    players: [{
                        player: gamesPlayer[0].player,
                    },{
                        player: gamesPlayer[i].player,
                    }],
                    valid: false,
                    round
                })
                return res.json(game)
            }
        }

        return res.status(400).json({ error: 'Error on create game' })
    }
}