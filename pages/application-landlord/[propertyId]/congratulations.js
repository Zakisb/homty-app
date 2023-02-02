import LandlordIntroduction from '../../../components/application-form/landlord/landlord-introduction';
import ApplicationHomeDetails from '../../../components/application-form/landlord/home-details/ApplicationHomeDetails';
import PropertyAddNavbar from '../../../components/layout/navigation/PropertyAddNavbar';
import ApplicationPreviewSubmit from '../../../components/application-form/landlord/ApplicationPreviewSubmit';
import TenantLayout from '../../../components/layout/tenant/TenantLayout';
import ApplicationCongratulations
	from '../../../components/application-form/landlord/home-details/congratulations/ApplicationCongratulations';

export default function PreviewSubmit () {

	return (
		<TenantLayout>
			<PropertyAddNavbar currentStep={3}>
				<ApplicationCongratulations/>
			</PropertyAddNavbar>
		</TenantLayout>
	);
}


