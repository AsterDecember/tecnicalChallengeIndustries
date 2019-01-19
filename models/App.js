const moongoose = require('mongoose')
const Schema = moongoose.Schema

const appSchema = new Schema({

  name: String,
  description: String,

},
  {
    timestamps: {
      createdAt: true,
      updatedAt: true,
    }

  })

module.exports = moongoose.model('App', appSchema)
