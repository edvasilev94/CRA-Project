
import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import * as recipesService from '../../services/recipesService';
import { useAuthContext } from '../../contexts/AuthContext';

const EditRecipe = () => {

    const navigate = useNavigate();
    const { user } = useAuthContext();	
    const { recipeId } = useParams();

	const [recipe, setRecipe] = useState([]);

	useEffect(() => {
		recipesService.getOne(recipeId)
			.then(x => {
				setRecipe(x);
			})
			.catch(err => {
				console.log(err);
			})
	}, [recipeId]);

    return (
        <div className="banner">
				<div className="container">
					<div className="register-area">
						<h3>Edit Recipe</h3>
						<form role="form" id="register-form">
							<div className="form-group">
								<input type="text" className="form-control" name="name" id="name" defaultValue={recipe.name} placeholder="Recipe Name" />
							</div>
							<div className="form-group">
							</div>
							<div className="form-group">
								<input type="text" className="form-control" name="ingredients" id="ingredients" defaultValue={recipe.ingredients} placeholder="Ingredients" />
							</div>
							<div className="form-group">
								<input type="text" className="form-control" name="timetocook" id="timetocook" defaultValue={recipe.timetocook} placeholder="Time for cooking in minutes" />
							</div>
							<div className="form-group">
								<input type="text" className="form-control" name="img" id="img" defaultValue={recipe.img} placeholder="Image URL" />
							</div>
							<div className="form-group">
								<input type="text" className="form-control" name="steps" id="steps" defaultValue={recipe.steps} placeholder="Instructions" />
							</div>
							<button type="submit" className="btn btn-default">Edit</button>&nbsp;
						</form>
					</div>
				</div>
			</div>
    )

        
};

export default EditRecipe;