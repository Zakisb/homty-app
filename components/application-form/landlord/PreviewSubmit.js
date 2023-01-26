import * as yup from 'yup';
import { Form, FormField, FormTextArea } from '../../ui/forms';
import Button from '../../ui/Button';

export default function PreviewSubmit ({ handleNext, handleBack }) {
	const validationSchema = yup.object().shape({});
	const onSubmit = async (form, { resetForm }) => {

	};
	return (
		<div className="md:mx-20 mx-12 mt-10 pb-36">
			<p className={'leading-8 text-xl '}>Wait, last thing. Please give your property a title & short description !</p>
			<div className="mx-auto w-full mt-10 rounded-2xl bg-white p-2 space-y-4">
				<Form
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
						<Button title={'Back'} size={'small'} variant={'secondary'} onClick={handleBack}/>
						<Button title={'Next'} size={'small'} onClick={handleNext}/>
					</div>
				</Form>
			</div>
		</div>
	);
}