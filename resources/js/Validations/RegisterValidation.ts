import * as Yup from "yup"

export const candidateSchema = Yup.object().shape({
	firstName: Yup.string().min(2).required('First name is required'),
	lastName: Yup.string().min(2).required('Last name is required'),
	userName: Yup.string().min(4).required('User name is required'),
	email: Yup.string().email('Invalid email address').required('Email is required'),
	password: Yup.string().min(6).required('Password is required'),
	confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords do not match').required('Confirm password is required'),
	agreement: Yup.bool().oneOf([true], 'You need to accept the terms and conditions'),
});
export const companySchema = Yup.object().shape({
	firstName: Yup.string().min(2).required('First name is required'),
	lastName: Yup.string().min(2).required('Last name is required'),
	userName: Yup.string().min(4).required('User name is required'),
	email: Yup.string().email('Invalid email address').required('Email is required'),
	companyName: Yup.string().min(2).required("Company name is required"),
	companyType: Yup.string().required("Company name is required"),
	password: Yup.string().min(6).required('Password is required'),
	confirmPassword: Yup.string().oneOf([Yup.ref('password'), "не-а, пароль не співпадають"], 'Passwords do not match').required('Confirm password is required'),
	agreement: Yup.bool().oneOf([true], 'You need to accept the terms and conditions'),
});