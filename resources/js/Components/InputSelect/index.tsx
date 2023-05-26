import React, { memo } from 'react'

interface InputSelectProps {
	className: string,
	title: string;
	name: string;
	srcIcon: string;
	options: Array<string>
}
const InputSelect: React.FC<InputSelectProps> = memo(({ className, title, name, srcIcon, options }) => {
	return (
		<div className={className}>
			<div className="form-inner mb-25">
				<label htmlFor={name}>{title}</label>
				<div className="input-area">
					<img src={srcIcon} alt="" />
					<select
						className="select1"
						id={name}
						name={name}>
						{options.map((option, index) => {
							return (
								<option key={index} value={option}>{option}</option>
							)
						})}
					</select>
				</div>
			</div>
		</div>
	)
})

export default InputSelect