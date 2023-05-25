import React, { FormEvent } from 'react'

type RegisterCompanyProps = {
	variant: string;
	onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

const RegisterCompany: React.FC<RegisterCompanyProps> = ({ variant, onSubmit }) => {

	return (
		<div className={variant === "company" ? "tab-pane fade show active" : "tab-pane fade"}
			id="nav-profile"
			role="tabpanel"
			aria-labelledby="nav-profile-tab">
			<form onSubmit={onSubmit}>
				<div className="row">
					<div className="col-md-6">
						<div className="form-inner mb-25">
							<label htmlFor="firstname">First Name*</label>
							<div className="input-area">
								<img src="assets/images/icon/user-2.svg" alt="" />
								<input type="text" id="firstname" name="firstname" placeholder="Mr. Robert" />
							</div>
						</div>
					</div>
					<div className="col-md-6">
						<div className="form-inner mb-25">
							<label htmlFor="lastname">Last Name*</label>
							<div className="input-area">
								<img src="assets/images/icon/user-2.svg" alt="" />
								<input type="text" id="lastname" name="lastname" placeholder="Jonson" />
							</div>
						</div>
					</div>
					<div className="col-md-6">
						<div className="form-inner mb-25">
							<label htmlFor="username">User Name*</label>
							<div className="input-area">
								<img src="assets/images/icon/user-2.svg" alt="" />
								<input type="text" id="username1" name="username" placeholder="robertjonson" />
							</div>
						</div>
					</div>
					<div className="col-md-6">
						<div className="form-inner mb-25">
							<label htmlFor="email">Email*</label>
							<div className="input-area">
								<img src="assets/images/icon/email-2.svg" alt="" />
								<input type="text" id="email1" name="email" placeholder="info@example.com" />
							</div>
						</div>
					</div>
					<div className="col-md-6">
						<div className="form-inner mb-25">
							<label htmlFor="companyname">Company Name*</label>
							<div className="input-area">
								<img src="assets/images/icon/company-2.svg" alt="" />
								<input type="text" id="companyname" name="companyname" placeholder="Mr. Robert" />
							</div>
						</div>
					</div>
					<div className="col-md-6">
						<div className="form-inner mb-25">
							<label>Company Type*</label>
							<div className="input-area">
								<img src="assets/images/icon/category-2.svg" alt="" />
								<select className="select1">
									<option value="0">Digital Agency</option>
									<option value="1">Digital Marketing Agency</option>
									<option value="2">Software Company</option>
								</select>
							</div>
						</div>
					</div>
					<div className="col-md-6">
						<div className="form-inner mb-25">
							<label htmlFor="password">Password*</label>
							<input type="password" name="password" id="password3" placeholder="Password" />
							<i className="bi bi-eye-slash" id="togglePassword3"></i>
						</div>
					</div>
					<div className="col-md-6">
						<div className="form-inner">
							<label htmlFor="password4">Confirm Password*</label>
							<input type="password" name="confirmpassword" id="password4" placeholder="Confirm Password" />
							<i className="bi bi-eye-slash" id="togglePassword4"></i>
						</div>
					</div>
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
}

export default RegisterCompany