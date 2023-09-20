require('dotenv').config()
//usamos para definir endpoints
//para receber reuisições HTTP e retornar respostas HTTP 
const express = require('express');
//usamos para enviar requisições HTTP para outros serviços (APIs) 
const axios = require('axios');
const app = express();

//middleware (função que fica no meio do caminho da requisição e da resposta) 
//middleware
app.use(express.json())

/*
    {
        "1": {"id": "1", "texto": "Fazer café"},
        "2": {"id": "2", "texto": "Ver filme"}
    }
*/
const lembretes = {}
let id = 1

//endpoints abaixo (GET, POST)
//GET /lembretes 
app.get('/lembretes', (req, res) => {
    res.send(lembretes)
})

//POST /lembretes {texto: "Fazer café"} 
app.post('/lembretes', (req, res) => {
    const texto = req.body.texto
    const lembrete = {id, texto: texto}
    lembretes[id] = lembrete
    id++
    // HTTP 201 Created
    res.status(201).send(lembretes)
})

app.listen(process.env.PORT, () => console.log(`Lembretes: ${process.env.PORT}`)) 
