import cn from 'classnames';
import { RadioGroup } from '@headlessui/react';
import { useState, Fragment } from 'react';
import { CheckIcon } from '@heroicons/react/20/solid';

function InputRadioGroup ({   classNames,
	                          label,
	                          value,
	                          name,
	                          defaultChecked,
	                          options,
	                          handleChange,
	                          description,
	                          ...rest
                          }) {

	return (
		<div className={cn(classNames)}>
			<label className="text-base font-medium text-gray-900">{label}</label>
			<p className="text-sm leading-5 text-gray-500">{description}</p>
			<fieldset className="mt-4">
				<legend className="sr-only">{label}</legend>
				<div className="space-y-4">
					{options.map((option) => (
						<div key={option.value} className="flex items-center">
							<input
								id={option.value}
								name={name}
								type="checkbox"
								value={option.value}
								onChange={handleChange}
								className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
							/>
							<label htmlFor={option.id}
							       className="ml-3 block text-sm font-medium text-gray-700">
								{option.value}
							</label>
						</div>
					))}
				</div>
			</fieldset>
		</div>
	);
}

export default InputRadioGroup;