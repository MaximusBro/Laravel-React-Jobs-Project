import React, { memo, useState, FormEvent } from "react";

// Componetns
import InputText from "@/Components/InputText";
import InputSelect from "@/Components/InputSelect";
import InputPassword from "@/Components/InputPassword";

//Icons
import UserIcon from "/public/assets/images/icon/user-2.svg";
import EmailIcon from "/public/assets/images/icon/email-2.svg";
import CompanyIcon from "/public/assets/images/icon/company-2.svg";
import CategoryIcon from "/public/assets/images/icon/category-2.svg";

interface RegisterFormProps {
	variant: string,
	errorSubmit: Array<string>,
	onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}
const options = ["Digital Agency", "Digital Marketing Agency", "Software Company"];

const RegisterForm: React.FC<RegisterFormProps> = memo(({ variant, errorSubmit, onSubmit }) => {
	//useStates
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>): void => {
		const value = event.target.value;
		setPassword(value);
	}

	const onChangeConfirmPassword = (event: React.ChangeEvent<HTMLInputElement>): void => {
		const value = event.target.value;
		setConfirmPassword(value);
	}
	return (
		<div className="tab-pane fade show active"
			id="nav-profile"
			role="tabpanel"
			aria-labelledby="nav-profile-tab">
			<form onSubmit={onSubmit}>
				<div className="row">
					<InputText className="col-md-6" name="firstname" title="First Name*" srcIcon={UserIcon} placeholder="Mr. Robert" />
					<InputText className="col-md-6" name="lastname" title="Last Name*" srcIcon={UserIcon} placeholder="Jonson" />
					<InputText className="col-md-6" name="username" autoComplete="nickname" title="User Name*" srcIcon={UserIcon} placeholder="robertjonson" />
					<InputText className="col-md-6" name="email" title="Email*" srcIcon={EmailIcon} placeholder="info@example.com" />
					{variant === "company" ?
						<>
							<InputText className="col-md-6" name="companyname" autoComplete="organization" title="Company Name*" srcIcon={CompanyIcon} placeholder="Mr. Robert" />
							<InputSelect className="col-md-6" name="companytype" title="Company Type*" srcIcon={CategoryIcon} options={options} />
						</> : null}
					<InputPassword
						onChange={onChangePassword}
						value={password}
						className="col-md-6"
						name="password"
						title="Password*"
						placeholder="Password" />

					<InputPassword
						onChange={onChangeConfirmPassword}
						value={confirmPassword}
						className="col-md-6"
						name="confirmpassword"
						title="Confirm Password*"
						placeholder="Confirm Password" />

					<div className="col-md-12">
						<div className="form-agreement form-inner d-flex justify-content-between flex-wrap">
							<div className="form-group two">
								<input type="checkbox" id="html" />
								<label htmlFor="html">Here, I will agree company terms & conditions.</label>
							</div>
						</div>
					</div>
					<div className="col-md-12">
						<div className="form-inner">
							<button className="primry-btn-2" type="submit">Sign Up</button>
						</div>
					</div>
					{errorSubmit.length > 0 ? errorSubmit.map((item, index) => {
						return (
							<h6 key={index}>{item}</h6>
						)
					}) : null}
					<h6>Already have an account? <a href="login.html"> Login</a> Here</h6>
					<div className="login-difarent-way">
						<div className="row g-4">
							<div className="col-md-6">
								<a href="https://myaccount.google.com/"><img src="assets/images/icon/google1.svg" alt="" />Log in with Google</a>
							</div>
							<div className="col-md-6">
								<a href="https://www.facebook.com/"><img src="assets/images/icon/facebook1.svg" alt="" />Log in with Facebook</a>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	)
})

export default RegisterForm