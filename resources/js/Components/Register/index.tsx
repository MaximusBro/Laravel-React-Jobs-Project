import { useState, FormEvent } from "react"
import { candidateSchema } from "@/Validations/registerValidation";
//imports Components
import RegisterButton from "./RegisterButton";
import RegisterForm from "./RegisterForm";


const Register = () => {

	const [registerVariant, setRegisterVariant] = useState("candidate");

	const onClickVariant = (variant: string): void => {
		setRegisterVariant(variant)
	}


	const conditionVariant = (condition: string): string => {
		return registerVariant === condition ? "nav-link active" : "nav-link"
	}

	return (
		<div className="register-area pt-120 mb-120">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="form-wrapper">
							<div className="form-title">
								<h3>Register Account</h3>
								<span></span>
							</div>
							<div className="register-tab">
								<nav>
									<div className="nav nav-tabs" id="nav-tab" role="tablist">
										<RegisterButton title="Candidate"
											onClick={() => onClickVariant("candidate")}
											className={conditionVariant("candidate")} />
										<RegisterButton
											title="Company"
											onClick={() => onClickVariant("company")}
											className={conditionVariant("company")} />
									</div>
								</nav>
								<div className="tab-content" id="nav-tabContent">
									<RegisterForm variant={registerVariant} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Register