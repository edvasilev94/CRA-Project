const url = 'http://localhost:3030/jsonstore/cookbook'


export const getAll = () => {


    return fetch(url)
        .then(res => res.json())
        // .then(pets => pets.map(x => ({...x, likes: Number(x.likes)})))
        .then(console.log('OKAY'))
        .catch(error => console.log(error));
};