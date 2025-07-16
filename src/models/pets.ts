// um model é uma representação de um objeto do banco de dados, que pode ser usado para criar, ler, atualizar e excluir dados no banco de dados
// no meu caso o model pet vai ser usado para filrar os pets por tipo, e filtrar os pets por nome.
type PetType = 'dog' | 'cat' | 'fish';

type Pet = {
    type: PetType,
    image: string,
    name: string,
    color: string,
    sex: 'Masculino' | 'Feminino'

}

// aqui vou criar uma constante que vai ter um array de objetos de dados dos pets
const data: Pet[] = [
    { 
        type: 'dog',
        image: 'pastor-alemao.jpg', 
        name: 'Pastor-alemão', 
        color: 'Amarelo e Preto', 
        sex: 'Masculino' 
    },
    {
        type: 'dog', 
        image: 'labrador.jpg', 
        name: 'Labrador-retriever', 
        color: 'Branco', 
        sex: 'Masculino'
    },
    { 
        type: 'dog', 
        image: 'zwergspitz.jpg', 
        name: 'Zwergspitz', 
        color: 'Amarelo', 
        sex: 'Feminino' 
    },
    { 
        type: 'dog',
        image: 'husky.jpg', 
        name: 'Husky Siberiano', 
        color: 'Branco e Preto', 
        sex: 'Masculino' 
    },
    { 
        type: 'dog', 
        image: 'golden.jpg', 
        name: 'Golden Retriever', 
        color: 'Amarelo', 
        sex: 'Masculino' 
    },
    { 
        type: 'dog', 
        image: 'poodle.jpg', 
        name: 'Poodle', 
        color: 'Branco', 
        sex: 'Feminino' 
    },
    { 
        type: 'dog', 
        image: 'bulldog.jpg', 
        name: 'Bulldog', 
        color: 'Branco e Amarelo', 
        sex: 'Masculino' 
    },

    { 
        type: 'cat', 
        image: 'persa.jpg', 
        name: 'Persa', 
        color: 'Amarelo', 
        sex: 'Masculino' 
    },
    { 
        type: 'cat', 
        image: 'mainecoon.jpg', 
        name: 'Maine Coon', 
        color: 'Preto e Branco', 
        sex: 'Masculino' 
    },
    { 
        type: 'cat', 
        image: 'bengal.jpg', 
        name: 'Bengal', 
        color: 'Branco, Preto e Amarelo', 
        sex: 'Feminino'
    },
    { 
        type: 'cat', 
        image: 'siames.jpg', 
        name: 'Siamês', 
        color: 'Amarelo e Preto', 
        sex: 'Masculino' 
    },
    { 
        type: 'cat', 
        image: 'sphynx.jpg', 
        name: 'Sphynx', 
        color: 'Branco', 
        sex: 'Masculino' 
    },

    { 
        type: 'fish', 
        image: 'neon.jpg', 
        name: 'Tetra Neon', 
        color: 'Vermelho e Azul', 
        sex: 'Masculino' 
    },
    { 
        type: 'fish', 
        image: 'matogrosso.jpg', 
        name: 'Mato Grosso', 
        color: 'Laranja', 
        sex: 'Masculino' 
    },
    { 
        type: 'fish', 
        image: 'limpavidro.jpg', 
        name: 'Limpa Vidro', 
        color: 'Verde e Branco', 
        sex: 'Masculino' 
    },
    {
        type: 'fish', 
        image: 'tanictis.jpg', 
        name: 'Tanictis', 
        color: 'Vermelho', 
        sex: 'Masculino' 
    },
    { 
        type: 'fish', 
        image: 'acara.jpg', 
        name: 'Acará Bandeira', 
        color: 'Preto', 
        sex: 'Masculino' 
    },
];
// aqui vou criar uma função que vai retorna todos os pets 
export const Pet = {
    getAll: (): Pet[] => {
        return data;
    },
    getFromType: (type: PetType): Pet[] => {
        return data.filter(item => item.type === type);
    },
    getFromName: (name: string): Pet[] => {
        return data.filter(item => {
            if(item.name.indexOf(name) > -1) {
                return true;
            }else {
                return false;
            } // caso o usuario digite apenas bul, ele vai retornar todos os pets que tem o nome bul ou que comecem com bul.
        }); // aqui vou fazer a filtragem dos pets pelo nome
        
    }
    // esse filtro vai gerar um novo array 
};