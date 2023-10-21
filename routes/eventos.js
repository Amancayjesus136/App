const express = require('express')
const router = express.Router()
const EventoService =  require('../services/EventoService')

router.get('/listado', async (req, res) => {
        let eventos = await EventoService.getAllEventos();
        res.json({
            'eventos': eventos
        })
})

router.get('/detalle/:id', async (req, res) => {
    let eventos = await EventoService.getEventoById(req.params.id);
    res.json({
        'eventos': eventos
    })
})

router.get('/detalle/:id', (req, res) => {
    res.send('Detalle de eventos')
})

module.exports = router