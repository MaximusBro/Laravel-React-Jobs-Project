import React from 'react'
import InputError from '../InputError';
interface InputTextProps {
	className: string,
	name: string;
	text: string;
	placeholder?: string;
	value: boolean;
	children?: JSX.Element,
	error?: string;
	onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onClickIcon?: () => void;
}
const InputCheckBox: React.FC<InputTextProps> = ({ children, className, name, text, value, error, onChange }) => {
	return (
		<div className={className}>
			<div className="form-agreement form-inner d-flex justify-content-between flex-wrap">
				<div className="form-group two">
					<input type="checkbox"
						id={name} name={name}
						onChange={onChange}
						checked={value} />
					<label htmlFor={name}>{text}</label>
				</div>
				{children}
				{error ? <InputError message={error} /> : null}
			</div>
		</div>
	)
}

export default InputCheckBox