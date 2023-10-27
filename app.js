const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000

var cors = require('cors');
app.use(cors({origin: 'http://localhost:8100'}))

mongoose.connect("mongodb://0.0.0.0:27017/llego_bd")
const database = mongoose.connection
database.on('error',(error) => {
    console.log('hubo un error', error)
})

database.once('connected', () => {
    console.log('base de datos conectada')
})

const eventos = require ('./routes/eventos')
app.use('/eventos', eventos)

app.listen(port, () =>{
    console.log('Ingresa a localhost:3000')
})