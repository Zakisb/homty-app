import { useRouter } from 'next/router'
import propertiesApi from '../../../modules/properties/queries';
import { useState } from 'react';
import Button from '../../ui/Button';

export default function LandlordIntroduction () {
	const router = useRouter();
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	const createProperty = async () => {
		setLoading(true)

		return await propertiesApi
			.addProperty()
			.then(function (response) {
				setError(null);
				router.push({
					pathname: `/application-landlord/${response.data._id}/home-details`,
				})
			})
			.catch((error) => {
				if (error.response.status === 400) {
					setError('An error occured when adding your new property. Please try again');
				} else if (error.response.status === 500) {
					setError('An error occured on the server while update the resources. Please try again.');
				} else {
					setError('An error occured. Please try again')
				}
			}).finally((res) => {
				setLoading(false);
			});
	}

	return (
		<div className="mx-20 mt-10 pb-36" >
			<div className="py-16 px-6 sm:px-6 sm:py-24 lg:px-8">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="sm:text-4xl text-3xl leading-10 font-bold tracking-tight text-gray-900">
						Welcome onboard !
						<br />
					</h2>
					<p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
						We&#39;re thrilled to have you join us in providing
						comfortable
						and reliable
						rooms for our tenants. you can add your first property now or comeback later.
					</p>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						<a onClick={(e) => router.push('/', undefined, { shallow: true })} href="#" className="text-base underline font-semibold leading-7 text-gray-900">
							Skip for later
						</a>

						<a
							href="#">
							<Button onClick={createProperty} title={'Add property'} icon={<span aria-hidden="true" className={'ml-2'}>→</span>}/>
						</a>
					</div>
				</div>
			</div>
		</div>
)

}