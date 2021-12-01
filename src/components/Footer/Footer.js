const Footer = () => {
    return (
        <footer>
        <div className="container">
            <p><a href="/myrecipes">My Recepies</a> | <a href="/recipes">All Recepies </a>| <a href="/">Home</a></p>
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