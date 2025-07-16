// Aqui estou criando uma função que crie um objeto de menu para ser usado no front-end
// essa função recebe um parametro que é o menu ativo e retorna um objeto com as propriedades do menu
type MenuOptions = '' | 'all' | 'dog' | 'cat' | 'fish';
export const createMenuObject = (activeMenu: MenuOptions) => {
    let returnObject = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    };

    if (activeMenu !== '') {
        returnObject[activeMenu] = true;
    }
    
    return returnObject;
}

// vou emportar essa função no controller e usar ela para criar o objeto de menu
// export const home = (req: Request, res: Response) => {
//     res.render('pages/page', {
//         menu: createMenuObject('all'), //         banner: {
//             title: 'Todos os animais',}

//         banner: {
//             title: 'Todos os animais',   