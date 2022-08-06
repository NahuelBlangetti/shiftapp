const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/shitfapp')

const datebaseConection = mongoose.connection

datebaseConection.on('connected', () =>{
console.log('Connection Correct!')
})
datebaseConection.on('Error', () =>{
    console.log('Connection Error!')
})


module.exports = mongoose