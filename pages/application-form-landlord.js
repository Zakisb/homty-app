import TenantLayout from '../components/layout/tenant/TenantLayout';
import { CheckIcon } from '@heroicons/react/24/solid';
import HomeDetails from '../components/application-form/landlord/HomeDetails';
import { useState } from 'react';
import Button from '../components/ui/Button';
import RoomDetails from '../components/application-form/landlord/RoomDetails';
import PreviewSubmit from '../components/application-form/landlord/PreviewSubmit';

const steps = [
	{ id: 1, name: 'Listing Details', description: 'Supply basic property details.', href: '#', status: 'complete' },
	{ id: 2, name: 'Rooms Details ', description: 'List all the available rooms.', href: '#', status: 'current' },
	{ id: 3, name: 'Preview & Submit', description: 'Submit final property details.', href: '#', status: 'upcoming' }
];

function classNames (...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function ApplicationFormLandlord () {
	const [currentStep, setCurrentStep] = useState(1);
	const [progress, setProgress] = useState(0);
	const progressText = [
		'Welcome, we\'re excited to have you !',
		'First, Getting to know you',
		'Making progress !',
		'Great, Getting closer!',
		'On the brink of completion',
		'Congratulations !!'
	];
	/*const [currentStep, setCurrentStep] = useState(0);
	const [progress, setProgress] = useState(0);
	const steps = ['Personal Information', 'Lifestyle and Home Preferences', 'Personality Traits', 'Passions', 'Congratulations'];
	const progressText = [
		'Welcome, we\'re excited to have you !',
		'First, Getting to know you',
		'Making progress !',
		'Great, Getting closer!',
		'On the brink of completion',
		'Congratulations !!'
	];*/

	const handleNext = () => {
		if (currentStep < steps.length) {
			setCurrentStep(currentStep + 1);
			setProgress(progress + 25);
		}
	};

	const handleBack = () => {
		if (currentStep > 1) {
			setCurrentStep(currentStep - 1);
			setProgress(progress - 25);
		}
	};

	return (
		<TenantLayout>
			<div className="lg:border-t lg:border-b lg:border-gray-200 mt-36">
				<nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Progress">
					<ol
						role="list"
						className="overflow-hidden rounded-md lg:flex lg:rounded-none lg:border-l lg:border-r lg:border-gray-200"
					>
						{steps.map((step, stepIdx) => (
							<li key={step.id} className="relative overflow-hidden lg:flex-1">
								<div
									className={classNames(
										stepIdx === 0 ? 'border-b-0 rounded-t-md' : '',
										stepIdx === steps.length - 1 ? 'border-t-0 rounded-b-md' : '',
										'border border-gray-200 overflow-hidden lg:border-0'
									)}
								>
									{ currentStep > step.id  ? (
										<a href={step.href} className="group">
					                    <span
						                    className="absolute top-0 left-0 h-full w-1 bg-transparent group-hover:bg-gray-200 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
						                    aria-hidden="true"
					                    />
											<span
												className={classNames(
													stepIdx !== 0 ? 'lg:pl-9' : '',
													'px-6 py-5 flex items-start text-sm font-medium'
												)}
											>
						                      <span className="flex-shrink-0">
						                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600">
						                          <CheckIcon className="h-6 w-6 text-white" aria-hidden="true"/>
						                        </span>
						                      </span>
						                      <span className="mt-0.5 ml-4 flex min-w-0 flex-col">
						                        <span className="text-sm font-medium">{step.name}</span>
						                        <span className="text-sm font-medium text-gray-500">{step.description}</span>
						                      </span>
						                    </span>
										</a>
									) : currentStep === step.id ? (
										<a href={step.href} aria-current="step">
								                    <span
									                    className="absolute top-0 left-0 h-full w-1 bg-indigo-600 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
									                    aria-hidden="true"
								                    />
											<span
												className={classNames(
													stepIdx !== 0 ? 'lg:pl-9' : '',
													'px-6 py-5 flex items-start text-sm font-medium'
												)}
																	>
						                      <span className="flex-shrink-0">
						                        <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-indigo-600">
						                          <span className="text-indigo-600">{step.id}</span>
						                        </span>
						                      </span>
						                      <span className="mt-0.5 ml-4 flex min-w-0 flex-col">
						                        <span className="text-sm font-medium text-indigo-600">{step.name}</span>
						                        <span className="text-sm font-medium text-gray-500">{step.description}</span>
						                      </span>
						                    </span>
										</a>
									) : (
										<a href={step.href} className="group">
							                    <span
								                    className="absolute top-0 left-0 h-full w-1 bg-transparent group-hover:bg-gray-200 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
								                    aria-hidden="true"
							                    />
																		<span
																			className={classNames(
																				stepIdx !== 0 ? 'lg:pl-9' : '',
																				'px-6 py-5 flex items-start text-sm font-medium'
																			)}
																		>
							                      <span className="flex-shrink-0">
							                        <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-300">
							                          <span className="text-gray-500">{step.id}</span>
							                        </span>
							                      </span>
							                      <span className="mt-0.5 ml-4 flex min-w-0 flex-col">
							                        <span className="text-sm font-medium text-gray-500">{step.name}</span>
							                        <span className="text-sm font-medium text-gray-500">{step.description}</span>
							                      </span>
							                    </span>
										</a>
									)}
									{stepIdx !== 0 ? (
										<>
											{/* Separator */}
											<div className="absolute inset-0 top-0 left-0 hidden w-3 lg:block"
											     aria-hidden="true">
												<svg
													className="h-full w-full text-gray-300"
													viewBox="0 0 12 82"
													fill="none"
													preserveAspectRatio="none"
												>
													<path d="M0.5 0V31L10.5 41L0.5 51V82"
													      stroke="currentcolor"
													      vectorEffect="non-scaling-stroke"/>
												</svg>
											</div>
										</>
									) : null}
								</div>
							</li>
						))}
					</ol>
				</nav>
			</div>
			{/*<RoomDetails  handleNext={handleNext} handleBack={handleBack}/>*/}
			<PreviewSubmit  handleNext={handleNext} handleBack={handleBack}/>
			{/*<HomeDetails handleNext={handleNext} handleBack={handleBack}/>*/}
			<div className="fixed bottom-0 w-full z-30 pb-2 bg-white border">
				<div className="overflow-hidden bg-gray-200">
					<div className="h-2 rounded-r-full bg-indigo-600" style={{ width: `${progress}%` }}/>
				</div>
				<div className="flex justify-center mt-4">
					<p className="text-sm font-medium text-gray-900  px-4 pb-1">{progressText[currentStep]}</p>
				</div>
			</div>
		</TenantLayout>
	);
}


