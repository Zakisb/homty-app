import ApplicationRoomDetails from '../../../components/application-form/landlord/ApplicationRoomDetails';
import TenantLayout from '../../../components/layout/tenant/TenantLayout';
import PropertyAddNavbar from '../../../components/layout/navigation/PropertyAddNavbar';

export default function RoomDetails () {

	return (
		<TenantLayout>
			<PropertyAddNavbar currentStep={2}>
				<ApplicationRoomDetails/>
			</PropertyAddNavbar>
		</TenantLayout>
	);
}


