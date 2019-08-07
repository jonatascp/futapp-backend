const { Schema, model } = require('mongoose')

const GameSchema = new Schema({
    competition: {
        type: Schema.Types.ObjectId,
        ref: 'Competition'
    },
    players: [{
        player: {
            type: Schema.Types.ObjectId,
            ref: 'Player'
        },
        gol: {
            type: Number,
            required: true,
        },
        team: {
            type: Schema.Types.ObjectId,
            ref: 'Team'
        },
    }],
    valid: {
        type: Boolean,
        required: true,
    }
}, { 
    timestamps: true,    
})

module.exports = model('Game', GameSchema)