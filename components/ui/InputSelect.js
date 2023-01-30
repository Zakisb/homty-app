import { Formik, useFormikContext } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import cn from 'classnames';
import Select from 'react-select';
import Tag from './Tag';

function InputSelect ({ name, label, placeholder,
	                      isMulti = false,
	                      options,
	                      handleChange,
	                      tags = false,
	                      selectedOptions,
	                      tagIcon = null,
	                      description = null,
						  value
                      }) {

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
				<Select value={value} options={options} placeholder={placeholder} isMulti={isMulti} onChange={handleChange}/>
				<span className='text-gray-400 mt-1 text-xs'>{description}</span>
				{tags &&
					<>
						<div className="flex flex-wrap items-center mt-2">
							{selectedOptions && selectedOptions.map((option) => (
								<div key={option.value} className="mt-2.5 mr-2">
									<Tag icon={tagIcon}
									     title={option.label}
									     selected={true}/>
								</div>
							))}
						</div>
					</>
				}
			</div>
		</div>
	);
}

export default InputSelect;