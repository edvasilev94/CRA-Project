import { Link } from 'react-router-dom'



const RecipeCard = ({
	recipe
}) => {



	return (
		<div className="col-md-6 col-sm-6">
			<div className="entry">
				<div className="row">
					<div className="col-md-12 col-sm-12">
						<div className="entry">
							<img className="img-responsive" src={recipe.img} />
							<h3><Link to="/recipe/details">{recipe.name}</Link></h3>
							<span className="meta">
								Time for cooking: 12 mins 
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
};

export default RecipeCard;

