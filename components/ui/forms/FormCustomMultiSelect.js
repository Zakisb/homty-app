import { Formik, useFormikContext } from 'formik';
import InputRadioCustomGroup from '../InputRadioCustomGroup';
import { TbToiletPaper, TbToolsKitchen2 } from 'react-icons/tb';
import cn from 'classnames';
import { HomeIcon } from '@heroicons/react/24/outline';
import { RadioGroup } from '@headlessui/react';
import { RiParkingBoxLine } from 'react-icons/ri';
import { CiParking1 } from 'react-icons/ci';
import { MdBalcony, MdOutlineLiving, MdOutlineYard } from 'react-icons/md';
import { GiGardeningShears, GiShower, GiYarn } from 'react-icons/gi';

function FormCustomMultiSelect ({ name, label,classNames,...otherProps }) {

	const {
		setFieldTouched,
		handleChange,
		setFieldValue,
		values,
		errors,
		touched
	} = useFormikContext();

	const data = [
		{
			id: 1,
			icon: <TbToolsKitchen2 className={cn('h-5 w-5 text-indigo-600')} aria-hidden="true"/>,
			description: 'Self-contained living space, typically located in a building with multiple units.',
			value: 'Kitchen'
		},
		{
			id: 2,
			icon: <MdOutlineLiving className={cn('h-5 w-5 text-indigo-600')} aria-hidden="true"/>,
			description: 'Standalone building typically larger in size than an appartement.',
			value: 'Living room'
		},
		{
			id: 3,
			icon: <CiParking1 className={cn('h-5 w-5 text-indigo-600')} aria-hidden="true"/>,
			description: 'Standalone building typically larger in size than an appartement.',
			value: 'Parking'
		},
		{
			id: 4,
			icon: <GiGardeningShears className={cn('h-5 w-5 text-indigo-600')} aria-hidden="true"/>,
			description: 'Standalone building typically larger in size than an appartement.',
			value: 'Garden'
		},
		{
			id: 5,
			icon: <MdOutlineYard  className={cn('h-5 w-5 text-indigo-600')} aria-hidden="true"/>,
			description: 'Standalone building typically larger in size than an appartement.',
			value: 'Yard'
		},
		{
			id: 6,
			icon: <GiShower className={cn('h-5 w-5 text-indigo-600')} aria-hidden="true"/>,
			description: 'Standalone building typically larger in size than an appartement.',
			value: 'Shower'
		},
		{
			id: 7,
			icon: <GiYarn className={cn('h-5 w-5 text-indigo-600')} aria-hidden="true"/>,
			description: 'Standalone building typically larger in size than an appartement.',
			value: 'Basement'
		},
		{
			id: 8,
			icon: <MdBalcony className={cn('h-5 w-5 text-indigo-600')} aria-hidden="true"/>,
			description: 'Standalone building typically larger in size than an appartement.',
			value: 'Balcony'
		},
	];

	return (
		<div className={cn(classNames)}>
			{label && (
				<label
					htmlFor={name}
					className="text-base font-medium text-gray-900"
				>
					{label}
				</label>
			)}
			<fieldset className="flex gap-5 flex-wrap mt-6">
				<ul className={'grid w-full gap-6 grid-cols-2 md:grid-cols-4'}>
				{data.map((item) => (
					<>
						<div key={item.value} className="relative flex md:hidden">
							<div className="flex h-5 items-center">
								<input
									id="comments"
									aria-describedby="comments-description"
									name="comments"
									type="checkbox"
									className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
								/>
							</div>
							<div className="ml-2 text-sm flex items-center">
							<span id="comments-description" className="text-gray-500">
								{item.value}
							</span>
							</div>
						</div>
						<li key={item.value} className='flex hidden md:block'>
							<input type="checkbox" id={`${item.value}`} value="" className="hidden peer" required=""/>
							<label htmlFor={`${item.value}`}
							       className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 hover:text-gray-600  peer-checked:text-gray-600 peer-checked:bg-indigo-50 hover:bg-gray-50 ">
								<div className="block">
									{item.icon}
									<div className="w-full text-lg font-medium mt-1.5">{item.value}</div>
									{/*<div className="w-full text-sm">A JavaScript library for building user interfaces.</div>*/}
								</div>
							</label>
						</li>
					</>
				))}
				</ul>
			</fieldset>
			{errors[name] && <p className="mt-2 text-xs text-red-500">{errors[name]}</p>}

		</div>

	);
}

export default FormCustomMultiSelect;