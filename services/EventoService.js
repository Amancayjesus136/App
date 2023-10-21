const Evento = require('../models/Evento');

exports.getAllEventos = async() => {
    return await Evento.find
}

exports.getEventoById = async(id) => {
    return await Evento.findById(id);
}