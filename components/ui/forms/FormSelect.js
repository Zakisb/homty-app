import { Formik, useFormikContext } from 'formik';
import InputSelect from '../InputSelect';

function FormSelect({ name, ...otherProps }) {
	const {
		setFieldValue,
		values,
		errors,
		className,
		options
	} = useFormikContext();

	return (
		<div>
			<InputSelect
				className={className}
				options={options}
				value={values[name]}
				selectedOptions={values[name]}
				handleChange={(list) => setFieldValue(name, list)}
				{...otherProps}
			/>
			{errors[name] && <p className="mt-2 text-xs text-red-500">{errors[name]}</p>}
		</div>

	);
}

export default FormSelect;