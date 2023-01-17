import Lottie from 'react-lottie';


export default function ActivityIndicator ({ visible = false, animationData }) {
	if (!visible) return null;

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice'
		}
	};

	return <Lottie
				options={defaultOptions}
				height={400}
				width={400}
			/>;
}



