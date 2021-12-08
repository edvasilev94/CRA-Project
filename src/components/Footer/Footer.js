import { Link } from 'react-router-dom'
import { useAuthContext } from '../../contexts/AuthContext';


const Footer = () => {

    const { user } = useAuthContext();

    let guestFooter = (
        <p><Link to="/recipes">All Recepies </Link>| <Link to="/">Home</Link></p>
    )

    let userFooter = (
        <p><Link to="/myrecipes">My Recepies</Link> | <Link to="/recipes">All Recepies </Link>| <Link to="/">Home</Link></p>
    )
    return (
        <footer>
        <div className="container">
                     {user.email
                        ? userFooter
                        : guestFooter
                    }
            {/* <div className="social">
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-dribbble"></i></a>
                <a href="#"><i className="fa fa-linkedin"></i></a>
                <a href="#"><i className="fa fa-google-plus"></i></a>
            </div> */}
            <p className="copy-right">Copyright &copy; 2021 <a href="https://softuni.bg/">SoftUni</a> | Designed By : <a href="https://github.com/edvasilev94">Encho Vasilev</a>, All rights reserved. </p>
        </div>
    </footer>
    )
};

export default Footer;