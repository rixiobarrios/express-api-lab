const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/gaphy')

mongoose.Promise = Promise

module.exports = mongoose