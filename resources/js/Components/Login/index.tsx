import LoginForm from "./LoginForm"

const Login = () => {
	return (
		<>
			<div className="login-area pt-120 mb-120">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="form-wrapper">
								<div className="form-title">
									<h3>Log In Here!</h3>
									<span></span>
								</div>
								<LoginForm />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>


	)
}

export default Login