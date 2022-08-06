const express = require('express')
const app = express()
/* Conection Import MongoDB */
const archivoBD = require('./datebase')

//Config Server
app.listen(5000, function() {
    console.log('Server Run in Port: 5000')
})