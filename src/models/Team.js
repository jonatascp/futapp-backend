const { Schema, model } = require('mongoose')

const TeamSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        required: true,
        default: 'https://png.pngtree.com/element_origin_min_pic/16/09/01/2057c825c1498c5.jpg'
    }
}, { 
    timestamps: true,    
})

module.exports = model('Team', TeamSchema)