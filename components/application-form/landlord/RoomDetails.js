import { Disclosure } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';
import { useState, useCallback } from 'react';
import { RadioGroup } from '@headlessui/react';
import { Listbox } from '@headlessui/react';
import { BuildingOfficeIcon, HomeIcon, CurrencyDollarIcon, Square2StackIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import InputRadioCustomGroup from '../../ui/InputRadioCustomGroup';
import {
	Form,
	FormArrayField,
	FormCustomRadio,
	FormDatePicker,
	FormField,
	FormSelect,
	SubmitButton
} from '../../ui/forms';
import * as yup from 'yup';
import cn from 'classnames';
import { TbToolsKitchen2 } from 'react-icons/tb';
import { ChevronUpIcon, PlusCircleIcon, MinusCircleIcon } from '@heroicons/react/20/solid';
import Button from '../../ui/Button';
import { FieldArray, Field, Formik } from 'formik';
import FormCustomMultiSelect from '../../ui/forms/FormCustomMultiSelect';
import { amenities } from './amenities';
import FormImagePicker from '../../ui/forms/FormImagePicker';

function classNames (...classes) {
	return classes.filter(Boolean).join(' ');
}

const communSpaces = [
	{
		id: 1,
		title: () => {
			return <TbToolsKitchen2 className={cn('h-5 w-5 text-indigo-600')}
			                        aria-hidden="true"/>;
		},
		description: 'Self-contained living space, typically located in a building with multiple units.',
		footer: 'Kitchen'
	},
	{
		id: 2, title: () => {
			return <HomeIcon className={cn('h-5 w-5 text-indigo-600')}
			                 aria-hidden="true"/>;
		}, description: 'Standalone building typically larger in size than an appartement.', footer: 'House'
	}
];

export default function RoomDetails ({ handleNext, handleBack }) {
	const [loading, setLoading] = useState(false);
	const validationSchema = yup.object().shape({});
	const onSubmit = async (form, { resetForm }) => {
		console.log(form)
	};


	return (
		<div className="mx-20 mt-10 pb-36">
			<p className={'leading-8 text-xl '}>We&#39;re thrilled to have you join us in providing comfortable and reliable
				rooms for our tenants!</p>
			<div className="mx-auto w-full mt-10 rounded-2xl bg-white p-2">
				<Formik
					initialValues={{
						rooms: [{
							surface: '',
							price: '',
							availableSlots: '',
							availabilityDate: new Date(),
							desk:[],
							lighting: [],
							storage: [],
							windows:[],
							bedding:[],
							heating:[],
							furniture:[],
							technology:[],
							privateBathroom:[],
							sharedSpace:[]
						}],

					}}
					validationSchema={validationSchema}
					onSubmit={onSubmit}
				>
					{({ values }) => (
						<div>
							<FieldArray name="rooms">
								{({ insert, remove, push }) => (
									<div>
										{values.rooms.length > 0 &&
											values.rooms.map((room, index) => (
												<Disclosure defaultOpen={index === 0} key={index}>
													{({ open }) => (
														<div className={'mb-4'}>
															<div className="flex items-center">
																<Disclosure.Button className="flex w-full justify-between rounded-lg bg-indigo-50 px-4 py-3 text-left text-base font-medium text-purple-900 hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
																	<span>Room {index + 1}</span>
																	<ChevronUpIcon
																		className={`${
																			open ? 'rotate-180 transform' : ''
																		} h-5 w-5 text-purple-500`}
																	/>
																</Disclosure.Button>
																<div className="ml-3 flex">
																	<PlusCircleIcon
																		className={`h-8 w-8 text-green-500 cursor-pointer`}
																		onClick={() => push({
																			surface: '',
																			price: '',
																			availableSlots: '',
																			availabilityDate: '',
																			amneties: []
																		})}
																	/>
																	{
																		<MinusCircleIcon
																			className={cn(index !== 0 ? 'visible' : 'invisible', `h-8 w-8 text-red-500 cursor-pointer`)}
																			onClick={() => remove(index)}
																		/>
																	}
																</div>
															</div>
															<Disclosure.Panel className="px-2 pt-5 pb-2 text-sm text-gray-500"
															                  open>
																<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
																	<FormField arrayField={true} icon={
																		<CurrencyDollarIcon className={cn('h-5 w-5 text-gray-500')}
																		                    aria-hidden="true"/>}
																	                name={`rooms`}
																	                index={index}
																	                property={'price'}
																	                label={'Monthly price'}
																	                legend={'USD'} placeholder={`List the monthly price`}/>
																	<FormField arrayField={true} icon={
																		<UserGroupIcon className={cn('h-5 w-5 text-gray-500')}
																		               aria-hidden="true"/>}
																	           name={`rooms`}
																	           index={index}
																	           property={'availableSlots'}
																	           label={'How many slots are available ?'}
																	           placeholder={`List the number of places available`}/>
																	<FormField arrayField={true} icon={
																		<Square2StackIcon className={cn('h-5 w-5 text-gray-500')}
																		                  aria-hidden="true"/>}
																	           name={`rooms`}
																	           index={index}
																	           property={'surface'}
																	           label={'Surface'}
																	           legend={'SQFT'}
																	           placeholder={`List the room surface`}/>
																	<FormDatePicker arrayField={true}
																	                name={`rooms`}
																	                label={`When is it available ?`}
																	                index={index}
																	                property={'availabilityDate'}
																	                placeholder={`Availability date`}/>
																	{amenities.map((amenity) => (
																		<FormSelect key={amenity.value} arrayField={true} options={amenity.options} placeholder={`Please select available ${amenity.name}`} isMulti={true} name={'rooms'} index={index} property={`${amenity.field}`} label={`${amenity.name}`}/>
																	))}
																	<div className='col-span-2'>
																		<FormImagePicker/>
																	</div>
																</div>
															</Disclosure.Panel>
														</div>
													)}
												</Disclosure>
											))}
									</div>
								)}
							</FieldArray>

							<div className="w-1/2 ml-auto flex gap-2 border-red-500 mt-10">
								<Button title={'Back'} size={'small'} variant={'secondary'} onClick={handleBack}/>
								<SubmitButton disabled={false}
								              title={'Done'}
								              size={'small'}
								              isLoading={loading}/>
							</div>
						</div>
					)}
				</Formik>
			</div>

		</div>
	);
}