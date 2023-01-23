import { Formik, useFormikContext } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import cn from 'classnames';

function PickerDate ({ name, classNames, label, handleChange, selected }) {

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
			<div>
				<DatePicker className={cn('w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm')}
				            selected={selected}
				            onChange={handleChange}
				            showYearDropdown
				/>
			</div>
		</div>
	);
}

export default PickerDate;