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
    },
    avatar: {
        type: String,
        required: true,
        default: 'https://png.pngtree.com/png-clipart/20190516/original/pngtree-champions-league-uefa-logo-png-image_3643132.jpg'
    }
}, { 
    timestamps: true,    
})

module.exports = model('Competition', CompetitionSchema)