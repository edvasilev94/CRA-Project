import { Link } from 'react-router-dom'



const RecipeCard = () => {

	

    return (
        
					<div className="row">
						<div className="col-md-6 col-sm-6">
							<div className="entry">
								<img className="img-responsive" src="img/blog/1.jpg" alt="Blog" />
								<h3><Link to="#">Communicating with you every step of the way,</Link></h3>
								<span className="meta">
									July 02, 2014 | Tag: Technology | By: David John
								</span>
							</div>
						</div>
					</div>
         )
};

export default RecipeCard;

