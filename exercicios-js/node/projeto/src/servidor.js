const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancodedados = require('./bancodedados')

app.use(bodyParser.urlencoded({ extended: true }))

//Lista Todos os Produtos
app.get('/produtos', (req, res, next) => {
    res.send(bancodedados.getProdutos()) // Converter para JSON
})

//Lista Produto por ID
app.get('/produtos/:id', (req, res, next) => {
    res.send(bancodedados.getProduto(req.params.id))
}) 

// Salvar um novo produto
app.post('/produtos', (req, res, next) => {
    const produto = bancodedados.salvaProduto({
        nome: req.body.nome,
        preco: req.body.preco 
    })
    res.send(produto) //JSON
})

// Altera um produto
app.put('/produtos/:id', (req, res, next) => {
    const produto = bancodedados.salvaProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco 
    })
    res.send(produto) //JSON
})

//Deleta um produto
app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancodedados.excluirProduto(req.params.id)
    res.send(produto) //JSON
})

app.listen(porta, () => {
    console.log(`Servidor esta executando na porta ${porta}.`)
})


// app.get('/produtos', (req, res, next) => {
//     console.log('Middleware 1...')
//     next()
// })

// Utilizado para qualquer rota chamada.
// app.use((req, res, next) => {
//     res.send({ msg: 'Mensagem para Qualquer Rota Informada!' })
// })