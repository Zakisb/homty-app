import {
	MagnifyingGlassIcon, EnvelopeIcon, MapPinIcon, BanknotesIcon, EllipsisHorizontalCircleIcon, ChevronDownIcon
} from '@heroicons/react/20/solid';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

import { Popover, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import { getTrackBackground, Range } from 'react-range';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStopCircle } from '@fortawesome/free-solid-svg-icons';
import { Combobox } from '@headlessui/react';
import usePlacesAutocomplete, {
	getGeocode, getLatLng
} from 'use-places-autocomplete';
import Link from 'next/link';
import Button from '../ui/Button';
import InputText from '../ui/InputText';
import AppCombobox from '../ui/AppCombobox';
import { SessionProvider, useSession } from 'next-auth/react';

function classNames (...classes) {
	return classes.filter(Boolean).join(' ');
}

const people = ['Durward Reynolds', 'Kenton Towne', 'Therese Wunsch', 'Benedict Kessler', 'Katelyn Rohan'];

const Header = ({}) => {
	const [query, setQuery] = useState('');
	const [selectedPerson, setSelectedPerson] = useState(null);
	const { data: session } = useSession();

	const {
		ready, value, setValue, suggestions: { status, data }, clearSuggestions
	} = usePlacesAutocomplete();

	const handleSelect = async (val) => {
		setValue(val, false);
		clearSuggestions();
		const results = await getGeocode({ address: val });
		const { lat, lng } = await getLatLng(results[0]);
	};

	useEffect(() => {
		console.log(session);
		/* navigator.geolocation.getCurrentPosition(function(position) {
			 console.log("Latitude is :", position.coords.latitude);
			 console.log("Longitude is :", position.coords.longitude);
		 });*/
	});

	const [max, setMax] = useState(0);
	const [min, setMin] = useState(0);
	const [adress, setAdresse] = useState(null);
	const [values, setValues] = useState([25, 75]);
	const STEP = 1;
	const MIN = 14;
	const MAX = 100;

	const filteredPeople = query === '' ? people : people.filter((person) => {
		return person.toLowerCase().includes(query.toLowerCase());
	});

	return (
		<main className="pt-24">
			<div className="relative px-6 lg:px-8">
				<div className="mx-auto max-w-6xl px-12 pt-10 pb-32 sm:pt-18 sm:pb-23">
					<div>
						<div className="hidden sm:mb-8 sm:flex sm:justify-center">
							<div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
			                  <span className="text-gray-600">
			                    Discover new way of living.{' '}
				                  <a href="#" className="font-semibold text-indigo-600">
			                    </a>
			                  </span>
							</div>
						</div>
						<div>
							<h1 className="text-2xl font-bold tracking-tight sm:text-center sm:text-3xl">
								Find convenient coliving homes.

							</h1>
							<div className="mt-8 sm:justify-center border shadow rounded-md border-gray-50 border-solid ">
								<form action="#" method="POST">
									<div className="overflow-visible z-50  ">
										<div className="bg-white px-2 py-5 sm:p-6">
											<div className="grid lg:grid-cols-7 md:grid-cols-6  content-center items-center justify-items-stretch gap-6">
												<div className="md:col-span-2 sm:col-span-full">
													<div className="relative mt-1 rounded-md shadow-sm">
														<Combobox as="div"
														          value={selectedPerson}
														          onChange={setValue}
														          onSelect={(e) => handleSelect(e.target.value)}>
															<div className="relative mt-1">
																<Combobox.Input
																	className="w-full rounded-md border border-gray-300 bg-white py-3 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
																	value={value}
																	placeholder="Where"
																	onChange={(e) => setValue(e.target.value)}
																	displayValue={(person) => person}
																/>
																<Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
																	<ChevronUpDownIcon className="h-5 w-5 text-gray-400"
																	                   aria-hidden="true"/>
																</Combobox.Button>
																{data.length > 0 && (
																	<Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
																		{status == 'OK' && data.map(({
																			                             place_id,
																			                             description
																		                             }) => (
																			<Combobox.Option
																				key={place_id}
																				value={description}
																				className={({ active }) => classNames('relative cursor-default select-none py-2 pl-3 pr-9', active ? 'bg-indigo-600 text-white' : 'text-gray-900')}
																			>
																				{({ active, selected }) => (<>
																					<span className={classNames('block truncate', selected && 'font-semibold')}>{description}</span>
																					{selected && (<span
																						className={classNames('absolute inset-y-0 right-0 flex items-center pr-4', active ? 'text-white' : 'text-indigo-600')}
																					>
                                                                                            <CheckIcon className="h-5 w-5"
                                                                                                       aria-hidden="true"/>
                                                                                          </span>)}
																				</>)}
																			</Combobox.Option>))}
																	</Combobox.Options>)}
															</div>
														</Combobox>
													</div>
												</div>
												<div className="md:col-span-2 sm:col-span-full">
													<div className="relative mt-1 rounded-md shadow-sm">
														<Popover className="relative">
															{({ open }) => (<>
																<Popover.Button
																	className={classNames(open ? 'text-gray-900' : 'text-gray-500', 'py-3 group border border-solid border-gray-300  rounded-md inline-flex items-center px-4 w-full bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2')}
																>
																	<span className="sm:text-sm">Budget</span>
																	<ChevronDownIcon
																		className={classNames(open ? 'text-gray-600' : 'text-gray-400', 'ml-auto mr-2 h-5 w-5 group-hover:text-gray-500')}
																		aria-hidden="true"
																	/>
																</Popover.Button>

																<Transition
																	as={Fragment}
																	enter="transition ease-out duration-200"
																	enterFrom="opacity-0 translate-y-1"
																	enterTo="opacity-100 translate-y-0"
																	leave="transition ease-in duration-150"
																	leaveFrom="opacity-100 translate-y-0"
																	leaveTo="opacity-0 translate-y-1"
																>
																	<Popover.Panel
																		className="absolute left-1/2 z-50 bg-white mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0 ">
																		<div
																			className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
																			<div className="bg-indigo-200 w-full p-3">
																				<h1 className="text-sm text-blue-800 ">Price
																					range</h1>
																			</div>

																			<div className="mt-1 grid  p-4 grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
																				<div className="sm:col-span-3">
																					<label htmlFor="first-name"
																					       className="block text-sm font-medium text-gray-700">
																						Minimum
																					</label>
																					<div className="mt-1">
																						<input
																							type="text"
																							name="first-name"
																							id="first-name"
																							autoComplete="given-name"
																							value={min}
																							onChange={(input) => setMin(input.target.value)}
																							className="block w-full p-2  border rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
																						/>
																					</div>
																				</div>

																				<div className="sm:col-span-3">
																					<label htmlFor="last-name"
																					       className="block text-sm font-medium text-gray-700">
																						Maximum
																					</label>
																					<div className="mt-1">
																						<input
																							type="text"
																							name="last-name"
																							id="last-name"
																							autoComplete="family-name"
																							value={max}
																							onChange={(input) => setMax(input.target.value)}
																							className="block w-full p-2 border rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
																						/>
																					</div>
																				</div>
																			</div>

																			<div
																				className="space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8 ">
																			</div>
																		</div>

																	</Popover.Panel>
																</Transition>
															</>)}
														</Popover>
													</div>
												</div>
												<div className="md:col-span-2 sm:col-span-full">
													<div className="relative mt-1 rounded-md shadow-sm">
														<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
															<EllipsisHorizontalCircleIcon className="h-5 w-5 text-gray-400"
															                              aria-hidden="true"/>
														</div>
														<Popover className="relative">
															{({ open }) => (<>
																<Popover.Button
																	className={classNames(open ? 'text-gray-900' : 'text-gray-500', 'border border border-solid border-gray-300 group inline-flex items-center py-3 px-4 w-full rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2')}
																>
																	<span className="sm:text-sm">Roommates</span>
																	<ChevronDownIcon
																		className={classNames(open ? 'text-gray-600' : 'text-gray-400', 'ml-auto mr-2 h-5 w-5 group-hover:text-gray-500')}
																		aria-hidden="true"
																	/>
																</Popover.Button>

																<Transition
																	as={Fragment}
																	enter="transition ease-out duration-200"
																	enterFrom="opacity-0 translate-y-1"
																	enterTo="opacity-100 translate-y-0"
																	leave="transition ease-in duration-150"
																	leaveFrom="opacity-100 translate-y-0"
																	leaveTo="opacity-0 translate-y-1"
																>
																	<Popover.Panel
																		className="absolute left-1/2 z-50 bg-white mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
																		<div
																			className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
																			<div className="bg-indigo-200 w-full p-3">
																				<h1 className="text-sm text-blue-800">Roomates</h1>
																			</div>
																			<div className="p-3">
																				<h1 className="mt-1 max-w-2xl text-sm text-gray-500">Age</h1>
																				<div className="mb-1 mt-2 mx-6">
																					<div
																						style={{
																							display: 'flex',
																							justifyContent: 'center',
																							flexWrap: 'wrap'
																						}}
																					>
																						<Range
																							draggableTrack
																							values={values}
																							step={STEP}
																							min={MIN}
																							max={MAX}
																							onChange={(values) => {
																								setValues(values);
																							}}
																							renderTrack={({
																								              props,
																								              children
																							              }) => (<div
																								onMouseDown={props.onMouseDown}
																								onTouchStart={props.onTouchStart}
																								style={{
																									...props.style,
																									height: '36px',
																									display: 'flex',
																									width: '100%'
																								}}
																							>
																								<div
																									ref={props.ref}
																									style={{
																										height: '5px',
																										width: '100%',
																										borderRadius: '4px',
																										background: getTrackBackground({
																											values,
																											colors: ['#ccc', '#548BF4', '#ccc'],
																											min: MIN,
																											max: MAX
																										}),
																										alignSelf: 'center'
																									}}
																								>
																									{children}
																								</div>
																							</div>)}
																							renderThumb={({
																								              index,
																								              props,
																								              isDragged
																							              }) => (<div
																								{...props}
																								style={{
																									...props.style,
																									borderRadius: '4px',
																									backgroundColor: '#FFF',
																									display: 'flex',
																									justifyContent: 'center',
																									alignItems: 'center',
																									boxShadow: '0px 2px 6px #AAA'
																								}}
																							>
																								<FontAwesomeIcon
																									icon={faStopCircle}
																									className="text-indigo-600"/>
																								<div
																									style={{
																										position: 'absolute',
																										top: '-34px',
																										color: '#fff',
																										fontWeight: 'bold',
																										fontSize: '14px',
																										fontFamily: 'Arial,Helvetica Neue,Helvetica,sans-serif',
																										padding: '3px',
																										borderRadius: '4px',
																										backgroundColor: '#878A9F'
																									}}
																								>
																									{values[index]}
																								</div>
																							</div>)}
																						/>
																					</div>

																				</div>
																			</div>
																			<div className="p-3">
																				<h1 className="mt-1 max-w-2xl text-sm text-gray-500">Sexe</h1>
																				<div className="flex h-5 items-center  justify-between mt-4 px-4">
																					<div className="flex h-5 items-center">
																						<input
																							id="meuble"
																							aria-describedby="comments-description"
																							name="comments"
																							type="radio"
																							className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
																						/>
																						<label htmlFor="meublé"
																						       className="ml-3 block text-sm font-medium text-gray-700">
																							Homme
																						</label>
																					</div>
																					<div className="flex h-5 items-center">
																						<input
																							id="meuble"
																							aria-describedby="comments-description"
																							name="comments"
																							type="radio"
																							className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
																						/>
																						<label htmlFor="meublé"
																						       className="ml-3 block text-sm font-medium text-gray-700">
																							Femme
																						</label>
																					</div>

																				</div>
																			</div>
																			<div className="p-3">
																				<h1 className="mt-1 max-w-2xl text-sm text-gray-500">Personnalité</h1>
																				<div className="flex  items-center justify-between flex-wrap mt-4 px-4">
																					<div className="flex h-5 items-center">
																						<input
																							id="meuble"
																							aria-describedby="comments-description"
																							name="comments"
																							type="checkbox"
																							className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
																						/>
																						<label htmlFor="meublé"
																						       className="ml-3 block text-sm font-medium text-gray-700">
																							Calm
																						</label>
																					</div>
																					<div className="flex h-5 items-center">
																						<input
																							id="meuble"
																							aria-describedby="comments-description"
																							name="comments"
																							type="checkbox"
																							className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
																						/>
																						<label htmlFor="meublé"
																						       className="ml-3 block text-sm font-medium text-gray-700">
																							Organized
																						</label>
																					</div>
																					<div className="flex h-5 items-center">
																						<input
																							id="meuble"
																							aria-describedby="comments-description"
																							name="comments"
																							type="checkbox"
																							className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
																						/>
																						<label htmlFor="meublé"
																						       className="ml-3 block text-sm font-medium text-gray-700">
																							Open-minded
																						</label>
																					</div>
																					<div className="flex h-5 items-center">
																						<input
																							id="meuble"
																							aria-describedby="comments-description"
																							name="comments"
																							type="checkbox"
																							className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
																						/>
																						<label htmlFor="meublé"
																						       className="ml-3 block text-sm font-medium text-gray-700">
																							Funny
																						</label>
																					</div>
																				</div>
																			</div>
																			<div className="p-3">
																				<h1 className="mt-1 max-w-2xl text-sm text-gray-500 ">Passions</h1>
																				<div className="flex  items-center justify-between flex-wrap mt-4 px-4">
																					<div className="flex h-5 items-center">
																						<input
																							id="meuble"
																							aria-describedby="comments-description"
																							name="comments"
																							type="checkbox"
																							className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
																						/>
																						<label htmlFor="meublé"
																						       className="ml-3 block text-sm font-medium text-gray-700">
																							Reading
																						</label>
																					</div>
																					<div className="flex h-5 items-center">
																						<input
																							id="meuble"
																							aria-describedby="comments-description"
																							name="comments"
																							type="checkbox"
																							className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
																						/>
																						<label htmlFor="meublé"
																						       className="ml-3 block text-sm font-medium text-gray-700">
																							Football
																						</label>
																					</div>
																					<div className="flex h-5 items-center">
																						<input
																							id="meuble"
																							aria-describedby="comments-description"
																							name="comments"
																							type="checkbox"
																							className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
																						/>
																						<label htmlFor="meublé"
																						       className="ml-3 block text-sm font-medium text-gray-700">
																							Gaming
																						</label>
																					</div>
																					<div className="flex h-5 items-center">
																						<input
																							id="meuble"
																							aria-describedby="comments-description"
																							name="comments"
																							type="checkbox"
																							className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
																						/>
																						<label htmlFor="meublé"
																						       className="ml-3 block text-sm font-medium text-gray-700">
																							Music
																						</label>
																					</div>
																				</div>
																			</div>


																			<div
																				className="space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
																				<button
																					type="button"
																					className="w-full rounded-md border  border-gray-300 bg-brandPrimary py-2 px-3 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-50 hover:text-brandDark focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
																				>
																					Apply
																				</button>
																			</div>
																		</div>

																	</Popover.Panel>
																</Transition>
															</>)}
														</Popover>
													</div>
												</div>
												<div className="lg:col-span-1 sm:col-span-full">
													<Link href="/listings">
														<Button title={'Search'}
														        icon={
															        <MagnifyingGlassIcon className="ml-2 -mr-1 h-5 w-5"
															                             aria-hidden="true"/>}/>
													</Link>
												</div>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
						<div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
							<svg
								className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
								viewBox="0 0 1155 678"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
									fillOpacity=".3"
									d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
								/>
								<defs>
									<linearGradient
										id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
										x1="1155.49"
										x2="-78.208"
										y1=".177"
										y2="474.645"
										gradientUnits="userSpaceOnUse"
									>
										<stop stopColor="#9089FC"/>
										<stop offset={1} stopColor="#FF80B5"/>
									</linearGradient>
								</defs>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</main>

	);
};

export default Header;