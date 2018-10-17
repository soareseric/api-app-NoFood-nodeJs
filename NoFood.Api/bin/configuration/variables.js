// Lógica que irá verificar se o ambiente que estou rodando o projeto há uma porta configurada, caso não houver ele irá 
// pegar a porta indicada
const variables = {
    Api: {
        port: process.env.port || 3000
    },
    Database: {
        connection: process.env.connection || 'mongodb://admin:nofood123456@ds135003.mlab.com:35003/nofood'
    }
}

module.exports = variables;