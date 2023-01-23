import PersonalInformation from '../components/application-form/personal-information/PersonalInformation';
import PersonalityTraits from '../components/application-form/personality-traits/PersonalityTraits';
import HomePreference from '../components/application-form/home-preferences/HomePreference';
import PassionsList from '../components/application-form/passions-list/PassionsList';
import Introduction from '../components/application-form/introduction/Introduction';
import { useState, useEffect, useRef, useCallback } from 'react';
import Congratulations from '../components/application-form/congratulations/Congratulations';
import TenantLayout from '../components/layout/tenant/TenantLayout';

export default function ApplicationForm () {
	const [currentStep, setCurrentStep] = useState(0);
	const [progress, setProgress] = useState(0);
	const steps = ['Personal Information', 'Lifestyle and Home Preferences', 'Personality Traits', 'Passions', 'Congratulations'];
	const progressText = [
		'Welcome, we\'re excited to have you !',
		'First, Getting to know you',
		'Making progress !',
		'Great, Getting closer!',
		'On the brink of completion',
		'Congratulations !!'
	];

	const scrollToTop = useCallback((elementRef) => {
		const parentPadding = 100;
		const element = elementRef.current;
		const elementTop = element.getBoundingClientRect().top;
		window.scrollTo(0, elementTop - parentPadding);
	}, []);

	const handleNext = () => {
		if (currentStep < steps.length) {
			setCurrentStep(currentStep + 1);
			setProgress(progress + 25);
		}
	};

	const handleBack = () => {
		if (currentStep > 0) {
			setCurrentStep(currentStep - 1);
			setProgress(progress - 25);
		}
	};

	const renderStep = () => {
		switch (currentStep) {
			case 0:
				return (
					<Introduction handleNext={handleNext} scrollToTop={scrollToTop}/>
				);
			case 1:
				return (
					<PersonalInformation handleNext={handleNext}
					                     handleBack={handleBack}
					                     scrollToTop={scrollToTop}
					                     isVisible={currentStep === 1}/>
				);
			case 2:
				return (
					<HomePreference handleNext={handleNext} handleBack={handleBack} scrollToTop={scrollToTop}/>

				);
			case 3:
				return (
					<PersonalityTraits handleNext={handleNext} handleBack={handleBack} scrollToTop={scrollToTop}/>
				);
			case 4:
				return (
					<PassionsList handleNext={handleNext} handleBack={handleBack} scrollToTop={scrollToTop}/>
				);
			case 5:
				return (
					<Congratulations/>
				);
			default:
				return <div>Error</div>;
		}
	};

	return (
		<TenantLayout>
			<div>
				<div className="h-screen items-center z-20 cursor-default">
					{renderStep()}
					{/*<Congratulations />*/}
				</div>
				<div className="fixed bottom-0 w-full z-30 pb-2 bg-white border">
					<div className="overflow-hidden bg-gray-200">
						<div className="h-2 rounded-r-full bg-indigo-600" style={{ width: `${progress}%` }}/>
					</div>
					<div className="flex justify-center mt-4">
						{/*<svg xmlns="http://www.w3.org/2000/svg"
					     fill="none"
					     viewBox="0 0 24 24"
					     strokeWidth={1.5}
					     stroke="currentColor"
					     className="w-6 h-6">
						<path strokeLinecap="round"
						      strokeLinejoin="round"
						      d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
					</svg>*/}
						<p className="text-sm font-medium text-gray-900  px-4 pb-1">{progressText[currentStep]}</p>
						{/*<svg xmlns="http://www.w3.org/2000/svg"
					     fill="none"
					     viewBox="0 0 24 24"
					     strokeWidth={1.5}
					     stroke="currentColor"
					     className="w-6 h-6 ">
						<path strokeLinecap="round"
						      strokeLinejoin="round"
						      d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
					</svg>*/}
					</div>
				</div>
			</div>
		</TenantLayout>
	);
}


