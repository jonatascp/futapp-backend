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
        
        const { playerA, playerB, competitionId, round } = req.body
        
        const competition = await Competition.findById(competitionId)
        if(!competition) {
            return res.status(400).json({ error: 'Competition not exist' })
        }

        const playerAExist = await Player.findById(playerA.id)
        if(!playerAExist) {
            return res.status(400).json({ error: 'Player not exist' })
        }
        
        const playerBExist = await Player.findById(playerB.id)
        if(!playerBExist) {
            return res.status(400).json({ error: 'Player not exist' })
        }
        
        const game = await Game.create({
            competition: competition._id,
            players: [{
                player: playerAExist._id,
            },{
                player: playerBExist._id,
            }],
            valid: false,
            round
        })

        return res.json(game)
    },

    async update(req, res) {

        const { gameId, golA, golB, teamIdA, teamIdB } = req.body

        const game = await Game.findById(gameId)
        if(!game) {
            return res.status(400).json({ error: 'Game not exist' })
        }

        const teamA = await Team.findById(teamIdA)
        if(!teamA) {
            return res.status(400).json({ error: 'Team not exist' })
        }

        const teamB = await Team.findById(teamIdB)
        if(!teamB) {
            return res.status(400).json({ error: 'Team not exist' })
        }

        game.players[0].gol = golA
        game.players[1].gol = golB
        game.players[0].team = teamA._id
        game.players[1].team = teamB._id

        await game.save()

        return res.json(game)
    }
}