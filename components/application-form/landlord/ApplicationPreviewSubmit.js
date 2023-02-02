import * as yup from 'yup';
import { Form, FormField, FormTextArea, SubmitButton } from '../../ui/forms';
import Button from '../../ui/Button';
import { useRouter } from 'next/router';
import { useState, useEffect, useRef, forwardRef } from 'react';
import propertiesApi from '../../../modules/properties/queries';

export default function ApplicationPreviewSubmit ({ }) {
	const validationSchema = yup.object().shape({});
	const router = useRouter();
	const formikRef = useRef(null)
	const [loading, setLoading] = useState(false);
	const [formReady, setFormReady] = useState(false);

	const getPropertyTitle = async (propertyId) => {
		setLoading(true)
		return await propertiesApi
			.getProperty(propertyId)
			.then(function (response) {
				console.log(response.data)
				/*router.push(`/application-landlord/${router.query.propertyId}/congratulations`)*/
				return response.data
			})
			.catch((error) => {
				if(error.response.status === 400) {
					alert('An error occured while getting your resource. please try again.')
				}
			}).finally(res => setLoading(true));
	};

	const onSubmit = async (form, { resetForm }) => {
		setLoading(true);
		return await propertiesApi
			.updatePropertyTitle(form, router.query.propertyId)
			.then(function (response) {
				router.push(`/application-landlord/${router.query.propertyId}/congratulations`)
				return response.data
			})
			.catch((error) => {
				if(error.response.status === 400) {
					alert('An error occured when updating your resource. please try again.')
				}
			}).finally(e => setLoading(false));
	};

	useEffect(() => {
		if(!router.isReady) return;
		getPropertyTitle(router.query.propertyId).then(data => {
			formikRef.current.setFieldValue('title', data.title)
			formikRef.current.setFieldValue('description', data.description)
		});
	},[router.isReady])

	return (
		<div className="md:mx-20 mx-12 mt-10 pb-36">
			<p className={'leading-8 text-xl '}>Wait, last thing. Please give your property a title & short description !</p>
			<div className="mx-auto w-full mt-10 rounded-2xl bg-white p-2 space-y-4">
				<Form
					innerRef={formikRef}
					initialValues={{
						title:'',
						description:''
					}}
					validationSchema={validationSchema}
					onSubmit={onSubmit}
				>
					<FormField name={'title'} label={'Provide a title for your property'}/>
					<FormTextArea name={'description'} label={'Describe your property in a few words'}/>
					<div className="w-1/2 ml-auto flex gap-2 border-red-500 mt-10">
						<Button title={'Back'} size={'small'} variant={'secondary'} />
						<SubmitButton title={'Next'} size={'small'} loading={loading}/>
					</div>
				</Form>
			</div>
		</div>
	);
}