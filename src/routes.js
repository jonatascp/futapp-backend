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
routes.get('/competitions', CompetitionController.index)
routes.post('/competitions', CompetitionController.store)
routes.put('/competitions', CompetitionController.update)

routes.get('/players/:competitionId', PlayerController.index)
routes.post('/players', PlayerController.store)
routes.put('/players', PlayerController.update)

routes.get('/teams/:competitionId', TeamController.index)
routes.post('/teams', TeamController.store)
routes.put('/teams', TeamController.update)

routes.get('/classifications/:competitionId', ClassificationController.index)

routes.get('/games/:competitionId', GameController.index)
routes.post('/games', GameController.store)

module.exports = routes