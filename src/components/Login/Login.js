import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import * as authService from "../../services/authService"


const Login = () => {

    let navigate = useNavigate();
    const { login } = useAuthContext();

    const submitHandler = (e) => {
        e.preventDefault();
        
        let formData = new FormData(e.currentTarget);

        let email = formData.get('email');
        let password = formData.get('password');
 

        authService.login(email, password)
            .then((userData) => {
                login(userData);

                navigate('/');
            })
            .catch(err => {
                console.log(err);
            });
    }


    return (
        <div className="banner">
        <div className="container">
            <div className="login-area">
                <h3>Sign In, To Your Account</h3>
                <form role="form" id="login-form" onSubmit={submitHandler}>
                    <div className="form-group">
                        <input type="text" className="form-control" name='email'id="email" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" name='password'id="password" placeholder="Password" />
                    </div>
                    <div className="checkbox form-group">
                    </div>
                    <button type="submit" className="btn btn-default">Login</button>
                </form>
            </div>
        </div>
    </div>
    )

        
};

export default Login;