import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index';

dotenv.config();

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '../public')));

//Rotas
server.use(mainRoutes);

// Pagina de não encontrado
server.use((req, res)=>{
    // res.send('página não encontrada!');
    res.render('pages/404');
});

// Pré-configurando servidor
server.listen(process.env.PORT);

// servidor configurado 