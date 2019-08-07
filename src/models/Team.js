const { Schema, model } = require('mongoose')

const TeamSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    competition: {
        type: Schema.Types.ObjectId,
        ref: 'Competition'
    },    
}, { 
    timestamps: true,    
})

module.exports = model('Team', TeamSchema)