import { Link } from 'react-router-dom'



const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-default" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        {/* <a className="navbar-brand" Link to="/"><img className="img-responsive" src="img/home.jpeg" alt="Logo" /></a> */}
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to="/register">Signup</Link></li>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/crate">Crate Recipe</Link></li>
                            <li><Link to="/myrecipes">My Recipes</Link></li>
                            <li><Link to="/recipes">All Recipes</Link></li>
                            <li><Link to="/logout">Logout</Link></li>
                        </ul>
                    </div>
				</div>
            </nav>
        </header>
    )
};

export default Header;