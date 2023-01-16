import allCursos from "../data/cursos.json";

export const requestAllCursos = () => {
    return new Promise ( (resolve) => {
        setTimeout( () => {
            resolve(allCursos);
        }, 2000);
    }); 
}

export const requestCursosById = (id) => {
    return new Promise ((resolve, reject) => {
        setTimeout( ()=>{
            const cursos = allCursos.find(cursos => cursos.id === id);

            if (cursos) {
                resolve(cursos);
            }else {
                reject({
                    error: 'No se encontro el curso que buscabas'
                })
            }
        }, 2000);
    });
}