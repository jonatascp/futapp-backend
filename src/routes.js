const express = require('express')

const routes = express.Router()

const CompetitionController = require('./controllers/CompetitionControllers')
const PlayerController = require('./controllers/PlayerControllers')
const TeamController = require('./controllers/TeamControllers')
const ClassificationController = require('./controllers/ClassificationControllers')
const GameController = require('./controllers/GameControllers')
const GameGenerateController = require('./controllers/GameGenerateControllers')
const RoundController = require('./controllers/RoundControllers')

routes.get('/api/competitions', CompetitionController.index)
routes.post('/api/competitions', CompetitionController.store)
routes.put('/api/competitions', CompetitionController.update)
routes.get('/api/competitions/:competitionId', CompetitionController.get)

routes.get('/api/players/:competitionId', PlayerController.index)
routes.get('/api/players/:competitionId/:playerId', PlayerController.get)
routes.post('/api/players', PlayerController.store)
routes.put('/api/players', PlayerController.update)

routes.get('/api/teams/:competitionId', TeamController.index)
routes.get('/api/teams/:competitionId/:teamId', TeamController.get)
routes.post('/api/teams', TeamController.store)
routes.put('/api/teams', TeamController.update)

routes.get('/api/classifications/:competitionId', ClassificationController.index)

routes.get('/api/games/:competitionId', GameController.index)
routes.post('/api/games', GameController.store)
routes.put('/api/games', GameController.update)

routes.post('/api/games/generate', GameGenerateController.store)

routes.get('/api/rounds/:competitionId', RoundController.index)

module.exports = routes