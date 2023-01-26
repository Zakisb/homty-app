import { steps } from './steps';
import Button from '../../../ui/Button';
import { SubmitButton } from '../../../ui/forms';

export default function Introduction ({handleNext, scrollToTop}) {
	return (
		<div className="lg:grid md:grid-cols-2 items-center md:divide-gray-200 px-12 mt-28">
			<div className="md:px-8 md:py-10 mb-4 space-y-4">
				<h1 className="">We're excited to have you on board!</h1>
			</div>
			<div className="md:px-12 md:py-8 divide-y">
				{steps.map((step, index) =>
					<>
						<div key={step.id + step.title} className="flex pb-3 pt-12 ">
							<div className="pr-14">
								<h5 className="mb-2">{step.id}. {step.title}</h5>
								<p className=""> {step.description}</p>
							</div>
							<div className="w-20">
								<img className={'w-full'} src={`/assets/img/applicationform/${step.image}`} alt=""/>
							</div>

						</div>
						{index + 1 == steps.length &&
							<div className="xl:w-1/2 w-full ml-auto mt-3">
								<Button title={`Let's go`} size={'small'} onClick={handleNext}/>
							</div>

						}
					</>

				)}
			</div>
		</div>
	);
}