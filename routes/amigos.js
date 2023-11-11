const express = require('express')
const router = express.Router()
const AmigoService =  require('../services/AmigoService')

router.get('/listado', async (req, res) => {
        let amigos = await AmigoService.getAllAmigos();
        res.json({
            'amigos': amigos
        })
})

router.get('/detalle/:id', async (req, res) => {
    let amigos = await AmigoService.getAmigoById(req.params.id);
    res.json({
        'amigos': amigos
    })
})

router.get('/detalle/:id', (req, res) => {
    res.send('Detalle de amigos')
})

router.post('/registrar', async (req, res) => {
    await AmigoService.insertAmigo(req.body);
    res.json({
        'mensaje' : 'Registrado contacto correctamente'
    })
})

module.exports = router