import { Formik, useFormikContext } from 'formik';
import { TbToiletPaper, TbToolsKitchen2 } from 'react-icons/tb';
import cn from 'classnames';
import { HomeIcon } from '@heroicons/react/24/outline';
import { RadioGroup } from '@headlessui/react';
import { RiParkingBoxLine } from 'react-icons/ri';
import { CiParking1 } from 'react-icons/ci';
import { MdBalcony, MdOutlineLiving, MdOutlineYard } from 'react-icons/md';
import { GiGardeningShears, GiShower, GiYarn } from 'react-icons/gi';
import { useState } from 'react';

function InputCustomSelect ({ name, label, classNames, data, values = [], handleChange, selectedValues = [], ...otherProps }) {


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
						<div key={item.value}>
							<div className="relative flex md:hidden">
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
							<li className="flex hidden md:block">
								<input type="checkbox"
								       id={item.value}
								       onChange={handleChange}
								       value={item.value}
								       className="hidden peer"
								       checked={values.find(e => e == item.value) ? true : false}
								       required=""/>
								<label htmlFor={item.value}
								       className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 hover:text-gray-600  peer-checked:text-gray-600 peer-checked:bg-indigo-50 hover:bg-gray-50 ">
									<div className="block">
										{item.icon}
										<div className="w-full text-lg font-medium mt-1.5">{item.value}</div>
									</div>
								</label>
							</li>
						</div>
					))}
				</ul>
			</fieldset>
		</div>

	);
}

export default InputCustomSelect;