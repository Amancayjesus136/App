const Amigo = require('../models/Amigo');

exports.getAllAmigos = async() => {
    return await Amigo.find()
}

exports.getAmigoById = async(id) => {
    return await Amigo.findById(id);
}