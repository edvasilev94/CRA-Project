import "./RecipeDetails.css"
import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';


import * as recipesService from '../../services/recipesService';
import { useAuthContext } from '../../contexts/AuthContext';
import useRecpeState from "../../hooks/useRecipeState"

const RecipeDetail = () => {

	const navigate = useNavigate();
    const { user } = useAuthContext();	
    const { recipeId } = useParams();

	const [recipe, setRecipe] = useState([]);

	useEffect(() => {
		recipesService.getOne(recipeId)
			.then(x => {
				console.log(x);
				setRecipe(x);
			})
			.catch(err => {
				console.log(err);
			})
	}, [recipeId]);


	const deleteHandler = (e) => {
		e.preventDefault();

		recipesService.del(recipeId, user.accessToken)
			.then(x => {
				navigate("/recipes")
			})
	}

	const likeButtonHandler = () => {
        if (recipe.likes.includes(user._id)) {
            // TODO: add notification
            console.log('User already liked');
            return;
        }

        let likes = [...recipe.likes, user._id];
        let likedRecipe = {...recipe, likes};


        recipesService.wtf(recipe._id, likedRecipe, user.accessToken)
            .then((resData) => {
                console.log(resData);
                setRecipe(state => ({
                    ...state,
                    likes,
                }));
            })

    };



	let ownerButtons = (
			<div className="col-md-8 col-sm-8">
				<Link to={`/recipe/edit/${recipe._id}`} className="btn btn-default edit">Edit</Link>
				<Link to={`/recipe/delete/${recipe._id}`} className="btn btn-default delete"  onClick={deleteHandler} >Delete</Link>
			</div>
	)

    return (
			
				<div className="container">
					<div className="row">
						<div className="col-md-6 col-sm-6">
							<div className="entry">
								<img className="img-responsive" src={recipe.img} alt="Blog" />
								<h3>{recipe.name}</h3>
								
							</div>
                        </div>
						<div className="col-md-6 col-sm-6">
							<h4> Ingredients </h4>
							<ul>
								{
								recipe.length <= 0
								? null
								: recipe.ingredients.map(x => <li>{x}</li>)
								}
							</ul>
						</div>
						<div className="col-md-6 col-sm-6">
						<h4> Steps </h4>
							<ol>
							{
								recipe.length <= 0
								? null
								: recipe.steps.map(x => <li>{x}</li>)
							}
							</ol>
						</div>
						<h1>
							Likes: {recipe.likes?.length}
						</h1>

						{   user.email && user._id !== recipe._ownerId
							?<h2><button onClick={likeButtonHandler}><img className="img-responsive" src="/img/like.png" alt="Like" /></button></h2>
							: null
						}

						{ user._id === recipe._ownerId
							? ownerButtons
							: null
						}	
                    </div>	
				</div>	
		
					
         )
};

export default RecipeDetail;

