const express = require('express')
const router = express.Router()
const EventoService =  require('../services/EventoService')

/*<-------------LISTADO-------------->*/
router.get('/listado', async (req, res) => {
        let eventos = await EventoService.getAllEventos();
        res.json({
            'eventos': eventos
        })
})

/*<-------------DETALLE-------------->*/
router.get('/detalle/:id', async (req, res) => {
    let eventos = await EventoService.getEventoById(req.params.id);
    res.json({
        'eventos': eventos
    })
})

router.get('/detalle/:id', (req, res) => {
    res.send('Detalle de eventos')
})

/*<-------------REGISTRAR-------------->*/
router.post('/registrar', async (req, res) => {
    await EventoService.insertEvento(req.body);
    res.json({
        'mensaje' : 'Registrado correctamente'
    })
})

module.exports = router