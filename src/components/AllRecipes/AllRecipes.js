import { useEffect, useState } from "react";
import RecipeCard from "../RecipeCard/RecipeCard";

import * as recipesService from "../../services/recipesService";


const AllRecipes = () => {

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

	console.log(recipes)

	return (
		<div className="blog" id="blog">
			<div className="container">
				<div className="default-heading">
					<h2>All Recipes</h2>
				</div>
				{recipes.map(x => <RecipeCard key={x._id} recipe={x} />)}
			</div>
		</div>

	)
};

export default AllRecipes;

