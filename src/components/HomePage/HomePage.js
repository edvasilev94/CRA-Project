import { useEffect, useState } from "react";
import RecipeCard from "../RecipeCard/RecipeCard";

import * as recipesService from '../../services/recipesService'

import { Link } from 'react-router-dom'

const HomePage = () => {

	let [recipes, setRecipes] = useState([]);

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

	recipes = recipes.slice(-2)

	return (
		<div className="blog" id="blog">
			<div className="container">
				<div className="default-heading">
					<h2>Latest Recipes</h2>
				</div>
					{recipes.map(x => <RecipeCard key={x._id} recipe={x} />)}
				</div>
				<div className="text-center">
					<Link to="/recipes" className="btn btn-default">See More</Link>
			</div>
		</div>
	)
};

export default HomePage;

