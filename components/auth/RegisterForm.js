import { useState } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import { Router, useRouter } from 'next/router';
import * as yup from 'yup';
import Card from '../ui/Card';
import InputText from '../ui/InputText';
import { Form, FormField, SubmitButton, ErrorMessage } from "../ui/forms";
import { Switch } from '@headlessui/react';
import authApi from '/modules/auth/queries'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useEffect } from 'react';

export default function RegisterForm() {
    const [agreed, setAgreed] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const router = useRouter()
    const { role } = router.query
    const { data: session } = useSession()
    const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

    const validationSchema = yup.object().shape({
        /*firstName: yup
            .string()
            .min(3, "First name must be at least 3 characters long")
            .required("First name is required"),
        lastName: yup
            .string()
            .min(3, "Last name must be at least 3 characters long")
            .required("Last name is required"),
        email: yup.string().email("Please enter a valid email").required("Your email adresse is required"),
        password: yup
            .string()
            .min(6, "Password must be at least 6 characters long")
            .matches(passwordRules, { message: "Please create a stronger password. Your password should contain atleast one uppercase letter" })
            .required("Password is required"),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref("password"), null], "Passwords must match")
            .required("Matching password is required"),*/
    });

    const handleOAuthSignIn = (provider) => () => signIn(provider, {callbackUrl: `/api/redirect?role=${role ? role : 'tenant'}`})

    const onSubmit = async (user, { resetForm }) => {
        setLoading(true);
        const register = await authApi
            .signUp({...user})
            .then(function (response) {
                setError(null)
                signIn('credentials', {callbackUrl:`/application-form-${role.toLowerCase()}`, id: response.data._id, email: response.data.email, fullName:`${response.data.firstName} ${response.data.lastName}`, postRegistration:true, image: response.data.photo, role: role,  newUser:true});
                /*resetForm();*/
            })
            .catch(function (error) {
                if (error.response.status === 409) {
                    setError(error.response.data.message)
                } else {
                    setError('An error occured. Please try again')
                }
            }).finally((res) => {
                setLoading(false);
            });
    };

    useEffect(()=>{
        console.log(session)
        console.log(role)
    })

    return (
            <Card className="md:p-16">
                <h2 className="mb-7  text-3xl font-bold tracking-tight text-center">Join as tenant</h2>
                <p className="my-4 text-sm text-gray-600 text-center">
                </p>
                <div className="text-center">
                    <div className="mt-2 grid md:grid-cols-2 gap-3">
                        <div>
                            <a
                                href="#"
                                onClick={handleOAuthSignIn('facebook')}
                                className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                            >
                                <span className="sr-only">Register with Facebook</span>
                                <svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 44 44" className="h-6 w-6" ><linearGradient id="Ld6sqrtcxMyckEl6xeDdMa" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#2aa4f4"/><stop offset="1" stopColor="#007ad9"/></linearGradient><path fill="url(#Ld6sqrtcxMyckEl6xeDdMa)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"/><path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"/></svg>
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
                                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 44 44" className="h-6 w-6" ><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>
                                <span className="font-bold mt-0.5 ml-2">Continue with Google</span>
                            </a>
                        </div>
                    </div>
                </div>
                <p className="my-7 text-center border-b border-solid height leading-[.2rem]"><span className="px-2 bg-white">or</span> </p>
                <div className="mt-6">
                    <Form
                        initialValues={{ firstName: "", lastName: "", email: "", password:"", confirmPassword:"" }}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >
                        <div className="grid md:grid-cols-2 md:gap-3.5 gap-5 ">
                            <div>
                                <FormField
                                    name="firstName"
                                    label={'First name'}
                                    placeholder={'Enter your first name'}
                                />
                            </div>
                            <div className="">
                                <FormField
                                    name="lastName"
                                    label={'Last name'}
                                    placeholder={'Enter your last name'}
                                />
                            </div>
                            <div className="md:col-span-2">
                                <FormField
                                    label="Email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email adresse"
                                />
                            </div>
                            <div className="md:col-span-2">
                                <FormField
                                    name="password"
                                    label="Password"
                                    type="password"
                                    placeholder="Enter your password"
                                />
                            </div>
                            <div className="md:col-span-2">
                                <FormField
                                    name="confirmPassword"
                                    label="Confirm password"
                                    type="password"
                                    placeholder="Confirm your password"
                                />
                            </div>
                            <div className="flex md:col-span-2 my-2">
                                <div className="flex-shrink-1">
                                    <Switch
                                        checked={agreed}
                                        onChange={setAgreed}
                                        className={cn(
                                            agreed ? 'bg-indigo-600' : 'bg-gray-200',
                                            'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                                        )}
                                    >
                                        <span className="sr-only">Agree to policies</span>
                                        <span
                                            aria-hidden="true"
                                            className={cn(
                                                agreed ? 'translate-x-5' : 'translate-x-0',
                                                'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                                            )}
                                        />
                                    </Switch>
                                </div>
                                <div className="ml-3">
                                    <p className="text-md text-gray-500">
                                        By selecting this, you agree Homty Terms of Service{' '}
                                        <a href="#" className="font-medium text-brand-secondary ">
                                            User Agreement
                                        </a>{' '}
                                        and{' '}
                                        <a href="#" className="font-medium text-brand-secondary  ">
                                            Privacy Policy
                                        </a>
                                        .
                                    </p>
                                </div>
                            </div>
                            <SubmitButton classNames={'md:col-span-2'} title={'Create my account'} isLoading={loading}/>
                        </div>
                        <ErrorMessage visible={error} error={error}/>
                    </Form>
                </div>
                <p className="mt-5 text-sm text-gray-600 text-center">
                    Already have an account?{' '}
                    <Link href='/login' >
                        <a href="#" className="font-medium text-indigo-600 underline hover:text-indigo-500">
                            Log in
                        </a>
                    </Link>
                </p>
            </Card>
    )
}
