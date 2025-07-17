"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMenuObject = void 0;
const createMenuObject = (activeMenu) => {
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
};
exports.createMenuObject = createMenuObject;
// vou emportar essa função no controller e usar ela para criar o objeto de menu
// export const home = (req: Request, res: Response) => {
//     res.render('pages/page', {
//         menu: createMenuObject('all'), //         banner: {
//             title: 'Todos os animais',}
//         banner: {
//             title: 'Todos os animais',   
