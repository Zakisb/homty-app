import { Formik, useFormikContext } from 'formik';
import InputRadioGroup from '../InputRadioGroup';

function FormRadio({name, label,index, property, arrayField = false, ...otherProps }) {
	const {
		setFieldTouched,
		setFieldValue,
		values,
		errors,
		touched,
	} = useFormikContext();

	return (
		<div>
			{label && (
				<label
					htmlFor={name}
					className="block text-sm font-medium text-gray-700 mb-3"
				>
					{label}
				</label>
			)}
			<InputRadioGroup
				handleChange={(e) =>
					console.log(e.target.value)}
				value={values[name]}
				name={name}
				{...otherProps}
			/>
			{errors[name] && <p className="mt-2 text-xs text-red-500">{errors[name]}</p>}
		</div>

	);
}

export default FormRadio;