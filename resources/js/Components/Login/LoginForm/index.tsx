import React, { useState } from "react"
const LoginForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const onSubmit = (e: React.SyntheticEvent): void => {
		e.preventDefault();
		console.log(`Your email: ${email}\n Your password: ${password}`)
	}

	const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>): void => {
		const value = event.target.value;
		setEmail(value);
	}

	const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>): void => {
		const value = event.target.value;
		setPassword(value);
	}

	return (
		<>
			<form onSubmit={onSubmit}>
				<div className="row">
					<div className="col-lg-12">
						<div className="form-inner mb-25">
							<label htmlFor="email">Email*</label>
							<div className="input-area">
								<img src="assets/images/icon/email-2.svg" alt="" />
								<input
									onChange={onChangeEmail}
									value={email}
									type="email"
									id="email"
									name="email"
									placeholder="info@example.com" />
							</div>
						</div>
					</div>
					<div className="col-lg-12">
						<div className="form-inner">
							<label htmlFor="email">Password*</label>
							<input
								onChange={onChangePassword}
								value={password}
								type="password"
								name="password"
								id="password"
								placeholder="Password" />
							<i className="bi bi-eye-slash" id="togglePassword"></i>
						</div>
					</div>
					<div className="col-lg-12">
						<div className="form-agreement form-inner d-flex justify-content-between flex-wrap">
							<div className="form-group">
								<input type="checkbox" id="html" />
								<label htmlFor="html">Remember Me</label>
							</div>
							<a href="#" className="forgot-pass">Forget Password?</a>
						</div>
					</div>
					<div className="col-lg-12">
						<div className="form-inner">
							<button className="primry-btn-2" type="submit">LogIn</button>
						</div>
					</div>
					<h6>Don’t have an account? <a href="register.html">Sign Up</a></h6>
				</div>
			</form >
		</>
	)
}

export default LoginForm