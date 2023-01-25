import { Formik, useFormikContext } from 'formik';
import InputRadioCustomGroup from '../InputRadioCustomGroup';

function FormCustomRadio({name, ...otherProps }) {
	const {
		setFieldTouched,
		handleChange,
		setFieldValue,
		values,
		errors,
		touched,
	} = useFormikContext();

	return (
		<div>
			<InputRadioCustomGroup
				handleChange={(e) => setFieldValue(name, e)}
				value={values[name]}
				name={name}
				{...otherProps}
			/>
			{errors[name] && <p className="mt-2 text-xs text-red-500">{errors[name]}</p>}
		</div>

	);
}

export default FormCustomRadio;