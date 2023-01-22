import Header from "../components/layout/Header";
import Properties from "../components/properties/Properties";
import Footer from "../components/layout/Footer";
import LandlordLayout from '../components/layout/landlord/LandlordLayout';

export default function Dashboard () {
	return (
		<LandlordLayout>
			<div className="px-5">
				<h1>Hello world</h1>
			</div>

		</LandlordLayout>
	)
}