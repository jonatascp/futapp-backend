const Competition = require('../models/Competition')
const Game = require('../models/Game')
const ClassificationController = require('./ClassificationControllers')

module.exports = {

    async store(req, res) {
        
        const { competitionId, round } = req.body
        
        const competition = await Competition.findById(competitionId)
        if(!competition) {
            return res.status(400).json({ error: 'Competition not exist' })
        }

        const classification = await ClassificationController.generate(competitionId)
        const sortGames = (a, b) => {
            if(a.games > b.games){
                return 1
            } else if (a.games == b.games) {
                return 0
            } else {
                return -1
            }
        }

        const classificationOrder = classification.sort(sortGames)
        const gamesUser = await Game.find ({ 
            players: { 
                $elemMatch: { 
                    player: classificationOrder[0].player.id 
                } 
            } 
        })
        let exist = false
        for(indexPlayerA=0; indexPlayerA < classificationOrder.length; indexPlayerA++) {
            console.log(`consultando jogos de ${classificationOrder[indexPlayerA].player.id}`)
            for(indexPlayerB=indexPlayerA+1; indexPlayerB < classificationOrder.length; indexPlayerB++) {
                for(i=0; i < gamesUser.length; i++) {
                    if (gamesUser[i].players[0].player.toString() == classificationOrder[indexPlayerB].player.id.toString() 
                        || gamesUser[i].players[1].player.toString() == classificationOrder[indexPlayerB].player.id.toString()) {
                        exist = true
                        break
                    }
                }
                if (!exist) {
                    const game = await Game.create({
                        competition: competition._id,
                        players: [{
                            player: classificationOrder[indexPlayerA].player.id,
                        },{
                            player: classificationOrder[indexPlayerB].player.id,
                        }],
                        valid: false,
                        round
                    })
            
                    return res.json(game)
                }
                exist = false
            }
        }
        return res.json({message: 'Não existe partida a ser realizada'})
    }
}