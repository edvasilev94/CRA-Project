import { Link } from 'react-router-dom'

import { useAuthContext } from '../../contexts/AuthContext';



const Header = () => {

    const { user } = useAuthContext();

    let userNav = (
                         <ul className="nav navbar-nav navbar-right">
                            <li><Link to="/">Hello, {user.username}</Link></li>
                            <li><Link to="/crate">Create Recipe</Link></li>
                            <li><Link to="/myrecipes">My Recipes</Link></li>
                            <li><Link to="/recipes">All Recipes</Link></li>
                            <li><Link to="/logout">Logout</Link></li>
                        </ul>
    )

    let guestNav = (
                         <ul className="nav navbar-nav navbar-right">
                            <li><Link to="/register">Signup</Link></li>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/recipes">All Recipes</Link></li>
                        </ul>
    )
    
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
                        <Link to="/" className="navbar-brand"><img className="img-responsive" src="img/blabla.png" alt="Home" /></Link>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    {user.email
                        ? userNav
                        : guestNav
                    }
                    </div>
				</div>
            </nav>
        </header>
    )
};

export default Header;