'use strict'

// Criação da class produtoController
function produtoController(){

}

// Definição das funções da classe
produtoController.prototype.post = async (req, res) => { };

produtoController.prototype.put = async (req, res) => { };

produtoController.prototype.get = async (req, res) => { 
    res.status(200).send('Funcionando, Listando os produtos..');
};   

produtoController.prototype.getById = async (req, res) => {
    res.status(200).send(`O id passado foi: ${req.params.id}`)
 }; 
 
produtoController.prototype.delete = async (req, res) => { };

module.exports = produtoController;