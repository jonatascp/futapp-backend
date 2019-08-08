const { Schema, model } = require('mongoose')

const GameSchema = new Schema({
    competition: {
        type: Schema.Types.ObjectId,
        ref: 'Competition'
    },
    players: [{
        player: {
            type: Schema.Types.ObjectId,
            ref: 'Player',
            required: true
        },
        gol: {
            type: Number,
            required: false,
        },
        team: {
            type: Schema.Types.ObjectId,
            ref: 'Team',
            required: false
        },
    }],
    valid: {
        type: Boolean,
        required: true,
    },
    round: {
        type: Number,
        required: true,
    }
}, { 
    timestamps: true,    
})

module.exports = model('Game', GameSchema)