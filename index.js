const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const Person = require('./models/person')
const app = express()

app.use(bodyParser.json())
app.use(express.static('build'))
morgan.token('body', function (req, res) {
  return JSON.stringify({ name: req.body.name, number: req.body.number })
})
app.use(morgan(':method :url :body :status :res[content-length] - :response-time ms'))

app.get('/info', (req, res) => {
  Person
  .find({})
  .then(people => {
    const number = people.length
    let message = `<p>puhelinluettelossa ${number} ihmisen tiedot</p>`
    const date = new Date()
    message = message + date
    res.send(message)
  })
})

app.get('/api/persons', (req, res) => {
  Person
  .find({})
  .then(people => {
    res.json(people.map(Person.format))
  })
})

app.get('/api/persons/:id', (req, res) => {
  Person
  .findById(req.params.id)
  .then(person => {
    if (person)
      res.json(Person.format(person))
    else
      res.status(404).end()
  })
  .catch(error => {
    console.log(error)
    res.status(400).send({ error: 'malformatted id'})
  })
})

app.post('/api/persons/', (req, res) => {
  const body = req.body
  if (!body.name || !body.number)
    return res.status(400).json({error: 'person must have name and numb'})
  
  Person
    .find({name: body.name})
    .then(result => {
      console.log('result', result)
      if (result.length)
        res.status(400).json({error: 'name must be unique'})
      else {
        const person = new Person({
          name: body.name,
          number: body.number,
        })
          
        person
          .save()
          .then(newPerson => {
            res.json(Person.format(newPerson))
          })
      }
    })
})

app.put('/api/persons/:id', (req, res) => {
  const number = req.body.number

  Person
  .findOneAndUpdate({_id: req.params.id}, {number: number}, { new: true })
  .then(updatedPerson => {
    res.json(Person.format(updatedPerson))
  })
  .catch(error => {
    console.log(error)
    res.status(400).send({ error: 'malformatted id'})
  })
})

app.delete('/api/persons/:id', (req, res) => {
  Person
    .findOneAndDelete({_id: req.params.id})
    .then(result => {
      res.status(204).end()
    })
    .catch(error => {
      res.status(400).send({ error: 'malformatted id' })
    })
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})