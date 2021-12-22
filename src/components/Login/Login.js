import "./Login.css"

import {useState} from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import * as authService from "../../services/authService"


const Login = () => {

    let navigate = useNavigate();
    const { login } = useAuthContext();
    const [errors, setErrors] = useState({message: null})
    

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
                setErrors(state =>({
                    ...state,
                    message: "Invalid username or password"
                }))
            });
    }

    let errorContainer = (<div class="errorContainer">
                            <p>{errors.message}</p>
                        </div>)


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
                    { errors.message
                        ? errorContainer
                        : null
                    }
                    {/* <div className="error">
                            {errors.message}
                    </div> */}
                    <button type="submit" className="btn btn-default">Login</button>
                </form>
            </div>
        </div>
    </div>
    )

        
};

export default Login;