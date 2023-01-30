import { ErrorMessage, Form, FormField, FormSelect, SubmitButton, FormDatePicker, FormPhone } from '../../../ui/forms';
import { Switch } from '@headlessui/react';
import cn from 'classnames';
import * as yup from 'yup';
import { useState, useRef, useEffect } from 'react';
import { questions } from './questions';
import InputText from '../../../ui/InputText';
import InputRadioGroup from '../../../ui/InputRadioGroup';
import FormRadio from '../../../ui/forms/FormRadio';
import Button from '../../../ui/Button';
import applicationFormApi from '../../../../modules/application-form/queries';
import { useSession } from 'next-auth/react';

export default function PersonalityTraits ({ handleBack, handleNext, scrollToTop }) {
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const [formAnswers, setFormAnswers] = useState([]);
	const validationSchema = yup.object().shape({});
	const myRef = useRef(null);
	const { data: session } = useSession();

	const getUserAnswers = () => {
		return applicationFormApi
			.getApplicationForm({ email: session.user.email, step: 'step3' })
			.then(function (response) {
				return response.data.questions.step3;
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const getAnswer = (question) => {
		if(formAnswers.length > 0) {
			const obj = formAnswers.find(e => e.question === question);
			return obj
		} else {
			return { answer: '' };
		}
	};

	const onSubmit = async (form, { resetForm }) => {
		setLoading(true);

		const answers = questions.map((q) => {
			return { question: q.question, answer: form[q.type] };
		});

		const applicationForm = applicationFormApi
			.updateApplicationForm({ email: session.user.email, step: 'step3', answers: answers })
			.then(function (response) {
				setError(null);
				resetForm();
			})
			.catch((error) => {
				if (error.response.status === 400) {
					setError('User not found.');
				} else if (error.response.status === 500) {
					setError('An error occured on the server while update the resources. please try again.');
				}
			}).finally((res) => {
				setLoading(false);
				handleNext();
			});
	};

	useEffect(() => {
		getUserAnswers().then(data => {
			if(data) {
				setFormAnswers(data)
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
		<div className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-200 px-12 mt-28 pb-32" ref={myRef}>
			<div className="md:px-12 md:py-10 mb-4 space-y-4">
				<span>Step 3/4</span>
				<h3>All About You</h3>
				<p>To make sure we match you with the perfect home and roomates, we want to get to know you a little bit
					better. This step will help us understand more.</p>
			</div>
			<div className="md:px-12 md:py-8">
				{formAnswers.length > 0 &&
					<Form
						initialValues={{
							q1: getAnswer('Are you more comfortable in a structured or unstructured environment?').answer,
							q2: getAnswer('How do you handle stress and pressure?').answer,
							q3: getAnswer('Are you a morning person or a night owl?').answer,
							q4: getAnswer('How do you like to spend your free time?').answer,
							q5: getAnswer('Are you an introvert or an extrovert?').answer,
							q6: getAnswer('How do you prefer to communicate with others?').answer,
							q7: getAnswer('How do you handle conflicts with others?').answer,
							q8: getAnswer('Are you more of a leader or a follower?').answer,
							q9: getAnswer('Do you prefer to work independently or in a team?').answer,
							q10: getAnswer('Are you a detail-oriented or big-picture person?').answer
						}}
						validationSchema={validationSchema}
						onSubmit={onSubmit}
					>
						<div className="space-y-10">
							{questions.map((question, index) => (
								<div className="col-span-1" key={index}>
									<FormRadio options={question.options}
									           name={question.type}
									           label={question.label}/>
								</div>
							))}
							<div className="w-full flex gap-2 ">
								<Button title={'Back'}
								        size={'small'}
								        variant={'secondary'}
								        classNames={'w-1/2'}
								        onClick={handleBack}/>
								<SubmitButton disabled={false}
								              title={'Next: Your home preferences'}
								              size={'small'}
								              isLoading={loading}/>
							</div>
						</div>
						<ErrorMessage visible={error} error={error}/>
					</Form>
				}
			</div>
		</div>
	);
}
