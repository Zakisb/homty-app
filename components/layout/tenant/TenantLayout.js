import Navbar from '../navigation/Navbar';

export default function TenantLayout(props) {
	return (
		<div>
			<Navbar/>
			{props.children}
		</div>
	);
}


