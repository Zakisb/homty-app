import { ErrorMessage, Form, FormDatePicker, FormField, FormPhone, FormSelect, SubmitButton } from '../../../ui/forms';
import { passions } from './passions';
import { useState, useRef, useEffect } from 'react';
import * as yup from 'yup';
import Select from 'react-select';
import InputSelect from '../../../ui/InputSelect';
import { PlusIcon, HeartIcon } from '@heroicons/react/20/solid';
import Button from '../../../ui/Button';
import applicationFormApi from '../../../../modules/application-form/queries';
import { useSession } from 'next-auth/react';
import { questions } from '../personality-traits/questions';

export default function PassionsList ({ handleNext, handleBack, scrollToTop }) {
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const [formAnswers, setFormAnswers] = useState([]);
	const myRef = useRef(null);
	const validationSchema = yup.object().shape({});
	const { data: session } = useSession();

	const getUserAnswers = () => {
		return applicationFormApi
			.getApplicationForm({ email: session.user.email, step: 'step4' })
			.then(function (response) {
				return response.data.questions;
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const onSubmit = async (passions) => {
		setLoading(true);

		const applicationForm = await applicationFormApi
			.updateApplicationForm({ email: session.user.email, step: 'step4', answers: passions })
			.then(function (response) {
				setError(null);
			})
			.catch((error) => {
				if (error.response.status === 400) {
					setError('User not found.');
				} else if (error.response.status === 500) {
					setError('An error occured on the server while update the resources. please try again.');
				} else {
					alert('An error occured, please try later on !');
				}

			}).finally((res) => {
				setLoading(false);
				handleNext();
			});
	};

	useEffect(() => {
		getUserAnswers().then(data => {
			if(data) setFormAnswers(data.step4.passions)
		});
		scrollToTop(myRef);
	}, [myRef, scrollToTop]);

	return (
		<div className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-200 px-12 mt-28" ref={myRef}>
			<div className="md:px-12 md:py-10 mb-4 space-y-4">
				<span>Step 4/4</span>
				<h3>What sets your heart on fire?</h3>
				<p>We all have passions that drive us and make us unique. Share with us the things you love to do and
					we&#39;ll help you find a place that aligns with your lifestyle. Whether it&#39;s art, sports, or adventure,
					let us know what makes you tick.
				</p>
			</div>
			<div className="md:px-12 md:py-8">
					<Form
						initialValues={{ passions: formAnswers.length > 0 ?  formAnswers : []}}
						validationSchema={validationSchema}
						onSubmit={onSubmit}
					>
						<div className="space-y-5">
							<FormSelect options={passions}
							            isMulti={true}
							            tags={true}
							            name={'passions'}
							            label={'Search passions from our list'}
							            description={'Add 3 passions atleast for best roomates match'}/>
							<div className="w-full flex gap-2 ">
								<Button title={'Back'}
								        size={'small'}
								        variant={'secondary'}
								        classNames={'w-1/2'}
								        onClick={handleBack}/>
								<SubmitButton disabled={false}
								              title={'Done'}
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