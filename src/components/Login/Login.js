const Login = () => {

    let formData = new FormData();

    const submitHandler = (e) => {
        console.log(formData);
    }


    return (
        <div className="banner">
        <div className="container">
            <div className="login-area">
                <h3>Sign In, To Your Account</h3>
                <form role="form" id="login-form">
                    <div className="form-group">
                        <input type="text" className="form-control" id="exampleInputUser1" placeholder="Username" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
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