import { Disclosure } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';
import { useState, useCallback } from 'react';
import { RadioGroup } from '@headlessui/react';
import { Listbox } from '@headlessui/react';
import { BuildingOfficeIcon, HomeIcon } from '@heroicons/react/24/outline';
import InputRadioCustomGroup from '../../ui/InputRadioCustomGroup';
import { Form, FormCustomRadio, FormField, SubmitButton } from '../../ui/forms';
import * as yup from 'yup';
import { questions } from '../tenant/home-preferences/questions';
import applicationFormApi from '../../../modules/application-form/queries';
import cn from 'classnames';
import { TbToolsKitchen2 } from 'react-icons/tb';
import { CheckCircleIcon, Square2StackIcon, MapPinIcon } from '@heroicons/react/24/outline';
import FormCustomMultiSelect from '../../ui/forms/FormCustomMultiSelect';
import FormImagePicker from '../../ui/forms/FormImagePicker';
import { ChevronUpIcon,  } from '@heroicons/react/20/solid';
import Button from '../../ui/Button';

function classNames (...classes) {
	return classes.filter(Boolean).join(' ');
}

const settings = [
	{ name: 'Public access', description: 'This project would be available to anyone who has the link' },
	{ name: 'Private to Project Members', description: 'Only members of this project would be able to access' },
	{ name: 'Private to you', description: 'You are the only one able to access this project' }
];

const data = [
	{
		id: 1,
		title: () => {
			return <BuildingOfficeIcon className={cn('h-5 w-5 text-indigo-600')}
			                           aria-hidden="true"/>;
		},
		description: 'Self-contained living space, typically located in a building with multiple units.',
		footer: 'Appartement'
	},
	{
		id: 2, title: () => {
			return <HomeIcon className={cn('h-5 w-5 text-indigo-600')}
			                 aria-hidden="true"/>;
		}, description: 'Standalone building typically larger in size than an appartement.', footer: 'House'
	}
];

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

export default function HomeDetails ({handleNext, handleBack}) {
	const [selectedMailingLists, setSelectedMailingLists] = useState(data[0]);
	const validationSchema = yup.object().shape({});
	const [selected, setSelected] = useState(settings[0]);

	const people = [
		{ id: 1, name: 'Durward Reynolds' },
		{ id: 2, name: 'Kenton Towne' },
		{ id: 3, name: 'Therese Wunsch' },
		{ id: 4, name: 'Benedict Kessler' },
		{ id: 5, name: 'Katelyn Rohan' }
	];

	const [selectedPerson, setSelectedPerson] = useState([people[0], people[1]]);
	const onSubmit = async (form, { resetForm }) => {

	};

	return (
		<div className="mx-20 mt-10 pb-36">
			<p className={'leading-8 text-xl '}>We're thrilled to have you join us in providing comfortable and reliable
				rooms for our tenants!</p>
			<div className="mx-auto w-full mt-10 rounded-2xl bg-white p-2">
				<Form
					initialValues={{ homeType: '', adresse: '', surface: '', commonSpaces: [] }}
					validationSchema={validationSchema}
					onSubmit={onSubmit}
				>
					<Disclosure defaultOpen>
						{({ open }) => (
							<div className={'mb-4'}>
								<Disclosure.Button className="flex w-full justify-between rounded-lg bg-indigo-50 px-4 py-3 text-left text-base font-medium text-purple-900 hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
									<span>1. What's the type of property you're listing?</span>
									<ChevronUpIcon
										className={`${
											open ? 'rotate-180 transform' : ''
										} h-5 w-5 text-purple-500`}
									/>
								</Disclosure.Button>
								<Disclosure.Panel className="px-4 pt-2 pb-2 text-sm text-gray-500" open>
									<FormCustomRadio name={'homeType'}
									                 data={data}/>
								</Disclosure.Panel>
							</div>
						)}
					</Disclosure>
					<Disclosure defaultOpen>
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
										<FormField icon={<MapPinIcon className={'h-5 w-5 text-gray-400'} />} name={'adresse'} placeholder={'What\'s the adresse?'}/>
										<FormField icon={<Square2StackIcon className={'h-5 w-5 text-gray-400'} />} name={'surface h-5 w-5 '} placeholder={`What's the surface?`}/>
									</div>
								</Disclosure.Panel>
							</div>
						)}
					</Disclosure>
					<Disclosure defaultOpen>
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
					<Disclosure defaultOpen>
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
									<FormImagePicker/>
								</Disclosure.Panel>
							</div>
						)}
					</Disclosure>
					<div className="w-1/2 ml-auto flex gap-2 border-red-500 mt-10">
						<Button title={'Back'}  size={'small'} variant={'secondary'}  onClick={handleBack}/>
						<Button title={'Next'}  size={'small'} onClick={handleNext}/>
					{/*	<SubmitButton disabled={false}
						              title={'Done'}
						              size={'small'}
						              isLoading={loading} />*/}
					</div>
				</Form>
			</div>

		</div>
	);
}