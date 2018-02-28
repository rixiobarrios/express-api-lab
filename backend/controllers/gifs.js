const express = require('express')
const Gif = require('../models/Gif')

const router = express.Router()

router.get('/', (req, res) => {
    Gif.find({}).then(gifs => {
      res.json(gifs)
    })
})

router.post('/', (req, res) => {
    Gif.create(req.body)
        .then(gif => {
            Gif.find({})
                .then(gifs => {
                    res.json(gifs)
                })
        })
})

router.put('/:gifId', (req, res) => {
    Gif.findOneAndUpdate({_id: req.params.gifId}, req.body)
        .then(gif => {
            Gif.find({})
                .then(gifs => {
                    res.json(gifs)
                })
        })
})

router.delete('/:gifId', (req, res) => {
    Gif.findOneAndRemove({_id: req.params.gifId})
        .then(gif => {
            Gif.find({})
                .then(gifs => {
                    res.json(gifs)
                })
        })
})

module.exports = router