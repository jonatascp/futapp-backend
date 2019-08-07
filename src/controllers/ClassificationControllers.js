//const Team = require('../models/Team')
const Competition = require('../models/Competition')
const Player = require('../models/Player')
const Game = require('../models/Game')

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
                    player: {
                        name: player.name,
                        id: player._id
                    },
                    games: 0,
                    win: 0,
                    lost: 0,
                    draw:0,
                    gp:0,
                    gc:0,
                    points: 0,
                }
        }

        const classification = players.map(initClassification)

        const games = await Game.find({
            competition:  competition._id,
            valid: true
        })

        const addGame = (register) => {
            const array = games.filter(game => game.players[0].player == register.player.id.toString())
            
            if (array.length > 0) {
                for (i = 0; i < array.length; i++) { 
                    register = {...register,
                            games: register.games + 1,
                            gp: register.gp + array[i].players[0].gol,
                            gc: register.gc + array[i].players[1].gol,
                        }
                    if (array[i].players[0].gol > array[i].players[1].gol) {
                        register = {...register,
                            win: register.win + 1,
                        }
                    }
                    if (array[i].players[0].gol == array[i].players[1].gol) {
                        register = {...register,
                            draw: register.draw + 1,
                        }
                    }
                    if (array[i].players[0].gol < array[i].players[1].gol) {
                        register = {...register,
                            lost: register.lost + 1,
                        }
                    }   
                }
            }
            const arrayB = games.filter(game => game.players[1].player == register.player.id.toString())
            if (arrayB.length > 0) {
                for (i = 0; i < arrayB.length; i++) { 
                    register = {...register,
                            games: register.games + 1,
                            gp: register.gp + arrayB[i].players[1].gol,
                            gc: register.gc + arrayB[i].players[0].gol,
                        }
                    if (arrayB[i].players[1].gol > arrayB[i].players[0].gol) {
                        register = {...register,
                            win: register.win + 1,
                        }
                    }
                    if (arrayB[i].players[1].gol == arrayB[i].players[0].gol) {
                        register = {...register,
                            draw: register.draw + 1,
                        }
                    }
                    if (arrayB[i].players[1].gol < arrayB[i].players[0].gol) {
                        register = {...register,
                            lost: register.lost + 1,
                        }
                    }   
                }
            }

            return register
        }
        
        const classificationGames = classification.map(addGame)

        const addPoints = (register) => {
            register = {...register,
                                points: (register.win * 3) + register.draw
                            }
            return register
        }

        const classificationPoints = classificationGames.map(addPoints)

        const sortClassification = (a,b) => {
            if (a.points > b.points) {
                return -1;
              }
              if (a.points < b.points) {
                return 1;
              }
              return 0;
        }
        
        return res.json(classificationPoints.sort(sortClassification))
    }
}