const mongoose = require('mongoose')

// korvaa url oman tietokantasi urlilla. ethän laita salasanaa Githubiin!
const url = 'mongodb://<dbuser>:<dbpasswd>@ds143293.mlab.com:43293/personsbase'

mongoose.connect(url)

const Person = mongoose.model('Person', {
  name: String,
  number: String,
})

module.exports = Person