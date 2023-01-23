import ActivityIndicator from '../../../lib/animation/ActivityIndicator';
import { useEffect } from 'react';
import { useRouter } from 'next/router'
import * as formSubmittedAnimation from '/public/assets/animations/formSubmittedAnimation.json';
import * as dots from '/public/assets/animations/dots.json';

export default function Congratulations ({}) {
	const router = useRouter();
	const redirectToHome = () => {
		setTimeout(() => {
			router.push('/');
		}, 10000);
	}
	useEffect(() => {
		redirectToHome();
	}, []);

	return (
		<div className={'pt-32 text-center h-screen'}>
			<ActivityIndicator visible={true} animationData={formSubmittedAnimation}/>
			<h3 className="mb-8">Congratulations on Completing Your Application!</h3>
			<div className="mb-8">
				<p>Thank you for taking the time to answer our questions and for choosing our platform for your home sharing needs.</p>
				<p>Rest assured, your personal information is safe with us and will be kept confidential.</p>
			</div>
			<span className="text-xl ">You will now be redirected to the home page in 10 seconds... <ActivityIndicator visible={true} animationData={dots}/></span>

		</div>
	);
}
