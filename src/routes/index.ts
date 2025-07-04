// Configurando Rotas
import { Router } from 'express';
// importando controllers
import * as PageController from '../controllers/pageController';
import * as SearchController from '../controllers/searchController';

const router = Router();
 // Primeira Rota de teste 
 //router.get('/', (req, res)=>{
    //res.send('home');
//}); 

// configurando rotas de navegação!
router.get('/', PageController.home);
router.get('/dogs', PageController.dogs);
router.get('/cats', PageController.cats);
router.get('/fishes', PageController.fishes);

router.get('/search', SearchController.search);

export default router;

// rotas prontas