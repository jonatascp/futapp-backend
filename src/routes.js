const express = require('express')

const routes = express.Router()

const CompetitionController = require('./controllers/CompetitionControllers')
const PlayerController = require('./controllers/PlayerControllers')
const TeamController = require('./controllers/TeamControllers')
const ClassificationController = require('./controllers/ClassificationControllers')
const GameController = require('./controllers/GameControllers')
const GameGenerateController = require('./controllers/GameGenerateControllers')
const RoundController = require('./controllers/RoundControllers')
const CompetitionPlayerController = require('./controllers/CompetitionPlayerControllers')

routes.get('/api/competitions', CompetitionController.index)
routes.post('/api/competitions', CompetitionController.store)
routes.put('/api/competitions', CompetitionController.update)
routes.get('/api/competitions/:competitionId', CompetitionController.get)

routes.get('/api/players', PlayerController.index)
routes.get('/api/players/:competitionId/:playerId', PlayerController.get)
routes.post('/api/players', PlayerController.store)
routes.put('/api/players', PlayerController.update)
routes.get('/api/players-not-exist/:competitionId', PlayerController.notcompetition)

routes.get('/api/teams', TeamController.index)
routes.get('/api/teams/:competitionId/:teamId', TeamController.get)
routes.post('/api/teams', TeamController.store)
routes.put('/api/teams', TeamController.update)

routes.get('/api/classifications/:competitionId', ClassificationController.index)

routes.get('/api/games/:competitionId', GameController.index)
routes.post('/api/games', GameController.store)
routes.put('/api/games', GameController.update)
routes.put('/api/games/approve', GameController.approve)

routes.post('/api/games/generate', GameGenerateController.store)

routes.post('/api/allgames/generate', GameGenerateController.all)

routes.get('/api/rounds/:competitionId', RoundController.index)

routes.get('/api/players/:competitionId', CompetitionPlayerController.index)
routes.post('/api/players/add-competition-player', CompetitionPlayerController.store)

module.exports = routes