const { Schema, model } = require('mongoose')

const PlayerSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        required: true,
        default: 'imgDefault'
    },
    competition: {
        type: Schema.Types.ObjectId,
        ref: 'Competition'
    },    
}, { 
    timestamps: true,    
})

module.exports = model('Player', PlayerSchema)