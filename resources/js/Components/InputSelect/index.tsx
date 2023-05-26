import React, { memo } from 'react'
import InputError from '../InputError';

interface InputSelectProps {
	className: string,
	title: string;
	name: string;
	srcIcon: string;
	options: Array<string>;
	error: string;
	value: string;
	onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
const InputSelect: React.FC<InputSelectProps> = memo(({ className, title, name, srcIcon, options, value, error, onChange }) => {
	return (
		<div className={className}>
			<div className="form-inner mb-25">
				<label htmlFor={name}>{title}</label>
				<div className="input-area">
					<img src={srcIcon} alt="" />
					<select
						className="nice-select"
						onChange={onChange}
						value={value}
						id={name}
						name={name}>
						{options.map((option, index) => {
							return (
								<option key={index} value={option}>{option}</option>
							)
						})}
					</select>
				</div>
				{error ? <InputError message={error} /> : null}

			</div>
		</div>
	)
})

export default InputSelect