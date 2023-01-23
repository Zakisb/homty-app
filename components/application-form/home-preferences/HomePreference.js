import { ErrorMessage, Form, FormField, FormSelect, SubmitButton, FormDatePicker, FormPhone } from '../../ui/forms';
import { Switch } from '@headlessui/react';
import cn from 'classnames';
import * as yup from 'yup';
import { useState, useEffect, useRef } from 'react';
import { questions } from './questions';
import FormRadio from '../../ui/forms/FormRadio';
import Button from '../../ui/Button';
import applicationFormApi from '../../../modules/application-form/queries';

export default function HomePreference ({handleNext, handleBack, scrollToTop}) {
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const [startDate, setStartDate] = useState(new Date());
	const validationSchema = yup.object().shape({});
	const myRef = useRef(null);

	const onSubmit = async (form, { resetForm }) => {
		setLoading(true)

		const answers = questions.map((q) => {
			return { question: q.question, answer: form[q.type] };
		})

		console.log(answers)

		const applicationForm = applicationFormApi
			.updateApplicationForm({userId : '63a85e8ee6c15c8478387e7b',  step: 'step2' , answers: answers})
			.then(function (response) {
				setError(null)
				resetForm();
			})
			.catch((error) => {
				if (error.response.status === 400) {
					setError('User not found.')
				} else if (error.response.status === 500) {
					setError('An error occured on the server while update the resources. please try again.')
				}
			}).finally((res) => {
				setLoading(false);
				handleNext();
			});
	};

	const notificationMethods = [
		{ id: 'email', title: 'Email' },
		{ id: 'sms', title: 'Phone (SMS)' },
		{ id: 'push', title: 'Push notification' },
	]

	useEffect(() => {
		scrollToTop(myRef);
	}, [myRef, scrollToTop]);

	return (
		<div className="md:grid lg:grid-cols-2 md:divide-x md:divide-gray-200 px-12 mt-28 pt-30 pb-32" ref={myRef}>
			<div className="md:px-12 md:py-10 mb-4 space-y-4 col-span-1 ">
				<span>Step 2/4</span>
				<h3>Your Living Preferences</h3>
				<p>We want to make sure the home we find for you is a perfect fit. In this step, we'll ask you about your preferred amenities and features, so we can match you with a home that has everything you need.</p>

			</div>
			<div className="md:px-12 md:py-8">
				<Form
					initialValues={{ q1: '', q2:'', q3:'', q4:'',q5:'',q6:'',q7:'',q8:'',q9:'', q10:'', q11:'', q12:'', q13:'' }}
					validationSchema={validationSchema}
					onSubmit={onSubmit}
				>
					<div className="space-y-10">
						{questions.map((question, index) => (
							<div className="col-span-1" key={index}>
								<FormRadio options={question.options} name={question.type} defaultChecked={question.options[0].value} label={question.label}/>
							</div>
						))}
						<div className="w-full flex gap-2 ">
							<Button title={'Back'}  size={'small'} variant={'secondary'} classNames={'w-1/2'} onClick={handleBack}/>
							<SubmitButton disabled={false}
							              title={'Next: Your home preferences'}
							              size={'small'}
							              isLoading={loading}/>
						</div>
					</div>
					<ErrorMessage visible={error} error={error}/>
				</Form>
			</div>
		</div>
	);
}
