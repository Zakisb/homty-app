import { useState } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import { Router, useRouter } from 'next/router';
import * as yup from 'yup';
import Card from '../ui/Card';
import InputText from '../ui/InputText';
import { Form, FormField, SubmitButton, ErrorMessage } from '../ui/forms';
import { RadioGroup, Switch } from '@headlessui/react';
import authApi from '/modules/auth/queries';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useEffect } from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';
import { BiRadioCircle } from 'react-icons/bi';
import Button from '../ui/Button';
import TenantLayout from '../layout/tenant/TenantLayout';
import { UserIcon } from '@heroicons/react/24/outline';
import { LockClosedIcon } from '@heroicons/react/20/solid';

export default function LoginForm () {
	const [agreed, setAgreed] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const router = useRouter();
	const { role } = router.query;
	const { data: session } = useSession();
	const validationSchema = yup.object().shape({
		email: yup.string().email("Please enter a valid email").required("Your email adresse is required"),
		password: yup.string().required("Your password is required").min(6, 'Password must be at least 6 characters long')
	});

	const handleOAuthSignIn = (provider) => () =>   signIn(provider, {callbackUrl: `/api/redirect?role=${role ? role : 'tenant'}`})


	const onSubmit = async (credentials, { resetForm }) => {
		setLoading(true);
		setError(null);
		await signIn('credentials', {
			redirect: false,
			postRegistration: false,
			email: credentials.email,
			password: credentials.password,
			newUser: false
		}).then(({ ok, error, status }) => {
			if (ok) {
				router.push('/');
			} else {
				setError(JSON.parse(error).message);
			}
		}).finally((res) => {
			setLoading(false);
		});
	};

	useEffect(() => {
		/*const fetchData = async () => {
			const res = await fetch("/api/auth/session");
			const json = await res.json();
			console.log('respomnse is')
			console.log(json)
			console.log('end of res')
		};*/
		/*fetchData();*/
	}, []);


	return (
		<div className="flex pt-36 justify-center">
			<Card className="md:max-w-2xl md:w-10/12 md:px-16 md:py-12">
				<h3 className="text-center sm:text-3xl text-2xl mb-8">Log in to Homty</h3>
				<div className="md:px-16">
					<Form
						initialValues={{ email: '', password: '' }}
						validationSchema={validationSchema}
						onSubmit={onSubmit}
					>
						<FormField icon={<UserIcon className={cn('h-5 w-5 text-gray-500')}
						                           aria-hidden="true"/>}
						           name={'email'}
						           label={''}
						           placeholder={'Your email address'}/>
						<FormField icon={<LockClosedIcon className={cn('h-5 w-5 text-gray-500')}
						                                 aria-hidden="true"/>}
						           name={'password'}
						           label={''}
						           type={'password'}
						           placeholder={'Your account password'}/>
						<SubmitButton title={'Continue with your Email'} size={'small'} classNames={'mt-5'}/>
						<ErrorMessage visible={error} error={error} classNames={'mb-4'}/>
					</Form>
					<p className="my-5 text-center border-b border-solid height leading-[.2rem]">
						<span className="px-2 bg-white">or</span></p>
					<div className="text-center mt-8">
						<div className="grid md:grid-cols-1 gap-3">
							<div>
								<a
									href="#"
									onClick={handleOAuthSignIn('facebook')}
									className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
								>
									<span className="sr-only">Register with Facebook</span>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" className="h-6 w-6">
										<linearGradient id="Ld6sqrtcxMyckEl6xeDdMa"
										                x1="9.993"
										                x2="40.615"
										                y1="9.993"
										                y2="40.615"
										                gradientUnits="userSpaceOnUse">
											<stop offset="0" stopColor="#2aa4f4"/>
											<stop offset="1" stopColor="#007ad9"/>
										</linearGradient>
										<path fill="url(#Ld6sqrtcxMyckEl6xeDdMa)"
										      d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"/>
										<path fill="#fff"
										      d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"/>
									</svg>
									<span className="font-bold mt-0.5 ml-2">Continue with Facebook</span>
								</a>
							</div>
							<div>
								<a
									href="#"
									onClick={handleOAuthSignIn('google')}
									className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
								>
									<span className="sr-only">Register with Google</span>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" className="h-6 w-6">
										<path fill="#FFC107"
										      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
										<path fill="#FF3D00"
										      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
										<path fill="#4CAF50"
										      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
										<path fill="#1976D2"
										      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
									</svg>
									<span className="font-bold mt-0.5 ml-2">Continue with Google</span>
								</a>
							</div>
						</div>
					</div>
					<p className="my-10 text-center border-b border-solid height leading-[.2rem]">
						<span className="px-2 bg-white">New to Homty?</span></p>
					<p className="mt-5 text-sm text-gray-600 text-center">
						<Link href="/apply-as">
							<Button title={'Create an account'} size={'small'} classNames={'my-2'}/>
						</Link>
					</p>
				</div>
			</Card>
		</div>
	);
}
