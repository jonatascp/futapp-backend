const Game = require('../models/Game')

module.exports = {

    async index(req, res) {

        const { competitionId } = req.params
        const { round } = req.query

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
            competition: competitionId
        }).sort({round: -1}).limit(1)

        if (!lastGame) {
            return res.json(gamesRound)
        }

        gamesRound.lastRound = lastGame.round
        
        // Configurando a rodada e se existe rodadas anteriores ou próximas
        if (!round || round > lastGame.round) {
            gamesRound.round = lastGame.round
        } else {
            gamesRound.round = round
            if(lastGame.round > gamesRound.round) {
                gamesRound.hasNext = true
            } 
        }

        if(gamesRound.round > 1) {
            gamesRound.hasPrevious = true
        }

        const games = await Game.find({
            round: gamesRound.round
        })

        gamesRound.games = games

        return res.json(gamesRound)
    }
}