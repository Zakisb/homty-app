import {
	ErrorMessage,
	Form,
	SubmitButton,
	FormRadio,
} from '../../../ui/forms';
import * as yup from 'yup';
import { useState, useEffect, useRef } from 'react';
import { questions } from './questions';
import Button from '../../../ui/Button';
import applicationFormApi from '../../../../modules/application-form/queries';
import { useSession } from 'next-auth/react';

export default function HomePreference ({ handleNext, handleBack, scrollToTop }) {
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const [startDate, setStartDate] = useState(new Date());
	const validationSchema = yup.object().shape({});
	const [formAnswers, setFormAnswers] = useState([]);
	const myRef = useRef(null);
	const { data: session } = useSession();

	const getUserAnswers = () => {
		return applicationFormApi
			.getApplicationForm({ email: session.user.email, step: 'step2' })
			.then(function (response) {
				return response.data.questions.step2;
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const onSubmit = async (form, { resetForm }) => {
		setLoading(true);
		const answers = questions.map((q) => {
			return { question: q.question, answer: form[q.type] };
		});

		const applicationForm = applicationFormApi
			.updateApplicationForm({ email: session.user.email, step: 'step2', answers: answers })
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
		<div className="md:grid lg:grid-cols-2 md:divide-x md:divide-gray-200 px-12 mt-28 pt-30 pb-32" ref={myRef}>
			<div className="md:px-12 md:py-10 mb-4 space-y-4 col-span-1 ">
				<span>Step 2/4</span>
				<h3>Your Living Preferences</h3>
				<p>We want to make sure the home we find for you is a perfect fit. In this step, we'll ask you about
					your preferred amenities and features, so we can match you with a home that has everything you
					need.</p>

			</div>
			<div className="md:px-12 md:py-8">
				{formAnswers.length > 0 &&
					<Form
						initialValues={{
							q1: formAnswers.find(e => e.question === "What is your preferred lease length?").answer,
							q2: formAnswers.find(e => e.question === "How often do you plan to have guests over?").answer,
							q3: formAnswers.find(e => e.question === "How do you typically use your living space?").answer,
							q4: formAnswers.find(e => e.question === "What is your preferred location?").answer,
							q5: formAnswers.find(e => e.question === "What is your preferred home type?").answer,
							q6: formAnswers.find(e => e.question === "What is your preferred room type?").answer,
							q7: formAnswers.find(e => e.question === "What is your preferred number of bedrooms?").answer,
							q8: formAnswers.find(e => e.question === "What is your preferred number of bathrooms?").answer,
							q9: formAnswers.find(e => e.question === "How do you feel about smoking in your living space?").answer,
							q10: formAnswers.find(e => e.question === "How do you feel about pets in your living space?").answer,
							q11: formAnswers.find(e => e.question === "How do you feel about having roommates?").answer,
							q12: formAnswers.find(e => e.question === "Are you comfortable with a roommate who has different lifestyle habits?").answer,
							q13: formAnswers.find(e => e.question === "Are you comfortable with a roommate who has different cultural background?").answer
						}}
						validationSchema={validationSchema}
						onSubmit={onSubmit}
					>
						<div className="space-y-10">
							{questions.map((question, index) => (
								<div className="col-span-1" key={index}>
									<FormRadio options={question.options}
									           name={question.type}
									           defaultChecked={question.options[0].value}
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
