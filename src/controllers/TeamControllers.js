const Team = require('../models/Team')
const Competition = require('../models/Competition')

module.exports = {
    async index(req, res) {
        
        const { competitionId } = req.params
        const competition = await Competition.findById(competitionId)
        if (!competition) {
            return res.status(400).json({ error: 'Competition not exist' })
        }
        const teams = await Team.find({ 
            competition:  competition._id 
        })

        return res.json(teams)
    },

    async store(req, res) {
        
        const { name, competitionId } = req.body

        const teamExists = await Team.findOne({ 
            name,
            competition: competitionId
        })
        
        if(teamExists) {
            return res.status(400).json({ error: 'Team exist on competition' })
        }

        const team = await Team.create({
            name,
            competition: competitionId
        })

        return res.json(team)
    },

    async update(req, res) {

        const { teamId, name } = req.body
        
        const team = await Team.findById(teamId)
        if(!team) {
            return res.status(400).json({ error: 'Team not exist' })
        }
        
        team.name = name
        await team.save()

        return res.json(team)
    }
}