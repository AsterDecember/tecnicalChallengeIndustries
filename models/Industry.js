const moongoose = require('mongoose')
const Schema = moongoose.Schema

const industrySchema = new Schema({
    id: {
        type: String,
        unique: true
    },
    name: String,
    children: [],
    },
    {
        timestamps: {
            createdAt: true,
            updatedAt: true,
        }

    })

module.exports = moongoose.model('Industry', industrySchema)
