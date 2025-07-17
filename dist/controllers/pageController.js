"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fishes = exports.cats = exports.dogs = exports.home = void 0;
const createMenuObject_1 = require("../helpers/createMenuObject"); // usando essa função para criar o objeto de menu
// MODEL DENTRO DO CONTROLLER
const pets_1 = require("../models/pets");
const home = (req, res) => {
    let list = pets_1.Pet.getAll(); // Arrey com meus pets
    // res.send('home no controller!');
    res.render('pages/page', {
        menu: (0, createMenuObject_1.createMenuObject)('all'), // usando a função createMenuObject para criar o objeto de menu,
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        },
        list
    });
};
exports.home = home;
const dogs = (req, res) => {
    let list = pets_1.Pet.getFromType('dog');
    res.render('pages/page', {
        menu: (0, createMenuObject_1.createMenuObject)('dog'),
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        },
        list
    });
};
exports.dogs = dogs;
const cats = (req, res) => {
    let list = pets_1.Pet.getFromType('cat');
    res.render('pages/page', {
        menu: (0, createMenuObject_1.createMenuObject)('cat'),
        banner: {
            title: 'cats',
            background: 'banner_cat.jpg'
        },
        list
    });
};
exports.cats = cats;
const fishes = (req, res) => {
    let list = pets_1.Pet.getFromType('fish');
    res.render('pages/page', {
        menu: (0, createMenuObject_1.createMenuObject)('fish'),
        banner: {
            title: 'fishes',
            background: 'banner_fish.jpg'
        },
        list
    });
};
exports.fishes = fishes;
// controlles prontos 
