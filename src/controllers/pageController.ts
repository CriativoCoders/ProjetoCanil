import { Request, Response } from 'express';

export const home = (req: Request, res: Response) => {
    // res.send('home no controller!');
    
    res.render('pages/page', {
        menu: {
            all: true,
            dog: false,
            cat: false,
            fish: false
        },
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg',
        }
    });
}
export const dogs = (req: Request, res: Response) => {

    res.render('pages/page', {
        menu: {
            all: false,
            dog: true,
            cat: false,
            fish: false
        },
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg',
        }
    });
}
export const cats = (req: Request, res: Response) => {

    res.render('pages/page', {
        menu: {
            all: false,
            dog: false,
            cat: true,
            fish: false
        },
        banner: {
            title: 'cats',
            background: 'banner_cat.jpg',
        }
    });
}
export const fishes = (req: Request, res: Response) => {

    res.render('pages/page', {
        menu: {
            all: false,
            dog: false,
            cat: false,
            fish: true
        },
        banner: {
            title: 'fishes',
            background: 'banner_fish.jpg',
        }
    });
}


// controlles prontos 
