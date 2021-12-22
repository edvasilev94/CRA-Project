import "./Register.css"

import { useNavigate } from 'react-router';
import { useState } from 'react';

import * as authService from '../../services/authService';
import { useAuthContext } from '../../contexts/AuthContext';

const Register = () => {

	const navigate = useNavigate();
    const { login } = useAuthContext();
	const [passCheck, setPassCheck] = useState({passMessage: null})


	const onChangeHandler = () =>{
		setPassCheck(state => ({
			...state,
			passMessage: null
		}))
	}

	


	const onSubmitToHome = (e) => {
		e.preventDefault();
	
		let formData = new FormData(e.currentTarget);

		let username = formData.get('username');
        let email = formData.get('email');
        let password = formData.get('password');
        let rePassword = formData.get('repassword');

		let isFilled = true;

		if(username === ""
			|| email ===""
			|| password ===""
			|| rePassword ===""	){
				isFilled = false;
		}

		if(password !== rePassword){
			return setPassCheck(state => ({
				...state,
				passMessage: "Passwords do not match!"
			}))
		}
		
		
		if(passCheck.passMessage === null && isFilled === true){
			authService.register(username, email, password)   
			.then(userData => {
				login(userData);
				
					navigate('/');
				});
		}

	}

	let errorContainer = (<div className="errorContainer">
								<p>{passCheck.passMessage}</p>
	 						 </div>)
		
		

    return (
        <div className="banner">
				<div className="container">
					<div className="register-area">
						<h3>Sign Up, For An Account</h3>
						<form role="form" id="register-form"  onSubmit={onSubmitToHome}>
							<div className="form-group">
								<input type="text" className="form-control" name="username" id="username" placeholder="Username" />
							</div>
							<div className="form-group">
							</div>
							<div className="form-group">
								<input type="email" className="form-control" name="email" id="email" placeholder="Enter email" />
							</div>
							<div className="form-group">
								<input type="password" className="form-control" name="password" id="password" placeholder="Password" onChange={onChangeHandler} />
							</div>
							<div className="form-group">
								<input type="password" className="form-control" name="repassword" id="repassword" placeholder="Re-Password" onChange={onChangeHandler}/>
							</div>
							{passCheck.passMessage
							?errorContainer
							:null 
							}
							<h4>All Fields are required</h4>
							<button type="submit" className="btn btn-default">SignUp</button>&nbsp;
						</form>
					</div>
				</div>
			</div>
    )

        
};

export default Register;