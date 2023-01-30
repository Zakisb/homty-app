import { useFormikContext } from 'formik';
import cn from 'classnames';
import ImagePicker from '../ImagePicker';

export default function FormImagePicker ({ name, index, property,arrayField = false, classNames,  ...otherProps}) {

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
			<ImagePicker
				className={cn(classNames)}
				handleChange={(files) => {
					setFieldValue(name, files.map((file) => {
						return file
					}))
				}}
			/>
			{errors[name] && <p className="mt-2 text-xs text-red-500">{errors[name]}</p>}
		</div>
	);
}