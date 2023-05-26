import { useState, FormEvent } from "react"
import { candidateSchema } from "@/Validations/CandidateValidation";
//imports Components
import RegisterButton from "./RegisterButton";
import RegisterForm from "./RegisterForm";

//import Yup
import * as Yup from 'yup';

const Register = () => {

	const [registerVariant, setRegisterVariant] = useState("candidate");
	const [errorSubmit, setErrorSubmit] = useState([])


	const onClickVariant = (variant: string): void => {
		setRegisterVariant(variant)
	}

	const onSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
		event.preventDefault();

		const target = event.target as HTMLFormElement;

		const CandidateData = {
			firstName: (target.elements.namedItem('firstname') as HTMLInputElement).value,
			lastName: (target.elements.namedItem('lastname') as HTMLInputElement).value,
			userName: (target.elements.namedItem('username') as HTMLInputElement).value,
			email: (target.elements.namedItem('email') as HTMLInputElement).value,
			password: (target.elements.namedItem('password') as HTMLInputElement).value,
			confirmPassword: (target.elements.namedItem('confirmpassword') as HTMLInputElement).value
		}

		try {
			await candidateSchema.validate(CandidateData, {
				abortEarly: false, // Validate all fields, don't stop on the first error
			}
			);

		} catch (error) {
			// Handle validation errors
			setErrorSubmit(error.errors)
			error.inner.forEach((validationError) => {
				console.log('Field:', validationError.path); // Шлях до поля, де сталася помилка
				console.log('Error:', validationError.message); // Повідомлення про помилку для конкретного поля
			});
		}
	};

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
									<RegisterForm errorSubmit={errorSubmit} onSubmit={onSubmit} variant={registerVariant} />
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