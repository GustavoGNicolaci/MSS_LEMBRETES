require('dotenv').config()
const express = require('express');
const axios = require('axios');

//const PORT = process.env.PORT
const { PORT } = process.env

const app = express();

app.use(express.json())

//GET /lembretes/1/observacoes
app.get('/lembretes/:id/observacoes', (req, res) => {
    res.send()
})

//POST /lembretes/1/observacoes {texto: "Fazer café"} 
app.post('/lembretes/:id/observacoes', (req, res) => {

})

app.listen(PORT, () => {
    console(`Observações: ${PORT}`)
})