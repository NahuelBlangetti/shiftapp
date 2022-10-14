const express = require('express');
const router = express.Router()

const mongoose = require('mongoose');
const eschema = mongoose.Schema;

const turnosReserve = new eschema ({
    name: String,
    day: Number,
    hour: Number,
    idturn: String
})

const ModeloTurnos = mongoose.Model('turnos', turnosReserve)