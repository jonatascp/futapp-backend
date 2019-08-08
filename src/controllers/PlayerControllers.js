const Player = require('../models/Player')
const Competition = require('../models/Competition')

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
        return res.json(players)
    },
    
    async get(req, res) {
        
        const { competitionId, playerId } = req.params
        const competition = await Competition.findById(competitionId)
        if (!competition) {
            return res.status(400).json({ error: 'Competition not exist' })
        }
        const player = await Player.findOne({ 
            competition:  competition._id,
            _id: playerId
        })
        return res.json(player)
    },

    async store(req, res) {
        
        const { name, competitionId, avatar } = req.body

        const playerExists = await Player.findOne({ 
            name,
            competition: competitionId
        })
        
        if(playerExists) {
            return res.status(400).json({ error: 'Player exist on competition' })
        }

        const player = await Player.create({
            name,
            competition: competitionId,
            avatar
        })

        return res.json(player)
    },

    async update(req, res) {

        const { playerId, name, avatar } = req.body
        
        const player = await Player.findById(playerId)
        if(!player) {
            return res.status(400).json({ error: 'Player not exist' })
        }
        
        player.name = name
        player.avatar = avatar
        await player.save()

        return res.json(player)
    }
}