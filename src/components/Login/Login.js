const Login = () => {

    

    return (
        <div class="banner">
        <div class="container">
            <div class="login-area">
                <h3>Sign In, To Your Account</h3>
                <form role="form" id="login-form">
                    <div class="form-group">
                        <input type="text" class="form-control" id="exampleInputUser1" placeholder="Username" />
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div class="checkbox form-group">
                    </div>
                    <button type="submit" class="btn btn-default">Login</button>
                </form>
            </div>
        </div>
    </div>
    )

        
};

export default Login;