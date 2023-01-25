import { ErrorMessage, Form, FormField, FormSelect, SubmitButton, FormDatePicker, FormPhone } from '../../../ui/forms';
import { Switch } from '@headlessui/react';
import cn from 'classnames';
import * as yup from 'yup';
import { useState, useRef, useEffect } from 'react';
import { questions } from './questions';
import Button from '../../../ui/Button';
import { CSSTransition } from 'react-transition-group';
import applicationFormApi from '../../../../modules/application-form/queries';

export default function PersonalInformation ({ handleNext, handleBack, scrollToTop, isVisible }) {
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const validationSchema = yup.object().shape({});
	const myRef = useRef(null);

	const onSubmit = async (form, { resetForm }) => {
		setLoading(true);
		const answers = [
			{ question: 'What\'s birth date?', step: 'Personal information', answer: form.birthDate },
			{ question: 'What\'s your gender?', step: 'Personal information', answer: form.gender },
			{ question: 'What is your marital status?', step: 'Personal information', answer: form.marital },
			{ question: 'What is your address?', step: 'Personal information', answer: form.adresse },
			{ question: ' What is your phone number?', step: 'Personal information', answer: form.phone }
		];

		const applicationForm = applicationFormApi
			.updateApplicationForm({userId : '63a85e8ee6c15c8478387e7b',  step: 'step1' , answers: answers})
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

	useEffect(() => {
		scrollToTop(myRef);
	}, [myRef, scrollToTop]);

	return (
			<div className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-200 px-12 mt-28" ref={myRef}>
				<div className="md:px-12 md:py-10 mb-4 space-y-4">
					<p className="text-gray-500">Step 1/4</p>
					<h3>Your Personal Information</h3>
					<p>In this step, we'll ask you for some personal information so we can verify your identity and
						contact
						you about potential homes. Don't worry, we'll keep your information safe and secure.
					</p>
				</div>
				<div className="md:px-12 md:py-8">
					<Form
						initialValues={{
							gender: '',
							birthDate: new Date(),
							marital: '',
							occupation: '',
							adresse: '',
							phone: ''
						}}
						validationSchema={validationSchema}
						onSubmit={onSubmit}
					>
						<div className="space-y-5">
							{questions.map((question, index) => (
								<div className="col-span-1" key={index}>
									{question.formType === 'date' &&
										<FormDatePicker name={`${question.type}`}
										                label={`${question.label}`}
										                placeholder={`${question.question}`}/>
									}
									{question.formType === 'input' &&
										<FormField name={`${question.type}`}
										           label={`${question.label}`}
										           placeholder={`${question.question}`}/>
									}
									{question.formType === 'select' &&
										<FormSelect name={`${question.type}`}
										            label={`${question.label}`}
										            placeholder={`${question.question}`}
										            options={question.options}/>
									}
									{question.formType === 'phone' &&
										<FormPhone name={`${question.type}`}
										           label={`${question.label}`}
										           placeholder={`${question.question}`}
										           options={question.options}/>
									}
								</div>
							))}
							<div className="w-full flex gap-2 ml-auto">
								<Button title={'Back'}
								        size={'small'}
								        variant={'secondary'}
								        classNames={'w-1/2'}
								        onClick={handleBack}/>
								<SubmitButton disabled={false}
								              title={'Next: Lifestyle'}
								              size={'small'}
								              isLoading={loading} classNames={'w-1/2'}/>
							</div>
						</div>
						<ErrorMessage visible={error} error={error}/>
					</Form>

				</div>
			</div>
	);
}
