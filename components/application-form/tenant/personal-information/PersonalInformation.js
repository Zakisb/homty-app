import { ErrorMessage, Form, FormField, FormSelect, SubmitButton, FormDatePicker, FormPhone } from '../../../ui/forms';
import * as yup from 'yup';
import { useState, useRef, useEffect } from 'react';
import { questions } from './questions';
import Button from '../../../ui/Button';
import applicationFormApi from '../../../../modules/application-form/queries';
import { useSession } from 'next-auth/react';

export default function PersonalInformation ({ handleNext, handleBack, scrollToTop, isVisible }) {
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const [formAnswers, setFormAnswers] = useState([])
	const validationSchema = yup.object().shape({});
	const myRef = useRef(null);
	const {data: session} = useSession();

	const getUserAnswers =  () => {
		return  applicationFormApi
			.getApplicationForm({email : session.user.email, step: 'step1'})
			.then(function (response) {
				return response.data.questions
			})
			.catch((error) => {
				console.log(error)
			})
	}

	const getAnswer = (question) => {
		if(formAnswers.length > 0) {
			const obj = formAnswers.find(e => e.question === question);
			return obj
		} else {
			return { answer:  '' };
		}
	};

	const onSubmit = async (form, { resetForm }) => {
		setLoading(true);
		const answers = [
			{ question: 'What\'s birth date?', step: 'Personal information', answer: form.birthDate },
			{ question: 'What\'s your gender?', step: 'Personal information', answer: form.gender },
			{ question: 'What is your marital status?', step: 'Personal information', answer: form.marital },
			{ question: 'What is your occupation?', step: 'Personal information', answer: form.occupation },
			{ question: 'What is your address?', step: 'Personal information', answer: form.adresse },
			{ question: 'What is your phone number?', step: 'Personal information', answer: form.phone }
		];

		const applicationForm = applicationFormApi
			.updateApplicationForm({email : session.user.email,  step: 'step1' , answers: answers})
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
		getUserAnswers().then(data => {
			if(data) {
				setFormAnswers(data.step1)
			} else {
				const template = questions.map((object) => {
					return {question: object.question, answer : '' }
				})
				setFormAnswers(template)
			}
		});
		scrollToTop(myRef);
	}, [myRef, scrollToTop]);

	return (
			<div className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-200 px-12 mt-28" ref={myRef}>
				<div className="md:px-12 md:py-10 mb-4 space-y-4">
					<p className="text-gray-500">Step 1/4</p>
					<h3>Your Personal Information</h3>
					<p>In this step, we&#39;ll ask you for some personal information so we can verify your identity and
						contact
						you about potential homes. Don&#39;t worry, we&#39;ll keep your information safe and secure.
					</p>
				</div>
				<div className="md:px-12 md:py-8">
					{formAnswers.length > 0 &&
					<Form
						initialValues={{
							birthDate: new Date(getAnswer("What\'s birth date?").answer || 0),
							gender: getAnswer("What's your gender?").answer,
							marital: getAnswer("What is your marital status?").answer,
							occupation: getAnswer("What is your occupation?").answer,
							adresse: getAnswer("What is your address?").answer,
							phone: getAnswer("What is your phone number?").answer
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
					}

				</div>
			</div>
	);
}
