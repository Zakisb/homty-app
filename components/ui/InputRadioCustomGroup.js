import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/20/solid'
import cn from 'classnames';

export default function InputRadioCustomGroup({label, data, value, handleChange}) {

	return (
		<RadioGroup value={value} onChange={handleChange}>
			{label && (
				<RadioGroup.Label className="text-base font-medium text-gray-900">{label}</RadioGroup.Label>
			)}
			<div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
				{data.map((item) => (
					<RadioGroup.Option
						key={item.id}
						value={item.value}
						className={({ checked, active }) =>
							cn(
								checked ? 'border-transparent' : 'border-gray-300',
								active ? 'border-indigo-500 ring-2 ring-indigo-500' : '',
								'relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none'
							)
						}
					>
						{({ checked, active }) => (
							<>
						            <span className="flex flex-1">
						              <span className="flex flex-col">
						                <RadioGroup.Label as="span" className="block text-sm font-medium text-gray-900">
						                  {item.title}
						                </RadioGroup.Label>
							              {item.description &&
								              <RadioGroup.Description as="span" className="mt-2 flex items-center text-xs text-gray-500">
									              {item.description}
								              </RadioGroup.Description>
							              }
							              {item.footer &&
								              <RadioGroup.Description as="span" className="mt-3 text-sm font-medium text-gray-900">
									              {item.footer}
								              </RadioGroup.Description>
							              }
						              </span>
						            </span>
								<CheckCircleIcon
									className={cn(!checked ? 'invisible' : '', 'h-5 w-5 text-indigo-600')}
									aria-hidden="true"
								/>
								<span
									className={cn(
										active ? 'border' : 'border-2',
										checked ? 'border-indigo-500' : 'border-transparent',
										'pointer-events-none absolute -inset-px rounded-lg'
									)}
									aria-hidden="true"
								/>
							</>
						)}
					</RadioGroup.Option>
				))}
			</div>
		</RadioGroup>
	)
}
