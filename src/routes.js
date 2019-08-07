const express = require('express')

const routes = express.Router()

//const DevController = require('./controllers/DevControllers')
//const LikeController = require('./controllers/LikeControllers')
//const DislikeController = require('./controllers/DislikeControllers')
const CompetitionController = require('./controllers/CompetitionControllers')
const PlayerController = require('./controllers/PlayerControllers')
const TeamController = require('./controllers/TeamControllers')
const ClassificationController = require('./controllers/ClassificationControllers')
const GameController = require('./controllers/GameControllers')

//routes.post('/devs', DevController.store)
//routes.get('/devs', DevController.index)
//routes.post('/devs/:devId/likes', LikeController.store)
//routes.post('/devs/:devId/dislikes', DislikeController.store)
routes.get('/api/competitions', CompetitionController.index)
routes.post('/api/competitions', CompetitionController.store)
routes.put('/api/competitions', CompetitionController.update)

routes.get('/api/players/:competitionId', PlayerController.index)
routes.post('/api/players', PlayerController.store)
routes.put('/api/players', PlayerController.update)

routes.get('/api/teams/:competitionId', TeamController.index)
routes.post('/api/teams', TeamController.store)
routes.put('/api/teams', TeamController.update)

routes.get('/api/classifications/:competitionId', ClassificationController.index)

routes.get('/api/games/:competitionId', GameController.index)
routes.post('/api/games', GameController.store)

module.exports = routes