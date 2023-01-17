import { Formik, useFormikContext } from 'formik';
import InputText from '../InputText';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

function FormPhone({ name, label, ...otherProps }) {
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
			{label && (
				<label
					htmlFor={name}
					className="block text-sm font-medium text-gray-700 mb-3"
				>
					{label}
				</label>
			)}
			<PhoneInput
				value={values[name]}
				country={'us'}
				placeholder={'Please provide your phone number'}
				onChange={(tel) => setFieldValue(name, tel)}
				inputStyle={{
					width:'100%',
					paddingTop: '1rem',
					paddingBottom: '1rem',
					borderWidth:'1px',
					borderColor:'#cbd5e1',
					borderRadius: '0.375rem',
				}}
				{...otherProps}
			/>
			{errors[name] && <p className="mt-2 text-xs text-red-500">{errors[name]}</p>}
		</div>

	);
}

export default FormPhone;