import { Link } from 'react-router-dom'

const HomePage = () => {

    return (
        <div className="blog" id="blog">
				<div className="container">
					<div className="default-heading">
						<h2>Latest Blogs</h2>
					</div>
					<div className="row">
						<div className="col-md-6 col-sm-6">
							<div className="entry">
								<img className="img-responsive" src="img/blog/1.jpg" alt="Blog" />
								<h3><Link to="/recipe/details">Communicating with you every step of the way,</Link></h3>
								<span className="meta">
									July 02, 2014 | Tag: Technology | By: David John
								</span>
							</div>
						</div>
						<div className="col-md-6 col-sm-6">
							<div className="entry">
								<img className="img-responsive" src="img/blog/2.jpg" alt="Blog" />
								<h3><Link to="/recipe/details">Communicating with you every step of the way,</Link></h3>
								<span className="meta">
									July 02, 2014 | Tag: Technology | By: David John
								</span>
							</div>
						</div>
					</div>
					<div className="text-center">
						<Link to="/recipes" className="btn btn-default">See More</Link>
					</div>
				</div>
			</div>
         )
};

export default HomePage;

