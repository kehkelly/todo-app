const express = require("express")
const exphbs = require("express-hanlebars")
const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/', (requisicao, resposta) => {
    resposta.send("Olá mundo!")
})
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000!")
})
