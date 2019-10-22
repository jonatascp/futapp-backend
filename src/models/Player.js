const { Schema, model } = require('mongoose')

const PlayerSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        required: true,
        default: 'https://png.pngtree.com/png-clipart/20190619/original/pngtree-vector-avatar-icon-png-image_4013749.jpg'
    }    
}, { 
    timestamps: true,    
})

module.exports = model('Player', PlayerSchema)