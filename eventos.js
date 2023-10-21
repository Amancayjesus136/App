const express = require('express')
const router = express.Router()

router.get('/listado', (req, res) => {
    res.send('Listado de eventos')
})

router.get('/detalle/:id', (req, res) => {
    res.send('Detalle de eventos')
})

module.exports = router