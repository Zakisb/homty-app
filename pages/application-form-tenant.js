import PersonalInformation from '../components/application-form/tenant/personal-information/PersonalInformation';
import PersonalityTraits from '../components/application-form/tenant/personality-traits/PersonalityTraits';
import HomePreference from '../components/application-form/tenant/home-preferences/HomePreference';
import PassionsList from '../components/application-form/tenant/passions-list/PassionsList';
import Introduction from '../components/application-form/tenant/introduction/Introduction';
import { useState, useEffect, useRef, useCallback } from 'react';
import Congratulations from '../components/application-form/tenant/congratulations/Congratulations';
import TenantLayout from '../components/layout/tenant/TenantLayout';

export default function ApplicationFormTenant () {
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
				</div>
				<div className="fixed bottom-0 w-full z-30 pb-2 bg-white border">
					<div className="overflow-hidden bg-gray-200">
						<div className="h-2 rounded-r-full bg-indigo-600" style={{ width: `${progress}%` }}/>
					</div>
					<div className="flex justify-center mt-4">
						<p className="text-sm font-medium text-gray-900  px-4 pb-1">{progressText[currentStep]}</p>
					</div>
				</div>
			</div>
		</TenantLayout>
	);
}


