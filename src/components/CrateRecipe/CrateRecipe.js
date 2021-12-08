import { useAuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import * as recipeService from "../../services/recipesService"

const CrateRecipe = () => {

	const { user } = useAuthContext();
    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);

        let name = formData.get("name");
        let ingredients = formData.get("ingredients");
        let timetocook = formData.get("timetocook");
        let img = formData.get("img");
        let steps = formData.get("steps");

		// ingredients
		// .toString()
		// .split(", ")
		// steps
		// .toString()
		// .split(", ")

        recipeService.create({
            name,
            ingredients: ingredients.split(", "),
            timetocook,
            img,
			steps: steps.split(", ")
        }, user.accessToken)
            .then(x => {
                navigate("/recipes");
            })
    }


    return (
        <div className="banner">
				<div className="container">
					<div className="register-area">
						<h3>Crate Recipe</h3>
						<form role="form" id="register-form" onSubmit={onSubmitHandler}>
							<div className="form-group">
								<input type="text" className="form-control" name="name" id="name" placeholder="Recipe Name" />
							</div>
							<div className="form-group">
							</div>
							<div className="form-group">
								<input type="text" className="form-control" name="ingredients" id="ingredients" placeholder="Ingredients" />
							</div>
							<div className="form-group">
								<input type="text" className="form-control" name="timetocook" id="timetocook" placeholder="Time for cooking in minutes" />
							</div>
							<div className="form-group">
								<input type="text" className="form-control" name="img" id="img" placeholder="Image URL" />
							</div>
							<div className="form-group">
								<input type="text" className="form-control" name="steps" id="steps" placeholder="Instructions" />
							</div>
							<button type="submit" className="btn btn-default">Crate</button>&nbsp;
						</form>
					</div>
				</div>
			</div>
    )

        
};

export default CrateRecipe;