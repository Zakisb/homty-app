import { Fragment, useState, useEffect } from 'react';
import { Popover, Transition, Menu, Dialog, Tab } from '@headlessui/react';
import Link from 'next/link';
import {
	ArrowPathIcon,
	Bars3Icon,
	BookmarkSquareIcon,
	CalendarIcon,
	ChartBarIcon,
	CursorArrowRaysIcon,
	LifebuoyIcon,
	PhoneIcon,
	PlayIcon,
	ShieldCheckIcon,
	Squares2X2Icon,
	XMarkIcon,
	UserCircleIcon,
	GlobeAltIcon,
	PencilSquareIcon,
	ArrowRightOnRectangleIcon,
	UserIcon,
	ChatBubbleLeftEllipsisIcon,
	BriefcaseIcon,
	CogIcon,
	HomeIcon

} from '@heroicons/react/24/outline';
import {
	ChevronDownIcon, MagnifyingGlassIcon, PlusIcon

} from '@heroicons/react/20/solid';
import Button from '../../ui/Button';
import { signOut, useSession } from 'next-auth/react';

const solutions = [{
	name: 'Analytics',
	description: 'Get a better understanding of where your traffic is coming from.',
	href: '#',
	icon: ChartBarIcon
}, {
	name: 'Engagement',
	description: 'Speak directly to your customers in a more meaningful way.',
	href: '#',
	icon: CursorArrowRaysIcon
}, {
	name: 'Security', description: 'Your customers\' data will be safe and secure.', href: '#', icon: ShieldCheckIcon
}, {
	name: 'Integrations',
	description: 'Connect with third-party tools that you\'re already using.',
	href: '#',
	icon: Squares2X2Icon
}, {
	name: 'Automations',
	description: 'Build strategic funnels that will drive your customers to convert',
	href: '#',
	icon: ArrowPathIcon
}];
const resources = [{
	name: 'Help Center',
	description: 'Get all of your questions answered in our forums or contact support.',
	href: '#',
	icon: LifebuoyIcon
}, {
	name: 'Guides',
	description: 'Learn how to maximize our platform to get the most out of it.',
	href: '#',
	icon: BookmarkSquareIcon
}, {
	name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon
}];
const links = [{ href: '/dashboard', label: 'My applications', icon: BriefcaseIcon }, {
	href: '/dashboard',
	label: 'Messages',
	icon: ChatBubbleLeftEllipsisIcon
}, { href: '/dashboard', label: 'Account settings', icon: CogIcon }, {
	href: '/dashboard',
	label: 'List my property',
	icon: HomeIcon
}, { href: '/dashboard', label: 'Logout', icon: ArrowRightOnRectangleIcon, onClick: () => signOut({ callbackUrl: '/'})}];

