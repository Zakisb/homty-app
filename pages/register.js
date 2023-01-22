
import * as yup from 'yup';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useSession, signIn, signOut } from 'next-auth/react';
import {
	ErrorMessage,
	Form,
	FormField,
	FormSelect,
	SubmitButton,
	FormDatePicker,
	FormPhone
} from '../components/ui/forms';
import { useEffect } from 'react';
import Link from 'next/link';

export default function Register () {
	const router = useRouter();
	const onSubmit = async (values, actions) => {

		const user = {};
		user.firstName = values.firstName;
		user.lastName = values.lastName;
		user.email = values.email;
		user.password = values.password;

		await axios
			.post('http://localhost:8000/signUp', user)
			.then((response) => {
				router.push('/');
			})
			.catch((err) => {
				console.log(err);
			});

	};
	const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
	const validationSchema = yup.object().shape({
		firstName: yup
			.string()
			.min(3, 'First name must be at least 3 characters long')
			.required('First name is required'),
		lastName: yup
			.string()
			.min(3, 'Last name must be at least 3 characters long')
			.required('Last name is required'),
		email: yup.string().email('Please enter a valid email').required('Your email adresse is required'),
		password: yup
			.string()
			.min(6, 'Password must be at least 6 characters long')
			.matches(passwordRules, { message: 'Please create a stronger password' })
			.required('Password is required'),
		confirmPassword: yup
			.string()
			.oneOf([yup.ref('password'), null], 'Passwords must match')
			.required('Matching password is required')
	});

	useEffect(() => {
	}, []);

	return (
		<div className="mx-auto mx-10 h-screen p-0  mt-32 border-gray-100 border-solid border-2 h-full">
			<div className="flex justify-center mt-2">
				<div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
					<div className="mx-auto w-full max-w-sm lg:w-96">
						<div>
							<img
								className="h-12 w-auto"
								src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
								alt="Your Company"
							/>
							<h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">Create an account</h2>
							<p className="mt-2 text-sm text-gray-600">
								Or{' '}
								<Link href="/login">
									<a href="#" className="font-medium text-indigo-600 underline hover:text-indigo-500">
										Login
									</a>
								</Link>
							</p>
						</div>
						<div className="mt-8">
							<div>
								<div>
									<p className="text-sm font-medium text-gray-700">Register with</p>

									<div className="mt-2 grid grid-cols-2 gap-3">
										<div>
											<a
												href="#"
												onClick={() => signIn()}
												className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
											>
												<span className="sr-only">Register with Google</span>
												<svg className="h-5 w-5"
												     aria-hidden="true"
												     fill="currentColor"
												     viewBox="0 0 28 28">
													<path xmlns="http://www.w3.org/2000/svg"
													      d="M 15.003906 3 C 8.3749062 3 3 8.373 3 15 C 3 21.627 8.3749062 27 15.003906 27 C 25.013906 27 27.269078 17.707 26.330078 13 L 25 13 L 22.732422 13 L 15 13 L 15 17 L 22.738281 17 C 21.848702 20.448251 18.725955 23 15 23 C 10.582 23 7 19.418 7 15 C 7 10.582 10.582 7 15 7 C 17.009 7 18.839141 7.74575 20.244141 8.96875 L 23.085938 6.1289062 C 20.951937 4.1849063 18.116906 3 15.003906 3 z"/>
												</svg>
											</a>
										</div>

										<div>
											<a
												href="#"
												onClick={() => console.log('ssss')}
												className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
											>
												<span className="sr-only">Register with Facebook</span>
												<svg className="h-5 w-5"
												     aria-hidden="true"
												     fill="currentColor"
												     viewBox="0 0 20 20">
													<path
														fillRule="evenodd"
														d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
														clipRule="evenodd"
													/>
												</svg>
											</a>
										</div>
									</div>
								</div>

								<div className="relative mt-6">
									<div className="absolute inset-0 flex items-center" aria-hidden="true">
										<div className="w-full border-t border-gray-300"/>
									</div>
									<div className="relative flex justify-center text-sm">
										<span className="bg-white px-2 text-gray-500">Or continue with</span>
									</div>
								</div>
							</div>

							<div className="mt-6">
								<Form
									initialValues={{
										firstName: '',
										lastName: '',
										email: '',
										password: '',
										confirmPassword: ''
									}}
									validationSchema={validationSchema}
									onSubmit={onSubmit}
								>
										<FormField name={`firstName`}
										           label={`First name`}
										           placeholder={"Enter your first name"}/>

										{/*<FormField
											label="Last name"
											name="lastName"
											type="text"
											placeholder="Enter your last name"
										/>
										<FormField
											label="Email"
											name="email"
											type="text"
											placeholder="Enter your email adresse"
										/>
										<FormField
											label="Password"
											name="password"
											type="password"
											placeholder="Enter your password"
										/>
										<FormField
											label="Confirm password"
											name="confirmPassword"
											type="password"
											placeholder="Confirm your password"
										/>
										<button
											type="submit"
											className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
										>
											Register
										</button>*/}
								</Form>
								{/*<form action="#" method="POST" className="space-y-6">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                            First name
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                autoComplete="email"
                                                required
                                                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                            Last name
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                autoComplete="email"
                                                required
                                                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                            Email address
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                autoComplete="email"
                                                required
                                                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                            Password
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                id="password"
                                                name="password"
                                                type="password"
                                                autoComplete="current-password"
                                                required
                                                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                            Confirm password
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                id="password"
                                                name="password"
                                                type="password"
                                                autoComplete="current-password"
                                                required
                                                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <button
                                            type="submit"
                                            className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                        >
                                            Register
                                        </button>
                                    </div>
                                </form>*/}
							</div>
						</div>
					</div>
				</div>
				<div className="relative hidden w-0 flex-1 lg:block">
					<img
						className="absolute inset-0 h-full w-full object-cover"
						src="/assets/img/coliving.jpg"
						alt=""
					/>
				</div>
			</div>
		</div>);
}
