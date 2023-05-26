import React, { useState } from "react"
import InputText from "@/Components/InputText";
import UserIcon from "/public/assets/images/icon/user-2.svg"
import InputPassword from "@/Components/InputPassword";

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
					<InputText
						onChange={onChangeEmail}
						className="col-lg-12"
						name="email"
						title="Email*"
						srcIcon={UserIcon}
						placeholder="info@example.com" />

					<InputPassword
						name="password"
						onChange={onChangePassword}
						className="col-lg-12"
						title="Password*"
						placeholder="info@example.com"
						value={password}
					/>

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