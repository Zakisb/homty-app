import { Disclosure } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';
import { useState, useCallback, useEffect, useRef, useContext } from 'react';
import { RadioGroup } from '@headlessui/react';
import { Listbox } from '@headlessui/react';

import InputRadioCustomGroup from '../../../ui/InputRadioCustomGroup';
import { Form, FormCustomRadio, FormField, SubmitButton } from '../../../ui/forms';
import * as yup from 'yup';
import { questions } from '../../tenant/home-preferences/questions';
import propertiesApi from '../../../../modules/properties/queries';
import cn from 'classnames';
import { TbToolsKitchen2 } from 'react-icons/tb';
import { CheckCircleIcon, Square2StackIcon, MapPinIcon } from '@heroicons/react/24/outline';
import FormCustomMultiSelect from '../../../ui/forms/FormCustomMultiSelect';
import FormImagePicker from '../../../ui/forms/FormImagePicker';
import { ChevronUpIcon,  } from '@heroicons/react/20/solid';
import { homeTypes, communSpaces} from './data';
import { useSession } from 'next-auth/react';
import PropertyContext from '../../../../modules/application-form/context';
import applicationFormApi from '../../../../modules/application-form/queries';

function classNames (...classes) {
	return classes.filter(Boolean).join(' ');
}

const settings = [
	{ name: 'Public access', description: 'This project would be available to anyone who has the link' },
	{ name: 'Private to Project Members', description: 'Only members of this project would be able to access' },
	{ name: 'Private to you', description: 'You are the only one able to access this project' }
];


export default function HomeDetails ({handleNext, scrollToTop}) {
	const validationSchema = yup.object().shape({});
	const [selected, setSelected] = useState(settings[0]);
	const [error, setError] = useState(null);
	const [propertyData, setPropertyData] = useState([]);
	const [loading, setLoading] = useState(false);
	const myRef = useRef(null);
	const { data: session } = useSession();
	const {propertyId, setPropertyId} = useContext(PropertyContext)



	const getPropertyDetail = async () => {
		if(propertyId) {
			return propertiesApi
				.getProperty(propertyId)
				.then(function (response) {
					return response.data
				})
				.catch((error) => {
					console.log(error);
				});
		}
	}

	const onSubmit = async (form, { resetForm }) => {
		setLoading(true);
		const property =  new FormData();

		for (const single_file of form.images) {
			property.append('images', single_file)
		}
		property.append('type', form.homeType);
		property.append('address', form.address);
		property.append('surface', form.surface);
		property.append('commonSpaces', form.commonSpaces);
		property.append('email', session.user.email);

		const addProperty = await propertiesApi
			.addProperty(property)
			.then(function (response) {
				setError(null);
				setPropertyId(response.data._id)
			})
			.catch((error) => {
				if (error.response.status === 400) {
					setError('User not found.');
				} else if (error.response.status === 500) {
					setError('An error occured on the server while update the resources. Please try again.');
				} else {
					setError('An error occured. Please try again')
				}
			}).finally((res) => {
				setLoading(false);
				handleNext();
			});
	};

	useEffect(() => {
		getPropertyDetail().then(data => {
			if(data) {
				console.log(propertyData.type)
				setPropertyData(data)
			}
		})
		scrollToTop(myRef);
	}, [myRef, scrollToTop]);

	return (
		<div className="mx-20 mt-10 pb-36" ref={myRef}>
			<p className={'leading-8 text-xl '}>We're thrilled to have you join us in providing comfortable and reliable
				rooms for our tenants!</p>
			<div className="mx-auto w-full mt-10 rounded-2xl bg-white p-2">
				<Form
					initialValues={{ homeType: propertyData.type || '', address: '', surface: '', commonSpaces: [], images:[] }}
					validationSchema={validationSchema}
					onSubmit={onSubmit}
				>
					<Disclosure defaultOpen>
						{({ open }) => (
							<div className={'mb-4'}>
								<Disclosure.Button className="flex w-full justify-between rounded-lg bg-indigo-50 px-4 py-3 text-left text-base font-medium text-purple-900 hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
									<span>1. What the type of property you're listing?</span>
									<ChevronUpIcon
										className={`${
											open ? 'rotate-180 transform' : ''
										} h-5 w-5 text-purple-500`}
									/>
								</Disclosure.Button>
								<Disclosure.Panel className="px-4 pt-2 pb-2 text-sm text-gray-500" open>
									<FormCustomRadio name={'homeType'}
									                 data={homeTypes}/>
								</Disclosure.Panel>
							</div>
						)}
					</Disclosure>
					<Disclosure>
						{({ open }) => (
							<div className={'mb-4'}>
								<Disclosure.Button className="flex w-full justify-between rounded-lg bg-indigo-50 px-4 py-3 text-left text-base font-medium text-purple-900 hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
									<span>2. What are adresse and surface of the listing?</span>
									<ChevronUpIcon
										className={`${
											open ? 'rotate-180 transform' : ''
										} h-5 w-5 text-purple-500`}
									/>
								</Disclosure.Button>
								<Disclosure.Panel className="px-4 pt-2 pb-2 text-sm text-gray-500">
									<div className="md:grid md:grid-cols-2 gap-4 space-y-4 md:space-y-0">
										<FormField icon={<MapPinIcon className={'h-5 w-5 text-gray-400'} />} name={'address'} placeholder={'What\'s the adresse?'}/>
										<FormField icon={<Square2StackIcon className={'h-5 w-5 text-gray-400'} />} name={'surface'} placeholder={`What's the surface?`}/>
									</div>
								</Disclosure.Panel>
							</div>
						)}
					</Disclosure>
					<Disclosure>
						{({ open }) => (
							<div className={'mb-4'}>
								<Disclosure.Button className="flex w-full justify-between rounded-lg bg-indigo-50 px-4 py-3 text-left text-base font-medium text-purple-900 hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
									<span>3. Select commun spaces</span>
									<ChevronUpIcon
										className={`${
											open ? 'rotate-180 transform' : ''
										} h-5 w-5 text-purple-500`}
									/>
								</Disclosure.Button>
								<Disclosure.Panel className="px-4 pt-2 pb-2 text-sm text-gray-500">
									<div>
										<FormCustomMultiSelect name={'commonSpaces'}
										                       data={communSpaces}/>
									</div>
								</Disclosure.Panel>
							</div>
						)}
					</Disclosure>
					<Disclosure>
						{({ open }) => (
							<div className={'mb-4'}>
								<Disclosure.Button className="flex w-full justify-between rounded-lg bg-indigo-50 px-4 py-3 text-left text-base font-medium text-purple-900 hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
									<span>4. Select atleast 3 images of your property</span>
									<ChevronUpIcon
										className={`${
											open ? 'rotate-180 transform' : ''
										} h-5 w-5 text-purple-500`}
									/>
								</Disclosure.Button>
								<Disclosure.Panel className="px-4 pt-2 pb-2 text-sm text-gray-500">
									<FormImagePicker name={'images'}/>
								</Disclosure.Panel>
							</div>
						)}
					</Disclosure>
					<div className="w-1/2 ml-auto flex gap-2 border-red-500 mt-10">
						{/*<Button title={'Next'}  size={'small'} onClick={handleNext}/>*/}
						<SubmitButton disabled={false}
						              title={'Done'}
						              size={'small'}
						              isLoading={loading}/>
					</div>
				</Form>
			</div>

		</div>
	);
}