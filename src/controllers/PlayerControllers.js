const Player = require('../models/Player')
const Competition = require('../models/Competition')
const CompetitionPlayer = require('../models/CompetitionPlayer')

module.exports = {

    async index(req, res) {
        
        const players = await Player.find()
        return res.json(players)
    },
    
    async get(req, res) {
        
        const { playerId } = req.params
        const player = await Player.findById(playerId)
        if(!player) {
            return res.status(400).json({ error: 'Player not exist' })
        }
        return res.json(player)
    },

    async notcompetition(req, res) {
        
        const { competitionId } = req.params
        const competition = await Competition.findById(competitionId)
        if (!competition) {
            return res.status(400).json({ error: 'Competition not exist' })
        }

        const competitionPlayerList = await CompetitionPlayer.find({
            competition: competitionId
        })
        const listPlayerId = competitionPlayerList.map(data => {
            return data.player
        })

        const playerNotCompetition = await Player.find({ 
            _id: { "$nin": listPlayerId } 
        })

        return res.json(playerNotCompetition)
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