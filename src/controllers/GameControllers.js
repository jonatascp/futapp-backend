const Player = require('../models/Player')
const Competition = require('../models/Competition')
const Team = require('../models/Team')
const Game = require('../models/Game')

module.exports = {

    async index(req, res) {
        
        const { competitionId } = req.params
        const competition = await Competition.findById(competitionId)
        if (!competition) {
            return res.status(400).json({ error: 'Competition not exist' })
        }
        const games = await Game.find({ 
            competition:  competition._id 
        })
        return res.json(games)
    },
    
    async store(req, res) {
        
        const { playerA, playerB, competitionId, valid } = req.body
        
        const competition = await Competition.findById(competitionId)
        if(!competition) {
            return res.status(400).json({ error: 'Competition not exist' })
        }

        const playerAExist = await Player.findById(playerA.player)
        if(!playerAExist) {
            return res.status(400).json({ error: 'Player not exist' })
        }
        const teamA = await Team.findById(playerA.team)
        if(!teamA) {
            return res.status(400).json({ error: 'Team not exist' })
        }

        const playerBExist = await Player.findById(playerB.player)
        if(!playerBExist) {
            return res.status(400).json({ error: 'Player not exist' })
        }
        const teamB = await Team.findById(playerB.team)
        if(!teamB) {
            return res.status(400).json({ error: 'Team not exist' })
        }

        const game = await Game.create({
            competition: competition._id,
            players: [{
                player: playerAExist._id,
                team: teamA._id,
                gol: playerA.gol
            },{
                player: playerBExist._id,
                team: teamB._id,
                gol: playerB.gol
            }],
            valid
        })

        return res.json(game)
    }
}