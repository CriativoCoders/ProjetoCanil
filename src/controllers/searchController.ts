import { Request, Response } from 'express';
// importa primeiro item do menu e o item do model 
import { Pet } from '../models/pets';
import { createMenuObject } from '../helpers/createMenuObject'

export const search = (req: Request, res: Response) => {
    let query: string = req.query.q as string; // Adicionando a pesquisa 

    let list = Pet.getFromName(query); // vai gerar uma lista com os nomes parecidos
    
    res.render('pages/page', {
        menu: createMenuObject(''),
        list,
        query // paguei o query e mandei ele pra página 
    });
}

// controlles prontos 
