import { Formik, useFormikContext } from 'formik';
import InputCustomSelect from '../InputCustomSelect';

function FormCustomMultiSelect ({ name, label, classNames, data, ...otherProps }) {

	const {
		setFieldTouched,
		handleChange,
		setFieldValue,
		values,
		errors,
		touched
	} = useFormikContext();

	return (
		<div>
			<InputCustomSelect
				handleChange={(e) => {
					if(e.target.checked) {
						values[name].push(e.target.value)
						setFieldValue(name, values[name])
					} else {
						setFieldValue(name , values[name].filter(item => item != e.target.value))
					}
				}}
				data={data}
				values={values[name]}
				selectedValues={values[name]}
				name={name}
				{...otherProps}
			/>
			{errors[name] && <p className="mt-2 text-xs text-red-500">{errors[name]}</p>}
		</div>
	);
}

export default FormCustomMultiSelect;