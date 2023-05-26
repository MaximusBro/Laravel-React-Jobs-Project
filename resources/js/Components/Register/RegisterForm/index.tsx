import React, { memo, useMemo, useCallback, useState, useEffect } from "react";

// Componetns
import InputText from "@/Components/InputText";
import InputSelect from "@/Components/InputSelect";
import InputPassword from "@/Components/InputPassword";
import InputCheckBox from "@/Components/InputCheckBox";

//Formik
import { Formik, FormikValues } from "formik";
//Schemas
import { candidateSchema, companySchema } from "@/Validations/RegisterValidation";

//Icons
import UserIcon from "/public/assets/images/icon/user-2.svg";
import EmailIcon from "/public/assets/images/icon/email-2.svg";
import CompanyIcon from "/public/assets/images/icon/company-2.svg";
import CategoryIcon from "/public/assets/images/icon/category-2.svg";

interface RegisterFormProps {
	variant: string,
}
const options = ["Digital Agency", "Digital Marketing Agency", "Software Company"];

const RegisterForm: React.FC<RegisterFormProps> = memo(({ variant }) => {
	const [initialValues, setInitialValues] = useState({
		firstName: "",
		lastName: "",
		userName: "",
		email: "",
		companyName: "",
		companyType: "",
		password: "",
		confirmPassword: "",
		agreement: false,
	});
	const onSubmitFormik = useCallback((values: FormikValues) => {

		console.log(values)
	}, [])
	useEffect(() => {
		if (variant === "company") {
			setInitialValues({
				firstName: "",
				lastName: "",
				userName: "",
				email: "",
				companyName: "",
				companyType: "",
				password: "",
				confirmPassword: "",
				agreement: false,
			});
		} else {
			setInitialValues({
				firstName: "",
				lastName: "",
				userName: "",
				email: "",
				password: "",
				confirmPassword: "",
				agreement: false,
			});
		}
	}, [variant]);
	return (
		<div className="tab-pane fade show active"
			id="nav-profile"
			role="tabpanel"
			aria-labelledby="nav-profile-tab">

			<Formik
				enableReinitialize
				initialValues={initialValues}
				validationSchema={variant === "company" ? companySchema : candidateSchema}
				validateOnBlur
				onSubmit={onSubmitFormik}>
				{({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
					<form onSubmit={handleSubmit}>
						<div className="row">
							<InputText
								error={touched.firstName && errors.firstName ? errors.firstName : ""}
								value={values.firstName}
								onChange={handleChange}
								onBlur={handleBlur}
								className="col-md-6"
								name="firstName"
								title="First Name*"
								srcIcon={UserIcon}
								placeholder="Mr. Robert" />
							<InputText
								error={touched.lastName && errors.lastName ? errors.lastName : ""}
								value={values.lastName}
								onChange={handleChange}
								onBlur={handleBlur}
								className="col-md-6"
								name="lastName"
								title="Last Name*"
								srcIcon={UserIcon}
								placeholder="Jonson" />

							<InputText
								error={touched.userName && errors.userName ? errors.userName : ""}
								value={values.userName}
								onChange={handleChange}
								onBlur={handleBlur}
								className="col-md-6"
								name="userName"
								title="User Name*"
								srcIcon={UserIcon}
								placeholder="Jonson" />

							<InputText
								error={touched.email && errors.email ? errors.email : ""}
								value={values.email}
								onChange={handleChange}
								onBlur={handleBlur}
								className="col-md-6"
								name="email"
								title="Email*"
								srcIcon={EmailIcon}
								placeholder="info@example.com" />

							{variant === "company" ?
								<>
									<InputText
										error={touched.companyName && errors.companyName ? errors.companyName : ""}
										value={values.companyName}
										onChange={handleChange}
										onBlur={handleBlur}
										className="col-md-6"
										name="companyName"
										autoComplete="organization"
										title="Company Name*" srcIcon={CompanyIcon}
										placeholder="Mr. Robert" />

									<InputSelect
										error={touched.companyType && errors.companyType ? errors.companyType : ""}
										value={values.companyType}
										onChange={handleChange}
										className="col-md-6"
										name="companyType"
										title="Company Type*"
										srcIcon={CategoryIcon}
										options={options} />

								</> : null}

							<InputPassword
								error={touched.password && errors.password ? errors.password : ""}
								value={values.password}
								onChange={handleChange}
								onBlur={handleBlur}
								className="col-md-6"
								name="password"
								title="Password*"
								placeholder="Password" />

							<InputPassword
								error={touched.confirmPassword && errors.confirmPassword ? errors.confirmPassword : ""}
								value={values.confirmPassword}
								onChange={handleChange}
								onBlur={handleBlur}
								className="col-md-6"
								name="confirmPassword"
								title="Confirm Password*"
								placeholder="Confirm Password" />
							<InputCheckBox
								onChange={handleChange}
								error={touched.agreement && errors.agreement ? errors.agreement : ""}
								value={values.agreement}
								className="col-md-12"
								name="agreement"
								text="Here, I will agree company terms & conditions." />

							<div className="col-md-12">
								<div className="form-inner">
									<button
										disabled={!isValid && !dirty}
										className="primry-btn-2"
										type="submit">Sign Up</button>
								</div>
							</div>
						</div>


					</form>
				)}
			</Formik>

		</div>
	)
})

export default RegisterForm