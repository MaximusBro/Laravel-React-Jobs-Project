import React from 'react'
interface RegisterButtonProps {
	title: string;
	onClick: Function;
	className: string;
}
const RegisterButton: React.FC<RegisterButtonProps> = ({ title, onClick, className }) => {
	return (
		<button
			onClick={() => onClick("candidate")}
			className={className}
			data-bs-toggle="tab" data-bs-target="#nav-home"
			type="button" role="tab" aria-controls="nav-home"
			aria-selected="true">{title}</button>
	)
}

export default RegisterButton