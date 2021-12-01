const CrateRecipe = () => {
    return (
        <div className="banner">
				<div className="container">
					<div className="register-area">
						<h3>Crate Recipe</h3>
						<form role="form" id="register-form">
							<div className="form-group">
								<input type="text" className="form-control" id="exampleInputName1" placeholder="Recipe Name	" />
							</div>
							<div className="form-group">
							</div>
							<div className="form-group">
								<input type="email" className="form-control" id="exampleInputEmail1" placeholder="ingredients" />
							</div>
							<div className="form-group">
								<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Time for cooking" />
							</div>
							<div className="form-group">
								<input type="password" className="form-control" id="exampleInputPassword2" placeholder="Way to cook" />
							</div>
							<button type="submit" className="btn btn-default">Crate</button>&nbsp;
						</form>
					</div>
				</div>
			</div>
    )

        
};

export default CrateRecipe;