import React  from "react";


function isInvalid({valid, touched, shouldValidate}) {
	return !valid && shouldValidate && touched;
}

const Input = props => {

	const inputType = props.type || 'text';

	
	const htmlFor = `${inputType} - ${Math.random()}`;

	return (
		<React.Fragment>
			<label 
				className={props.classLabel}
				htmlFor={htmlFor}
			>
				{props.label}
			</label>
			<input
				className={props.classInput}
				type={inputType}
				id={htmlFor}
				value={props.value}
				placeholder={props.placeholder}
				onChange={props.onChange}
			/>

			{
				isInvalid(props)
					? <span>{props.errorMessage || 'Введите верное значение'}</span>
					: null
			}
		</React.Fragment>

		
	)
}

export default Input;