const Game = require('../models/Game')
const Competition = require('../models/Competition')

module.exports = {

    async index(req, res) {

        const { competitionId } = req.params
        const { round } = req.query

        const competition = await Competition.findById(competitionId)
        if (!competition) {
            return res.status(400).json({ error: 'Competition not exist' })
        }

        let gamesRound = {
            round: 1,
            games:[],
            hasNext: false,
            hasPrevious: false,
            firstRound: 1,
            lastRound: 1
        }

        // Obtendo um jogo da última rodada
        const lastGame = await Game.findOne({
            competition: competition._id
        }).sort({round: -1}).limit(1)

        if (!lastGame) {
            return res.json(gamesRound)
        }

        gamesRound.lastRound = lastGame.round
        
        // Configurando a rodada e se existe rodadas anteriores ou próximas
        if (!round || round > lastGame.round) {
            gamesRound.round = lastGame.round
        } else {
            gamesRound.round =  Number.parseInt(round)
            if(lastGame.round > gamesRound.round) {
                gamesRound.hasNext = true
            } 
        }

        if(gamesRound.round > 1) {
            gamesRound.hasPrevious = true
        }

        // const games = await Game.find({
        //     round: gamesRound.round
        // })

        const games = await Game.aggregate([
            { 
                $match: { 
                    competition:  competition._id,
                    round: gamesRound.round
                } 
            },
            {
                $lookup: {
                    from: "players",
                    localField: "players.player",
                    foreignField : "_id",
                    as: "players_object"
                }
            },
            {
                $lookup: {
                    from: "teams",
                    localField: "players.team",
                    foreignField : "_id",
                    as: "teams_object"
                }
            }
         ])

        // Projetando as informações dos jogadores no retorno da requisição
        const projectionGames = (game) => {
             
            for(i=0; i<2; i++) {
                game.players[i].player = {
                     _id: game.players_object[i]._id,
                     name: game.players_object[i].name
                 }
                 if(game.teams_object.length === 2) {
                     game.players[i].team = {
                        _id: game.teams_object[i]._id,
                        name: game.teams_object[i].name
                    }
                 }
            }
            delete game.players_object
            delete game.teams_object
            return game
        }

        gamesRound.games = games.map(projectionGames)

        return res.json(gamesRound)
    }
}