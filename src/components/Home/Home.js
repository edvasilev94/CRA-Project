import './Home.css'

const Home = () => {
    return (
    
        <div class="banner">
        <div class="container">
            <h2>Cooking Recepies</h2>
            <p>It is our belief that in order to be most efficient it requires adaptive technology and software our customers can focus on their core business.</p>
        </div>
        <div class="blog" id="blog">
				<div class="container">
					<div class="default-heading">
						<h2>Latest Blogs</h2>
					</div>
					<div class="row">
						<div class="col-md-6 col-sm-6">
							<div class="entry">
								<img class="img-responsive" src="img/blog/1.jpg" alt="Blog" />
								<h3 className="artname"><a href="#">Communicating with you every step of the way</a></h3>
								<span class="author">
									By: David John
								</span>
								<p>We combine continuing education and constant monitoring us with your project details if you are interested to ge of industry trends and innovations to provide the right IT solution at the right time. Contact us with your project details if you are interested to get our Web Solution or Software Development Services.</p>
							</div>
						</div>
						<div class="col-md-6 col-sm-6">
							<div class="entry">
								<img class="img-responsive" src="img/blog/2.jpg" alt="Blog" />
								<h3><a href="#">Communicating with you every step of the way</a></h3>
								<span class="author">
									By: David John
								</span>
								<p>We combine continuing education and constant monitoring us with your project details if you are interested to ge of industry trends and innovations to provide the right IT solution at the right time. Contact us with your project details if you are interested to get our Web Solution or Software Development Services.</p>
							</div>
						</div>
					</div>
					<div class="text-center">
						<a href="#" class="btn btn-default">See More</a>
					</div>
				</div>
			</div>
    </div>
    
        )
};

export default Home;