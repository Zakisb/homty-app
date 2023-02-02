import ActivityIndicator from '../../../../../lib/animation/ActivityIndicator';
import { useEffect } from 'react';
import { useRouter } from 'next/router'
import * as formSubmittedAnimation from '/public/assets/animations/formSubmittedAnimation.json';
import * as dots from '/public/assets/animations/dots.json';

export default function ApplicationCongratulations ({}) {
	const router = useRouter();
	const redirectToHome = () => {
		setTimeout(() => {
			router.push('/');
		}, 10000);
	}
	useEffect(() => {
		redirectToHome();
	}, );

	return (
		<div className={'pt-32 text-center h-screen'}>
			<div className="w-96 border-red-500 mx-auto"><ActivityIndicator visible={true}  animationData={formSubmittedAnimation}/></div>
			<h3 className="mb-8">Congratulations on adding your property!</h3>
			<div className="mb-8">
				<p>Thank you for trusting our platform.</p>
				<p>You will be notified once your property has been validated.</p>
			</div>
			<span className="text-xl ">You will now be redirected to the home page in 10 seconds... <ActivityIndicator visible={true} animationData={dots}/></span>
		</div>
	);
}
