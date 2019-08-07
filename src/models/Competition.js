const { Schema, model } = require('mongoose')

const CompetitionSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
}, { 
    timestamps: true,    
})

module.exports = model('Competition', CompetitionSchema)