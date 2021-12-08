import { request } from "./requester";


const baseUrl = "http://localhost:3030/data";

export const getAll = () => request(`${baseUrl}/recipes`)


export const getOne = (recipeId) => {
    return fetch(`${baseUrl}/recipes/${recipeId}`)
        .then(res => res.json())
};


export const create = async (recipeDetails, token) => {
    let response = await fetch(`${baseUrl}/recipes`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "X-Authorization": token,
        },
        body: JSON.stringify({...recipeDetails, likes: []})
    });

    let result = await response.json();

    return result;
};


