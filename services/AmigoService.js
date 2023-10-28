const Evento = require('../models/Amigo');

exports.getAllEventos = async() => {
    return await Amigo.find()
}

exports.getEventoById = async(id) => {
    return await Amigo.findById(id);
}