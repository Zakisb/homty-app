import { Disclosure } from '@headlessui/react';
import { useState, useEffect, useRef } from 'react';
import { CurrencyDollarIcon, Square2StackIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import {
	FormDatePicker,
	FormField,
	FormSelect,
	SubmitButton
} from '../../ui/forms';
import * as yup from 'yup';
import cn from 'classnames';
import { ChevronUpIcon, PlusCircleIcon, MinusCircleIcon } from '@heroicons/react/20/solid';
import Button from '../../ui/Button';
import { FieldArray, Field, Formik } from 'formik';
import { amenities } from './amenities';
import FormImagePicker from '../../ui/forms/FormImagePicker';
import roomsApi from '../../../modules/rooms/queries';
import { useRouter } from 'next/router';
import propertiesApi from '../../../modules/properties/queries';
import { fetchRemoteImages } from './../../../lib/utils/fetchRemoteImages';
import ModalDelete from '../../ui/ModalDelete';

export default function ApplicationRoomDetails ({}) {

	const [loading, setLoading] = useState(false);
	const [formReady, setFormReady] = useState(false);
	const [open, setOpen] = useState(false);
	const [error, setError] = useState(null);
	const [roomsData, setRoomsData] = useState([]);
	const validationSchema = yup.object().shape({});
	const router = useRouter();
	const arrayHelpersRef = useRef(null);

	const getRoomDetails = async () => {
		if (router.query.propertyId) {
			return await roomsApi
				.getRooms(router.query.propertyId)
				.then(function (response) {
					console.log(response.data)
					return response.data
					/*return response.data.rooms;*/
				})
				.catch((error) => {
					console.log(error);
					/*if(error.response.status === 400) {
						router.push('/')
					}*/
				});
		}
	};

	const onSubmit = async (form, { resetForm }) => {
		try {
			for (const room of form.rooms) {
				const roomData = new FormData();
				try {
					for (let amenity in room) {
						if (amenity === 'images') {
							for (const element of room[amenity]) {
								roomData.append(amenity, element);
							}
						} else if (amenity != '_id') {
							roomData.append(amenity, JSON.stringify(room[amenity]));
						}
					}
					if (room._id) {
						const response = await roomsApi.updateRoom(roomData, room._id);
					} else {
						roomData.append('propertyId', router.query.propertyId)
						const response = await roomsApi.addRoom(roomData, router.query.propertyId)
					}

				} catch (error) {
					console.error(error);
				}
			}
			router.push(`/application-landlord/${router.query.propertyId}/preview-submit`)
		} catch (err) {
			setError('Erorr while adding your rooms. Please try again. if this error persists contact our support');
			alert('Erorr while adding your rooms. Please try again. if this error persists contact our support');
		}

		setLoading(false);
	};

	const onSubmitDeletion = async (roomId, index) => {
		arrayHelpersRef.current.remove(index)
		return await roomsApi
			.deleteRoom(roomId)
			.then(function (response) {
				console.log(response.data)
			})
			.catch((error) => {
				console.log(error);
				alert('An occured occured while deleting your room. please try again. If the problem persist, please contact our support.')
				/*if(error.response.status === 400) {
					router.push('/')
				}*/
			});
	};

	useEffect(() => {
		if (!router.isReady) return;
		getRoomDetails().then(async (rooms) => {
			if (rooms.length > 0) {
				const promises = [];
				for (let i = 0; i < rooms.length; i++) {
					promises.push((fetchRemoteImages(rooms[i].images, `${process.env.NEXT_PUBLIC_ROOMS_IMAGES_URL}`).then(res => {
							return res;
						}).then(res => {
							rooms[i].images = res;
							setRoomsData(current => [...current, rooms[i]]);
							return rooms[i];
						})
					));
				}
				await Promise.all(promises)
					.then((res) => setFormReady(true));
				/*rooms.forEach(async (room) => {
				});*/
			} else {
				roomsData.push({
					surface: '', price: '', desk: [], lighting: [], storage: [],
					windows: [],
					bedding: [],
					heating: [],
					furniture: [],
					technology: [],
					privateBathroom: [],
					sharedSpace: [],
					images: []
				});
				setFormReady(true);
			}
		});
	}, [router.isReady]);

	return (
		<div className="mx-20 mt-10 pb-36">
			<p className={'leading-8 text-xl '}>We&#39;re thrilled to have you join us in providing comfortable and
				reliable
				rooms for our tenants!</p>

			<div className="mx-auto w-full mt-10 rounded-2xl bg-white p-2">
				{formReady &&
					<Formik
						initialValues={{
							rooms: roomsData
						}}
						validationSchema={validationSchema}
						onSubmit={onSubmit}
					>
						{({ values }) => (
							<div>
								<FieldArray name="rooms">
									{(arrayHelpers) => {
										arrayHelpersRef.current = arrayHelpers;
										return (
											<div>
												{values.rooms.length > 0 &&
													values.rooms.map((room, index) => (
														<>
															<ModalDelete open={open}
															             itemId={room._id}
															             handleChange={() => setOpen(!open)}
															             confirmDeletion={() => onSubmitDeletion(room._id, index)}/>

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
																					onClick={() => arrayHelpers.push({
																						surface: '',
																						price: '',
																						desk: [],
																						lighting: [],
																						storage: [],
																						windows: [],
																						bedding: [],
																						heating: [],
																						furniture: [],
																						technology: [],
																						privateBathroom: [],
																						sharedSpace: [],
																						images: []
																					})}
																				/>
																				{
																					<MinusCircleIcon
																						className={cn(index !== 0 ? 'visible' : 'invisible', `h-8 w-8 text-red-500 cursor-pointer`)}
																						onClick={() => {
																							if(room._id) {
																								setOpen(true)
																							} else {
																								arrayHelpers.remove(index)
																							}
																						}}
																					/>
																				}
																			</div>
																		</div>
																		<Disclosure.Panel className="px-2 pt-5 pb-2 text-sm text-gray-500"
																		                  open>
																			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
																				<FormField arrayField={true}
																				           icon={
																					           <CurrencyDollarIcon
																						           className={cn('h-5 w-5 text-gray-500')}
																						           aria-hidden="true"/>}
																				           name={`rooms`}
																				           index={index}
																				           property={'price'}
																				           label={'Monthly price'}
																				           legend={'USD'}
																				           placeholder={`List the monthly price`}/>
																				<FormField arrayField={true} icon={
																					<Square2StackIcon className={cn('h-5 w-5 text-gray-500')}
																					                  aria-hidden="true"/>}
																				           name={`rooms`}
																				           index={index}
																				           property={'surface'}
																				           label={'Surface'}
																				           legend={'SQFT'}
																				           placeholder={`List the room surface`}/>
																				{/*		<FormDatePicker arrayField={true}
																		                name={`rooms`}
																		                label={`When is it available ?`}
																		                index={index}
																		                property={'availabilityDate'}
																		                placeholder={`Availability date`}/>*/}
																				{amenities.map((amenity) => (
																					<FormSelect key={amenity.value}
																					            arrayField={true}
																					            options={amenity.options}
																					            placeholder={`Please select available ${amenity.name}`}
																					            isMulti={true}
																					            name={'rooms'}
																					            index={index}
																					            property={`${amenity.field}`}
																					            label={`${amenity.name}`}/>
																				))}
																				<div className="col-span-2">
																					<FormImagePicker index={index}
																					                 property={'images'}
																					                 name={'rooms'}
																					                 arrayField={true}/>
																				</div>
																			</div>
																		</Disclosure.Panel>
																	</div>
																)}
															</Disclosure>
														</>

													))}
											</div>
										);
									}}
								</FieldArray>

								<div className="w-1/2 ml-auto flex gap-2 border-red-500 mt-10">
									<Button title={'Back'} size={'small'} variant={'secondary'}/>
									<SubmitButton disabled={false}
									              title={'Done'}
									              size={'small'}
									              isLoading={loading}/>
								</div>
							</div>
						)}
					</Formik>
				}
			</div>
		</div>
	);
}