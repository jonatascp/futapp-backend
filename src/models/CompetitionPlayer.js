const { Schema, model } = require('mongoose')

const CompetitionPlayerSchema = new Schema({
    competition: {
        type: Schema.Types.ObjectId,
        ref: 'Competition',
        required: true
    },
    player: {
        type: Schema.Types.ObjectId,
        ref: 'Player',
        required: true
    }
}, { 
    timestamps: true,    
})

module.exports = model('CompetitionPlayer', CompetitionPlayerSchema)