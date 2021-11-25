const Login = () => {

    
    const submitHandler = (e) => {
        e.preventDefault();
        
        let formData = new FormData(e.currentTarget);


        console.log(formData.get('username'));
        console.log(formData.get('password'));
    }


    return (
        <div className="banner">
        <div className="container">
            <div className="login-area">
                <h3>Sign In, To Your Account</h3>
                <form role="form" id="login-form" onSubmit={submitHandler}>
                    <div className="form-group">
                        <input type="text" className="form-control" name='username'id="exampleInputUser1" placeholder="Username" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" name='password'id="exampleInputPassword1" placeholder="Password" />
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