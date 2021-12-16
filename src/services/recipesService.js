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


export const edit = async (recipeDetails, token, recipeId) => {
    let response = await fetch(`${baseUrl}/recipes/${recipeId}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json",
            "X-Authorization": token,
        },
        body: JSON.stringify({...recipeDetails, likes: []})
    });

    let result = await response.json();

    return result;
};

export const del = (recipeId, token) => {
    return fetch(`${baseUrl}/recipes/${recipeId}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': token
        }
    }).then(res => res.json());
};



export const wtf = (recipeId, recipe, token) => {
    return fetch(`${baseUrl}/recipes/${recipeId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(recipe)
    }).then(res => res.json());
};


export const like = async (userId, recipeId, token) =>{
    let response =  await fetch(`${baseUrl}/likes`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "X-Authorization": token,
        },
        body: JSON.stringify({userId, recipeId})

    });
    let result = await response.json();

    return result;
}


export const likesCount = (recipeId) =>{

    const query = encodeURIComponent(`recipe="${recipeId}"`);

    return request(`${baseUrl}/likes?select=userId&where=${query}`)
        .then(res => res.length);
}