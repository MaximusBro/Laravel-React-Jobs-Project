import { FormEvent } from "react"

type RegisterCandidateProps = {
	variant: string;
	onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};
const RegisterCandidate: React.FC<RegisterCandidateProps> = ({ variant, onSubmit }) => {
	return (
		<div className={variant === "candidate" ? "tab-pane fade show active" : "tab-pane fade"} id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
			<form onSubmit={onSubmit}>
				<div className="row">
					<div className="col-md-6">
						<div className="form-inner mb-25">
							<label htmlFor="firstname1">First Name*</label>
							<div className="input-area">
								<img src="assets/images/icon/user-2.svg" alt="" />
								<input type="text" id="firstname1" name="firstname1" placeholder="Mr. Robert" />
							</div>
						</div>
					</div>
					<div className="col-md-6">
						<div className="form-inner mb-25">
							<label htmlFor="lastname1">Last Name*</label>
							<div className="input-area">
								<img src="assets/images/icon/user-2.svg" alt="" />
								<input type="text" id="lastname1" name="lastname1" placeholder="Jonson" />
							</div>
						</div>
					</div>
					<div className="col-md-6">
						<div className="form-inner mb-25">
							<label htmlFor="username">User Name*</label>
							<div className="input-area">
								<img src="assets/images/icon/user-2.svg" alt="" />
								<input type="text" id="username" name="username" placeholder="robertjonson" />
							</div>
						</div>
					</div>
					<div className="col-md-6">
						<div className="form-inner mb-25">
							<label htmlFor="email">Email*</label>
							<div className="input-area">
								<img src="assets/images/icon/email-2.svg" alt="" />
								<input type="text" id="email" name="email" placeholder="info@example.com" />
							</div>
						</div>
					</div>
					<div className="col-md-6">
						<div className="form-inner mb-25">
							<label htmlFor="password">Password*</label>
							<input type="password" name="password" id="password" placeholder="Password" />
							<i className="bi bi-eye-slash" id="togglePassword"></i>
						</div>
					</div>
					<div className="col-md-6">
						<div className="form-inner">
							<label htmlFor="password2">Confirm Password*</label>
							<input type="password" name="confirmpassword" id="password2" placeholder="Confirm Password" />
							<i className="bi bi-eye-slash" id="togglePassword2"></i>
						</div>
					</div>
					<div className="col-md-12">
						<div className="form-agreement form-inner d-flex justify-content-between flex-wrap">
							<div className="form-group two">
								<input type="checkbox" id="html1" />
								<label htmlFor="html1">Here, I will agree company terms & conditions.</label>
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

export default RegisterCandidate