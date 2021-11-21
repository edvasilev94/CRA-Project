const Register = () => {
    return (
        <div class="banner">
				<div class="container">
					<div class="register-area">
						<h3>Sign Up, For An Account</h3>
						<form role="form" id="register-form">
							<div class="form-group">
								<input type="text" class="form-control" id="exampleInputName1" placeholder="Full Name" />
							</div>
							<div class="form-group">
							</div>
							<div class="form-group">
								<input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email" />
							</div>
							<div class="form-group">
								<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
							</div>
							<div class="form-group">
								<input type="password" class="form-control" id="exampleInputPassword2" placeholder="Re-Password" />
							</div>
							<button type="submit" class="btn btn-default">SignUp</button>&nbsp;
						</form>
					</div>
				</div>
			</div>
    )

        
};

export default Register;