//const Team = require('../models/Team')
const Competition = require('../models/Competition')
const Player = require('../models/Player')

module.exports = {
    async index(req, res) {
        
        const { competitionId } = req.params
        const competition = await Competition.findById(competitionId)
        if (!competition) {
            return res.status(400).json({ error: 'Competition not exist' })
        }
        const players = await Player.find({ 
            competition:  competition._id 
        })
        const initClassification = (player) => {
            return {
                    name: player.name,
                    position: 0,
                    games: 0,
                    win: 0,
                    lost: 0,
                    draw:0,
                    gp:0,
                    gc:0
                }
        }

        const classification = players.map(initClassification)
        return res.json(classification)
    }
}