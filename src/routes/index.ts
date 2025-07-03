// Configurando Rotas
import { Router } from 'express';

const router = Router();
 // Primeira Rota
router.get('/', (req, res)=>{
    res.send('home');
});

export default router;