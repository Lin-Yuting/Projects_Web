import {heroes} from './data/hero.js'

export function Third(){
    // Importar un archivo
    console.log(heroes);
    const getHeroeById = (id) => heroes.find ( (heroe) => heroe.id === id);
    console.log(getHeroeById(2));
    const getHeroeByEmpresa = (empresa) => heroes.filter( (heroe) => heroe.owner === empresa);
    console.log(getHeroeByEmpresa('Marvel'));
}