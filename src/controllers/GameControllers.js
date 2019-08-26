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

        const games = await Game.aggregate([
            { 
                $match: { 
                    competition:  competition._id 
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
        return res.json(games.map(projectionGames))
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