import { Formik, useFormikContext, useField } from 'formik';
import InputText from '../InputText';

function FormArrayField({ name, index, property, arrayField = false, ...otherProps }) {
	const {
		setFieldTouched,
		handleChange,
		setFieldValue,
		values,
		errors,
		touched,
		className,
		useField
	} = useFormikContext();

	const [field, meta] = useField(otherProps);

	return (
		<div>
			<InputText
				className={className}
				value={arrayField ? values[name][index][property] : values[name]}
				onChange={(e) => {
					setFieldValue(name, e.target.value);
				}}
				{...otherProps}
			/>
			{errors[name] && <p className="mt-2 text-xs text-red-500">{errors[name]}</p>}
		</div>

	);
}

export default FormArrayField;