const mongoose = require('mongoose')
const { noSql } = require('../.env')

const url = noSql

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('\x1b[32m%s\x1b[0m', 'Conectado ao MongoDB!'))
    .catch(err => {
        const msg = 'ERRO! Não foi possível conectar com o MongoDB!'
        console.log('\x1b[41m%s\x1b[37m', msg, err, '\x1b[0m')
    })