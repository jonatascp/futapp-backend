const Competition = require('../models/Competition')
const Game = require('../models/Game')
const CompetitionPlayer = require('../models/CompetitionPlayer')

async function generetaClassification(competitionId, res) {
    const competition = await Competition.findById(competitionId)
    if (!competition) {
        return res.status(400).json({ error: 'Competition not exist' })
    }
    
    const competitionPlayerList = await CompetitionPlayer.find({
        competition: competitionId
    }).populate('player')

    const players = competitionPlayerList.map(data => {
        return data.player
    })
    
    // Inicializando a classificação com a listagem dos jogadores com as informações zeradas
    const initClassification = (player) => {
        return {
                player: {
                    name: player.name,
                    id: player._id,
                    avatar: player.avatar
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

    //Para cada item da classificação será consultado os jogos do jogador e adicionado as informações:
    //Gols, Jogos, Vitórias, Derrotas, Empates
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
    
    //Alterando a classificação com as informações dos jogos
    const classificationGames = classification.map(addGame)

    //Para cada jogador será adicionado os pontos de acordo com os números de vitórias e empates
    const addPoints = (register) => {
        register = {...register,
                            points: (register.win * 3) + register.draw
                        }
        return register
    }

    //Alterando a classificação com os pontos de cada jogador
    const classificationPoints = classificationGames.map(addPoints)

    //Ordenando a classificação pelos pontos
    const sortClassification = (a,b) => {
        if (a.points > b.points) {
            return -1;
            } else if (a.points < b.points) {
            return 1;
            } else {
            return 0;
            }
    }
    
    return classificationPoints.sort(sortClassification)
}

module.exports = {

    async index(req, res) {

        const { competitionId } = req.params
        const classification = await generetaClassification(competitionId, res)
        res.json(classification)
    },
    async generate(competitionId, res) {

        return await generetaClassification(competitionId, res)
    }
}