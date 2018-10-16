// Lógica que irá verificar se o ambiente que estou rodando o projeto há uma porta configurada, caso não houver ele irá 
// pegar a porta indicada
const variables = {
    Api: {
        port: process.env.port || 3000
    }
}

module.exports = variables;