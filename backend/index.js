const express = require('express')
const parser = require('body-parser')
const cors = require('cors')

const app = express()

const gifsController = require('./controllers/gifs')

app.use(parser.urlencoded({extended: true}))
app.use(parser.json())
app.use(cors())

app.set('view engine', 'hbs')

app.use('/gifs', gifsController)

app.listen(3000, () => console.log('Listening on port 3000...'))