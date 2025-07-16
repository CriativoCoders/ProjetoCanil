import { Request, Response } from 'express';
import { createMenuObject } from '../helpers/createMenuObject'; // usando essa função para criar o objeto de menu

export const home = (req: Request, res: Response) => {
    // res.send('home no controller!');
    
    res.render('pages/page', {
        menu: createMenuObject('all'), // usando a função createMenuObject para criar o objeto de menu,
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg',
        }
    });
}
export const dogs = (req: Request, res: Response) => {

    res.render('pages/page', {
        menu: createMenuObject('dog'),
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg',
        }
    });
}
export const cats = (req: Request, res: Response) => {

    res.render('pages/page', {
        menu: createMenuObject('cat'),
        banner: {
            title: 'cats',
            background: 'banner_cat.jpg',
        }
    });
}
export const fishes = (req: Request, res: Response) => {

    res.render('pages/page', {
        menu: createMenuObject('fish'),
        banner: {
            title: 'fishes',
            background: 'banner_fish.jpg',
        }
    });
}


// controlles prontos 
