import { Link } from 'react-router-dom'



const RecipeCard = ({
	recipe
}) => {

	console.log(recipe.timetocook)

	return (
		<div className="col-md-6 col-sm-6">
			<div className="entry">
				<div className="row">
					<div className="col-md-12 col-sm-12">
						<div className="entry">
							<img className="img-responsive" src={recipe.img} />
							<h3><Link to={`/recipe/details/${recipe._id}`}>{recipe.name}</Link></h3>
							<span className="meta">
								Time for cooking: {recipe.timetocook} mins 
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
};

export default RecipeCard;

