import mongoose from "mongoose";
mongoose.connect('mongodb://localhost:27017/shitfapp')

const datebaseConection = mongoose.connection

datebaseConection.on('connected', () =>{
console.log('Connection DB Correct!')
})
datebaseConection.on('Error', () =>{
    console.log('Connection DB Error!')
})


export default mongoose