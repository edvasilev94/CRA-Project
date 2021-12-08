import { request } from './requester';


const baseUrl = 'http://localhost:3030/data';

export const getAll = () => request(`${baseUrl}/recipes`)


export const getOne = (petId) => {
    return fetch(`${baseUrl}/pets/${petId}`)
        .then(res => res.json())
};
