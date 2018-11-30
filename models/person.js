const mongoose = require('mongoose')
const Schema = mongoose.Schema

// korvaa url oman tietokantasi urlilla. ethän laita salasanaa Githubiin!
const url = 'mongodb://<dbuser>:<dbpasswd>@ds143293.mlab.com:43293/personsbase'

mongoose.connect(url)

const personSchema = new Schema({
  name: String,
  number: String,
})

personSchema.statics.format = (person) => {
    return {
      name: person.name,
      number: person.number,
      id: person._id
    }
}

const Person = mongoose.model('Person', personSchema)

module.exports = Person