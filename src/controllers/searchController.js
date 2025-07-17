"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
// importa primeiro item do menu e o item do model 
const pets_1 = require("../models/pets");
const createMenuObject_1 = require("../helpers/createMenuObject");
const search = (req, res) => {
    let query = req.query.q; // Adicionando a pesquisa 
    // ############################################################################### //
    //varificação caso não tenha o query, o motivo desta verificação e porque quando  //
    //eu digitava na barra de pesquisa vazia ele buscava todos os animais, e com essa//
    // verificação ele volta para a pagina inicial                                  //
    if (!query) {
        res.redirect('/');
        return;
    }
    // ########################################################################### //
    let list = pets_1.Pet.getFromName(query); // vai gerar uma lista com os nomes parecidos
    res.render('pages/page', {
        menu: (0, createMenuObject_1.createMenuObject)(''),
        list,
        query // paguei o query e mandei ele pra página 
    });
};
exports.search = search;
// controlles prontos 
