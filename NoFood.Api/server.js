// Boa prática começar utilizando o use strict quando for trabalhar com minificação
'use strict' 

const app = require('../NoFood.Api/bin/express');
const variables = require('../NoFood.Api/bin/configuration/variables');

// indica que o app será escutado na porta indicada e irá mostrar a mensagem atribuida tb
app.listen(variables.Api.port, ()=> {
    console.info(`Api inicializada com sucesso na porta ${variables.Api.port}`);
});