const porta = 3003

const express = require('express')
const app = express()

// app.get('/produtos', (req, res, next) => {
//     console.log('Middleware 1...')
//     next()
// })

// Utilizado para qualquer rota chamada.
// app.use((req, res, next) => {
//     res.send({ msg: 'Mensagem para Qualquer Rota Informada!' })
// })

app.get('/produtos', (req, res, next) => {
    res.send({ nome: 'Notebook', preco: 123.45 }) // Converter para JSON
})

app.listen(porta, () => {
    console.log(`Servidor esta executando na porta ${porta}.`)
})


