import React, { useState, useCallback } from "react"
import InputText from "@/Components/InputText";
import UserIcon from "/public/assets/images/icon/user-2.svg"
import EmailIcon from "/public/assets/images/icon/email-2.svg"
//Formik
import { Formik, FormikValues } from "formik";
import { loginSchema } from "@/Validations/loginValidation";
import InputPassword from "@/Components/InputPassword";
import InputCheckBox from "@/Components/InputCheckBox";



const LoginForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordType, setPasswordType] = useState("password");
	const [passwordIconClass, setPasswordIconClass] = useState("bi bi-eye-slash")

	const onSubmitFormik = useCallback((values: FormikValues) => {
		console.log(values)
	}, [])

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
			<Formik
				initialValues={{
					email: "",
					password: "",
					remeber: false
				}}
				validationSchema={loginSchema}
				validateOnBlur
				onSubmit={onSubmitFormik}>
				{({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
					<form onSubmit={handleSubmit} >
						<div className="row">
							<InputText
								error={touched.email && errors.email ? errors.email : ""}
								value={values.email}
								onChange={handleChange}
								onBlur={handleBlur}
								className="col-lg-12"
								name="email"
								title="Email*"
								srcIcon={EmailIcon}
								placeholder="Jonson" />
							<InputPassword
								error={touched.password && errors.password ? errors.password : ""}
								value={values.password}
								onChange={handleChange}
								onBlur={handleBlur}
								className="col-lg-12"
								name="password"
								title="Password*"
								placeholder="Password" />

							<InputCheckBox
								onChange={handleChange}
								error={touched.remeber && errors.remeber ? errors.remeber : ""}
								value={values.remeber}
								className="col-lg-12"
								name="remeber"
								text="Remember Me" >
								<a href="#" className="forgot-pass">Forget Password?</a>
							</InputCheckBox>


							<div className="col-lg-12">
								<div className="form-inner">
									<button
										disabled={!isValid && !dirty}
										className="primry-btn-2" type="submit">LogIn</button>
								</div>
							</div>
							<h6>Don’t have an account? <a href="register.html">Sign Up</a></h6>
						</div>
					</form >)}
			</Formik>
		</>
	)
}

export default LoginForm