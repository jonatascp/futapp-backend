const Player = require('../models/Player')
const Competition = require('../models/Competition')
const CompetitionPlayer = require('../models/CompetitionPlayer')

module.exports = {

    async index(req, res) {
        
        const { competitionId } = req.params
        
        const competition = await Competition.findById(competitionId)
        if (!competition) {
            return res.status(400).json({ error: 'Competition not exist' })
        }

        const competitionPlayerList = await CompetitionPlayer.find({
            competition: competitionId
        }).populate('player')

        return res.json(competitionPlayerList.map(data => {
            return data.player
        }))
    },

    async store(req, res) {
        
        const { competitionId, playerId } = req.body

        const playerExists = await Player.findById(playerId)
        if(!playerExists) {
            return res.status(400).json({ error: 'Player not exist' })
        }
        const competition = await Competition.findById(competitionId)
        if (!competition) {
            return res.status(400).json({ error: 'Competition not exist' })
        }
        const competitionPlayerValid = await CompetitionPlayer.findOne({
            competition: competitionId,
            player: playerId
        })
        if (competitionPlayerValid) {
            return res.status(400).json({ error: 'CompetitionPlayer exists' })
        }

        const competitionPlayer = await CompetitionPlayer.create({
            competition: competitionId,
            player: playerId
        })

        return res.json(competitionPlayer)
    },
}