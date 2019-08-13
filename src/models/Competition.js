const { Schema, model } = require('mongoose')

const CompetitionSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    }
}, { 
    timestamps: true,    
})

module.exports = model('Competition', CompetitionSchema)