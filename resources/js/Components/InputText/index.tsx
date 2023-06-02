import React, { memo } from 'react';
import InputError from '../InputError';

interface InputTextProps {
	className: string,
	name: string,
	value: string,
	title: string;
	srcIcon: string;
	error?: string;
	autoComplete?: string;
	placeholder?: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}
const InputText: React.FC<InputTextProps> = memo(({
	className,
	name,
	value,
	error,
	title,
	srcIcon,
	autoComplete,
	placeholder,
	onChange,
	onBlur }) => {
	return (
		<div className={className}>
			<div className="form-inner mb-25">
				<label htmlFor={name}>{title}</label>
				<div className="input-area">
					<img src={srcIcon} alt="" />
					<input
						onChange={onChange}
						onBlur={onBlur}
						autoComplete={autoComplete ? autoComplete : "on"}
						value={value || ""}
						type="text"
						id={name}
						name={name}
						placeholder={placeholder} />
				</div>
				{error ? <InputError message={error} /> : null}
			</div>
		</div>
	)
})

export default InputText