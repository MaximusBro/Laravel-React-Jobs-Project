import React, { memo, useState } from 'react'
import InputError from '../InputError';
interface InputTextProps {
	className: string,
	name: string;
	title: string;
	error: string;
	placeholder?: string;
	value: string;
	onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onClickIcon?: () => void;
}
const InputPassword: React.FC<InputTextProps> = memo(({
	className,
	name,
	title,
	placeholder,
	value,
	error,
	onChange, }) => {

	const [passwordType, setPasswordType] = useState("password");
	const [passwordIconClass, setPasswordIconClass] = useState("bi bi-eye-slash")

	const handleTogle = () => {
		if (passwordType === "password") {
			setPasswordType("text");
			setPasswordIconClass("bi bi-eye-slash bi-eye")
		} else {
			setPasswordType("password");
			setPasswordIconClass("bi bi-eye-slash")
		}
	}
	return (
		<div className={className}>
			<div className="form-inner">
				<label htmlFor={name}>{title}</label>

				<input
					onChange={onChange}
					value={value}
					autoComplete="on"
					id={name}
					name={name}
					type={passwordType}
					placeholder={placeholder} />
				<i onClick={handleTogle} className={passwordIconClass} id="togglePassword"></i>


			</div>
			{error ? <InputError message={error} /> : null}
		</div>
	)
})

export default InputPassword