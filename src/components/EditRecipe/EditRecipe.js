
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import * as recipesService from '../../services/recipesService';
import { useAuthContext } from '../../contexts/AuthContext';

const EditRecipe = () => {

    const navigate = useNavigate();
    const { user } = useAuthContext();	
    const { recipeId } = useParams();

	const [recipe, setRecipe] = useState([]);
	const [error, setError] = useState({message: null});

	useEffect(() => {
		recipesService.getOne(recipeId)
			.then(x => {
				setRecipe(x);
			})
			.catch(err => {
				console.log(err);
			})
	}, [recipeId]);


    const onSubmitHandler = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);

        let name = formData.get("name");
        let ingredients = formData.get("ingredients");
        let timetocook = formData.get("timetocook");
        let img = formData.get("img");
        let steps = formData.get("steps");



		if(name === "" 
			|| ingredients === ""
			|| timetocook === ""
			|| img ===""
			|| steps === ""){
			setError(state =>({
				...state,
				message: "All fileds are required!"
			}))
		}else{
			recipesService.edit({
				name,
				ingredients: ingredients.split(","),
				timetocook,
				img,
				steps: steps.split(",")
			}, user.accessToken, recipe._id)
            .then(x => {
				navigate(`/recipe/details/${recipe._id}`);
            })
			}
		}

		let errorContainer = (<div className="errorContainer">
								<p>{error.message}</p>
	 						 </div>)
		
		
    return (
        <div className="banner">
				<div className="container">
					<div className="register-area">
						<h3>Edit Recipe</h3>
						<form role="form" id="register-form" onSubmit={onSubmitHandler}>
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
							{ error.message
                        			? errorContainer
                       			    : null
                  		    }
							<button type="submit" className="btn btn-default">Edit</button>&nbsp;
						</form>
					</div>
				</div>
			</div>
    )

        
};

export default EditRecipe;