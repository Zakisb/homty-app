
import LandlordIntroduction from '../../../components/application-form/landlord/landlord-introduction';
import ApplicationHomeDetails from '../../../components/application-form/landlord/home-details/ApplicationHomeDetails';
import TenantLayout from '../../../components/layout/tenant/TenantLayout';
import PropertyAddNavbar from '../../../components/layout/navigation/PropertyAddNavbar';

export default function HomeDetails () {

	return (
			<TenantLayout>
				<PropertyAddNavbar currentStep={1}>
					<ApplicationHomeDetails />
				</PropertyAddNavbar>
			</TenantLayout>
	);
}


