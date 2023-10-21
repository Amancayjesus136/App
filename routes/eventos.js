const express = require('express')
const router = express.Router()
const Evento =  require('../services/EventoService')

router.get('/listado', async (req, res) => {
        let eventos = await EventoService.getAllEventos();
    res.send('Listado de eventos')
})

router.get('/detalle/:id', (req, res) => {
    res.send('Detalle de eventos')
})

module.exports = router