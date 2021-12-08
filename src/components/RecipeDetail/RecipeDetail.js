

const RecipeDetail = ({
	recipe
}) => {


    return (
       
					<div className="row">
						<div className="col-md-6 col-sm-6">
							<div className="entry">
								<img className="img-responsive" src={recipe.img} alt="Blog" />
								<h3>{recipe.name}</h3>
								<span className="meta">
									{recipe.ingredients}
								</span>
								<p>{recipe.steps}</p>
							</div>
                        </div>
                    </div>	
         )
};

export default RecipeDetail;

