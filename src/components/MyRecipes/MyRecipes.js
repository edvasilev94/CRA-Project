import { useEffect, useState } from "react";
import RecipeCard from "../RecipeCard/RecipeCard";
import { useAuthContext } from "../../contexts/AuthContext";


import * as recipesService from "../../services/recipesService";


const MyRecipes = () => {

    const { user } = useAuthContext();
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		recipesService.getAll()
			.then(result => {
				console.log(result);
				setRecipes(result);
			})
			.catch(err => {
				console.log(err);
			})
	}, []);

	return (
		<div className="blog" id="blog">
			<div className="container">
				<div className="default-heading">
					<h2>My Recipes</h2>
				</div>
				{recipes
                .filter(x => x._ownerId == user._id)
                .map(x => <RecipeCard key={x._id} recipe={x} />)}
			</div>
		</div>

	)
};

export default MyRecipes;

