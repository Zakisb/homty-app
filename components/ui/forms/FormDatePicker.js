import { Formik, useFormikContext } from 'formik';
import "react-datepicker/dist/react-datepicker.css";
import PickerDate from '../PickerDate';

function FormDatePicker({ name, ...otherProps }) {
	const {
		setFieldTouched,
		handleChange,
		setFieldValue,
		errors,
		values
	} = useFormikContext();

	return (
		<div>
			<PickerDate selected={values[name]} handleChange={(date) => setFieldValue(name, date)}  {...otherProps} />
			{errors[name] && <p className="mt-2 text-xs text-red-500">{errors[name]}</p>}
		</div>

	);
}

export default FormDatePicker;