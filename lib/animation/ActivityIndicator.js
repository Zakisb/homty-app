import Lottie from 'lottie-react';


export default function ActivityIndicator ({ visible = false, animationData }) {
	if (!visible) return null;

	const style = {
		height: "100%",
		width:'100%',
	};

	return <Lottie animationData={animationData} style={style} loop={true} />;
}



