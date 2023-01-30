import { getSession } from 'next-auth/react';
import authApi from '../../../modules/auth/queries';

const redirect = async (req, res) => {
	const session = await getSession({ req });
	const onboardingStatus = await authApi.checkOnboarding({
		email: session.user.email,
	}).then(response => {
		if(response.data) {
			res.redirect('/')
		} else {
			res.redirect(`/application-form-${req.query.role}`)
		}
	}).catch(err => {
		res.send(err)
	});
};

export default redirect