import * as Yup from "yup"

export const candidateSchema = Yup.object().shape({
	firstName: Yup.string().min(2).required('First name is required'),
	lastName: Yup.string().min(2).required('Last name is required'),
	userName: Yup.string().min(4).required('User name is required'),
	email: Yup.string().email('Invalid email address').required('Email is required'),
	password: Yup.string().min(6).required('Password is required'),
	confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords do not match').required('Confirm password is required'),
});