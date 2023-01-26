import { Formik, useFormikContext } from 'formik';
import InputTextArea from '../InputTextArea';

function FormTextArea({ name, index, property,arrayField = false,  ...otherProps }) {
	const {
		setFieldTouched,
		handleChange,
		setFieldValue,
		values,
		errors,
		touched,
		className
	} = useFormikContext();

	return (
		<div>
			<InputTextArea
				className={className}
				value={arrayField ? values[name][index][property] : values[name]}
				onChange={(e) => {
					setFieldValue(arrayField ? `${name}.${index}.${property}` : name, e.target.value);
				}}
				{...otherProps}
			/>
			{errors[name] && <p className="mt-2 text-xs text-red-500">{errors[name]}</p>}
		</div>

	);
}

export default FormTextArea;