const Register = () => {


	const onSubmitToHome = (e) => {
		e.preventDefault();
	
		console.log('ckic')
	}

    return (
        <div className="banner">
				<div className="container">
					<div className="register-area">
						<h3>Sign Up, For An Account</h3>
						<form role="form" id="register-form"  onSubmit={onSubmitToHome}>
							<div className="form-group">
								<input type="text" className="form-control" id="exampleInputName1" placeholder="Full Name" />
							</div>
							<div className="form-group">
							</div>
							<div className="form-group">
								<input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
							</div>
							<div className="form-group">
								<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
							</div>
							<div className="form-group">
								<input type="password" className="form-control" id="exampleInputPassword2" placeholder="Re-Password" />
							</div>
							<button type="submit" className="btn btn-default">SignUp</button>&nbsp;
						</form>
					</div>
				</div>
			</div>
    )

        
};

export default Register;