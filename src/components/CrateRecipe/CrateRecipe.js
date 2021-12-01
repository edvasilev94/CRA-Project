const CrateRecipe = () => {
    return (
        <div className="banner">
				<div className="container">
					<div className="register-area">
						<h3>Crate Recipe</h3>
						<form role="form" id="register-form">
							<div className="form-group">
								<input type="text" className="form-control" id="name" placeholder="Recipe Name" />
							</div>
							<div className="form-group">
							</div>
							<div className="form-group">
								<input type="text" className="form-control" id="ingredients" placeholder="Ingredients" />
							</div>
							<div className="form-group">
								<input type="text" className="form-control" id="time" placeholder="Time for cooking" />
							</div>
							<div className="form-group">
								<input type="text" className="form-control" id="url" placeholder="Image URL" />
							</div>
							<div className="form-group">
								<input type="text" className="form-control" id="instructions" placeholder="Instructions" />
							</div>
							<button type="submit" className="btn btn-default">Crate</button>&nbsp;
						</form>
					</div>
				</div>
			</div>
    )

        
};

export default CrateRecipe;