// A FUNÇÃO DO CONTROLLER E USAR O MODEL PARA PEGAR OS DADOS E ORGANIZAR AS COISAS E ENVIAR OS DADOS PRO VIEW 
// PAPEL DE CONTROLADORM, CONTROLANDO OQUE ESTA ACONTECENDO
import { Request, Response } from 'express';
import { createMenuObject } from '../helpers/createMenuObject'; // usando essa função para criar o objeto de menu
// MODEL DENTRO DO CONTROLLER
import { Pet } from '../models/pets';

export const home = (req: Request, res: Response) => {
    let list = Pet.getAll(); // Arrey com meus pets
    // res.send('home no controller!');
    
    res.render('pages/page', {
        menu: createMenuObject('all'), // usando a função createMenuObject para criar o objeto de menu,
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        },
        list
    });
}
export const dogs = (req: Request, res: Response) => {
    let list = Pet.getFromType('dog')

    res.render('pages/page', {
        menu: createMenuObject('dog'),
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        },
        list
    });
}
export const cats = (req: Request, res: Response) => {
    let list = Pet.getFromType('cat')

    res.render('pages/page', {
        menu: createMenuObject('cat'),
        banner: {
            title: 'cats',
            background: 'banner_cat.jpg'
        },
        list
    });
}
export const fishes = (req: Request, res: Response) => {
    let list = Pet.getFromType('fish')
    res.render('pages/page', {
        menu: createMenuObject('fish'),
        banner: {
            title: 'fishes',
            background: 'banner_fish.jpg'
        },
        list
    });
}

// controlles prontos 
