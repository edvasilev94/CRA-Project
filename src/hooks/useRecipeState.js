import { useState, useEffect } from "react";

import * as recipeService from "../services/recipesService"

const useRecipeState = (recipeId) => {
    const [recipe, setRecipe] = useState({});

    useEffect(() => {
        recipeService.getOne(recipeId)
            .then(x => {
                setRecipe(x);
            })
    }, [recipeId]);

    return [
        recipe,
        setRecipe
    ]
};

export default useRecipeState;