function classNames (...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function NavBar () {
	const { data: session } = useSession();
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	useEffect(() => {

	});
	return (<div className="fixed top-0 left-0 right-0 z-50 w-full">
			<Popover className="relative bg-white">
				<div className="mx-auto px-4 sm:px-6 border-b-2 border-gray-100 py-1">
					<div className="flex items-center justify-between  py-2 md:justify-start md:space-x-10">
						<div className="flex justify-start lg:w-0 lg:flex-1">
							<a href="#">
								<span className="sr-only">Homty</span>
								<Link href="/"><img
									className="h-8 w-auto sm:h-10"
									src="/assets/img/logo.png"
									alt=""
								/></Link>

							</a>
						</div>
						<div className="-my-2 -mr-2 md:hidden">
							<Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
								<span className="sr-only">Open menu</span>
								<Bars3Icon className="h-6 w-6" aria-hidden="true"/>
							</Popover.Button>
						</div>
						<Popover.Group as="nav" className="hidden space-x-10 md:flex">
							<a href="#" className="text-base font-medium text-brandDark hover:text-gray-900">
								Why Homty
							</a>
							<a href="#" className="text-base font-medium text-brandDark hover:text-gray-900">
								How it works
							</a>
							<a href="#" className="text-base font-medium text-brandDark hover:text-gray-900">
								Find home
							</a>

							<Popover className="relative">
								{({ open }) => (<>
										<Popover.Button
											className={classNames(open ? 'text-gray-900' : 'text-brandDark', 'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2')}
										>
											<span>More</span>
											<ChevronDownIcon
												className={classNames(open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500')}
												aria-hidden="true"
											/>
										</Popover.Button>

										<Transition
											as={Fragment}
											enter="transition ease-out duration-200"
											enterFrom="opacity-0 translate-y-1"
											enterTo="opacity-100 translate-y-0"
											leave="transition ease-in duration-150"
											leaveFrom="opacity-100 translate-y-0"
											leaveTo="opacity-0 translate-y-1"
										>
											<Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
												<div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
													<div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
														{resources.map((item) => (<a
																key={item.name}
																href={item.href}
																className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
															>
																<item.icon className="h-6 w-6 flex-shrink-0 text-indigo-600"
																           aria-hidden="true"/>
																<div className="ml-4">
																	<p className="text-base font-medium text-gray-900">{item.name}</p>
																	<p className="mt-1 text-sm text-gray-500">{item.description}</p>
																</div>
															</a>))}
													</div>
												</div>
											</Popover.Panel>
										</Transition>
									</>)}
							</Popover>
						</Popover.Group>
						<div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
							{session ? (
								<>
									<div className={'mr-4'}>
										<Link href="/dashboard">
											Manage listings
										</Link>
									</div>
									<Menu as="div" className="relative mr-3">
										<div>
											<Menu.Button className="flex border border-gray-200 rounded-full py-1 text-sm focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-indigo-100">
												<span className="sr-only">Open user menu</span>
												<div className="flex justify-around p-1">
													<UserIcon className="h-8 w-8 p-2 mx-2 flex-shrink-0  rounded-full text-brandDark bg-indigo-100"
													          aria-hidden="true"/>
													<Bars3Icon className="h-8 w-8 p-1 indigo-100 mr-2 flex-shrink-0"
													           aria-hidden="true"/>
												</div>
											</Menu.Button>
										</div>
										<Transition
											as={Fragment}
											enter="transition ease-out duration-100"
											enterFrom="transform opacity-0 scale-95"
											enterTo="transform opacity-100 scale-100"
											leave="transition ease-in duration-75"
											leaveFrom="transform opacity-100 scale-100"
											leaveTo="transform opacity-0 scale-95"
										>
											<Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
												{links.map((link) => (<div key={link.label} className="px-1 py-1 ">
														<Menu.Item>
															{({ active }) => (<button
																	className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
																	onClick={link.onClick ? link.onClick : false}
																>
																	<link.icon
																		className="mr-2 h-5 w-5"
																		aria-hidden="true"
																	/>
																	{link.label}
																</button>)}
														</Menu.Item>
													</div>))}
											</Menu.Items>
										</Transition>
									</Menu>
								</>
							) : (
								<>
									<Link href="/login">
										Login
									</Link>
									<Link href="/apply-as">
										<a><Button title={'Sign up'} size={'small'} classNames={'w-24 ml-4'}/></a>
									</Link>
								</>
							)}
						</div>
					</div>
				</div>

				<Transition
					as={Fragment}
					enter="duration-200 ease-out"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="duration-100 ease-in"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					<Popover.Panel focus
					               className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
						<div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
							<div className="px-5 pt-5 pb-6">
								<div className="flex items-center justify-between">
									<div>
										<Link href="/">
											<img
												className="h-8 w-auto"
												src="/assets/img/logotype.png"
												alt="Your Company"
											/>
										</Link>
									</div>
									<div className="-mr-2">
										<Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
											<span className="sr-only">Close menu</span>
											<XMarkIcon className="h-6 w-6" aria-hidden="true"/>
										</Popover.Button>
									</div>
								</div>
								<div className="mt-6">
									<nav className="grid gap-y-8">
										{solutions.map((item) => (<a
												key={item.name}
												href={item.href}
												className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
											>
												<item.icon className="h-6 w-6 flex-shrink-0 text-indigo-600"
												           aria-hidden="true"/>
												<span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
											</a>))}
									</nav>
								</div>
							</div>
							<div className="space-y-6 py-6 px-5">
								<div className="grid grid-cols-2 gap-y-4 gap-x-8">
									<a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
										Why Homty
									</a>
									<a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
										How it works
									</a>
									<a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
										Find home
									</a>
									{resources.map((item) => (<a
											key={item.name}
											href={item.href}
											className="text-base font-medium text-gray-900 hover:text-gray-700"
										>
											{item.name}
										</a>))}
								</div>
								<div>
									<button
										type="button"
										className="relative inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
									>
										<PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true"/>
										<span>Add listing</span>
									</button>
									<p className="mt-6 text-center text-base font-medium text-gray-500">
										Existing customer?{' '}
										<a href="#" className="text-indigo-600 hover:text-indigo-500">
											Sign in
										</a>
									</p>
								</div>

							</div>
						</div>
					</Popover.Panel>
				</Transition>
			</Popover>
		</div>);
}
