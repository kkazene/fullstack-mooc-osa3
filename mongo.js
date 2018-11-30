const mongoose = require('mongoose')

// korvaa url oman tietokantasi urlilla. ethän laita salasanaa Githubiin!
const url = 'mongodb://<dbuser>:<dbpassword>@ds143293.mlab.com:43293/personsbase'

mongoose.connect(url)

const Person = mongoose.model('Person', {
  name: String,
  number: String,
})

if (process.argv.length < 3) {
  Person
    .find({})
    .then(result => {
        console.log('puhelinluettelo:')
      result.forEach(person => {
        console.log(`${person.name} ${person.number}`)
      })
      mongoose.connection.close()
  })

} else {

  const person = new Person({
    name: process.argv[2],
    number: process.argv[3],
  })
    
  person
    .save()
    .then(response => {
      console.log(`lisätään henkilö ${response.name} numero ${response.number} luetteloon`)
      mongoose.connection.close()
    })
  }