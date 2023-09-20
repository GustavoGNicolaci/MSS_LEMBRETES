require('dotenv').config()
//usamos para definir endpoints
//para receber reuisições HTTP
const express = require('express');
//usamos para enviar requisições HTTP
const axios = require('axios');
const app = express();

//middleware (função que fica no meio do caminho)
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

//endpoints abaixo
//GET /lembretes
app.get('/lembretes', (req, res) => {
    res.send(lembretes)
})

//POST /lembretes {texto: "Fazer café"} 
app.post('/lembretes', (req, res) => {
    const texto = req.body.texto
    lembretes[id] = {id: texto}
    id++
})

app.listen(process.env.PORT, () => console.log(`Lembretes: ${process.env.PORT}`))
