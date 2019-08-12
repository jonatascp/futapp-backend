const Competition = require('../models/Competition')

module.exports = {
    async index(req, res) {
        
        const competitions = await Competition.find()

        return res.json(competitions)
    },

    async store(req, res) {

        const { name } = req.body
        const competitionExists = await Competition.findOne({ name })
        
        if(competitionExists) {
            return res.status(400).json({ error: 'Competition exist' })
        }

        const competition = await Competition.create({
            name
        })
        return res.json(competition)
    },

    async update(req, res) {

        const { name, competitionId } = req.body
        const competitionExists = await Competition.findById(competitionId)
        
        if(!competitionExists) {
            return res.status(400).json({ error: 'Competition not exist' })
        }

        competitionExists.name = name
        await competitionExists.save()

        return res.json(competitionExists)
    },
    
    async get(req, res) {

        const { competitionId } = req.params
        const competition = await Competition.findById(competitionId)
        
        if(!competition) {
            return res.status(400).json({ error: 'Competition not exist' })
        }

        return res.json(competition)
    }

}