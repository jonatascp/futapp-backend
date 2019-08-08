const Player = require('../models/Player')
const Competition = require('../models/Competition')
const Game = require('../models/Game')

module.exports = {

    async store(req, res) {
        
        const { competitionId, round } = req.body
        
        const competition = await Competition.findById(competitionId)
        if(!competition) {
            return res.status(400).json({ error: 'Competition not exist' })
        }

        return res.json({ok: true})
    }
}