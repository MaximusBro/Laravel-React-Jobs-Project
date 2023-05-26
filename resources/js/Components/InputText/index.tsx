import React from 'react';

interface InputTextProps {
	className: string,
	name: string,

	title: string;
	srcIcon: string;
	autoComplete?: string;
	placeholder?: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const InputText: React.FC<InputTextProps> = ({ className, name, title, srcIcon, autoComplete, placeholder, onChange }) => {
	return (
		<div className={className}>
			<div className="form-inner mb-25">
				<label htmlFor={name}>{title}</label>
				<div className="input-area">
					<img src={srcIcon} alt="" />
					<input
						onChange={onChange}
						autoComplete={autoComplete ? autoComplete : "on"}
						type="text"
						id={name}
						name={name}
						placeholder={placeholder} />
				</div>
			</div>
		</div>
	)
}

export default InputText