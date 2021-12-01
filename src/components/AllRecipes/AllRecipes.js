import { Link } from 'react-router-dom'

import * as recipesService from '../../services/recipesService'


const AllRecipes = () => {

	

    return (
        <div className="blog" id="blog">
				<div className="container">
					<div className="default-heading">
						<h2>All Recipes</h2>
					</div>
					<div className="row">
						<div className="col-md-6 col-sm-6">
							<div className="entry">
								<img className="img-responsive" src="img/blog/1.jpg" alt="Blog" />
								<h3><Link to="#">Communicating with you every step of the way,</Link></h3>
								<span className="meta">
									July 02, 2014 | Tag: Technology | By: David John
								</span>
								<p>We combine continuing education and constant monitoring us with your project details if you are interested to ge of industry trends and innovations to provide the right IT solution at the right time. Contact us with your project details if you are interested to get our Web Solution or Software Development Services.</p>
							</div>
						</div>
						<div className="col-md-6 col-sm-6">
							<div className="entry">
								<img className="img-responsive" src="img/blog/2.jpg" alt="Blog" />
								<h3><Link to="#">Communicating with you every step of the way,</Link></h3>
								<span className="meta">
									July 02, 2014 | Tag: Technology | By: David John
								</span>
								<p>We combine continuing education and constant monitoring us with your project details if you are interested to ge of industry trends and innovations to provide the right IT solution at the right time. Contact us with your project details if you are interested to get our Web Solution or Software Development Services.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
         )
};

export default AllRecipes;

