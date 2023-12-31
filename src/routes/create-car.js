const express = require('express')
const database = require('../database')

const route = express()

route.post('/car', (req, res) =>{
    //obtem os dados do body da requisição
    const car = req.body
    
    //adiciona o carro no array do database
    database.push(car)

    //retorna a resposta do status 201 e o carro cadastrado
    return res.status(201).json(car)
})

module.exports = route