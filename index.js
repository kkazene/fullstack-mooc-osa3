const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const app = express()

app.use(bodyParser.json())
morgan.token('body', function (req, res) {
  return JSON.stringify({ name: req.body.name, number: req.body.number })
})
app.use(morgan(':method :url :body :status :res[content-length] - :response-time ms'))

let persons = [
  {
    "name": "Arto Hellas",
    "number": "040-123456",
    "id": 1
  },
  {
    "name": "Martti Tienari",
    "number": "040-123456",
    "id": 2
  },
  {
    "name": "Arto Järvinen",
    "number": "040-123456",
    "id": 3
  },
  {
    "name": "Lea Kutvonen",
    "number": "040-123456",
    "id": 4
  }
]

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/info', (req, res) => {
  const number = persons.length
  let message = `<p>puhelinluettelossa ${number} ihmisen tiedot</p>`
  const date = new Date()
  message = message + date
  res.send(message)
})

app.get('/api/persons', (req, res) => {
  res.send(persons)
})

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  const person = persons.find(person => person.id === id )
  if (person)
    res.send(person)
  else
    res.status(404).end()
})

app.post('/api/persons/', (req, res) => {
  const body = req.body
  if (!body.name || !body.number)
    return res.status(400).json({error: 'person must have name and numb'})
  if (persons.find(person => person.name === body.name))
    return res.status(400).json({error: 'name must be unique'})
  body.id = Math.floor(Math.random() * 777)
  persons = persons.concat(body)
  res.json(body)
})

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  persons = persons.filter(person => person.id !== id )
  res.status(204).end()
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})