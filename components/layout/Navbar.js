import {Fragment, useState} from 'react'
import { Popover, Transition, Menu, Dialog, Tab } from '@headlessui/react'
import Link from 'next/link'
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
    UserIcon
} from '@heroicons/react/24/outline'
import {
    ChevronDownIcon,
    MagnifyingGlassIcon,
    PlusIcon,
    ShoppingBagIcon,
    ShoppingCartIcon,
} from '@heroicons/react/20/solid'

const solutions = [
    {
        name: 'Analytics',
        description: 'Get a better understanding of where your traffic is coming from.',
        href: '#',
        icon: ChartBarIcon,
    },
    {
        name: 'Engagement',
        description: 'Speak directly to your customers in a more meaningful way.',
        href: '#',
        icon: CursorArrowRaysIcon,
    },
    { name: 'Security', description: "Your customers' data will be safe and secure.", href: '#', icon: ShieldCheckIcon },
    {
        name: 'Integrations',
        description: "Connect with third-party tools that you're already using.",
        href: '#',
        icon: Squares2X2Icon,
    },
    {
        name: 'Automations',
        description: 'Build strategic funnels that will drive your customers to convert',
        href: '#',
        icon: ArrowPathIcon,
    },
]
const callsToAction = [
    { name: 'Watch Demo', href: '#', icon: PlayIcon },
    { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]
const resources = [
    {
        name: 'Help Center',
        description: 'Get all of your questions answered in our forums or contact support.',
        href: '#',
        icon: LifebuoyIcon,
    },
    {
        name: 'Guides',
        description: 'Learn how to maximize our platform to get the most out of it.',
        href: '#',
        icon: BookmarkSquareIcon,
    },
    { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
]
const recentPosts = [
    { id: 1, name: 'Boost your conversion rate', href: '#' },
    { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
    { id: 3, name: 'Improve your customer experience', href: '#' },
]



const currencies = ['CAD', 'USD', 'AUD', 'EUR', 'GBP']
const navigation = {
    categories: [
        {
            name: 'Women',
            featured: [
                { name: 'Sleep', href: '#' },
                { name: 'Swimwear', href: '#' },
                { name: 'Underwear', href: '#' },
            ],
            collection: [
                { name: 'Everything', href: '#' },
                { name: 'Core', href: '#' },
                { name: 'New Arrivals', href: '#' },
                { name: 'Sale', href: '#' },
            ],
            categories: [
                { name: 'Basic Tees', href: '#' },
                { name: 'Artwork Tees', href: '#' },
                { name: 'Bottoms', href: '#' },
                { name: 'Underwear', href: '#' },
                { name: 'Accessories', href: '#' },
            ],
            brands: [
                { name: 'Full Nelson', href: '#' },
                { name: 'My Way', href: '#' },
                { name: 'Re-Arranged', href: '#' },
                { name: 'Counterfeit', href: '#' },
                { name: 'Significant Other', href: '#' },
            ],
        },
        {
            name: 'Men',
            featured: [
                { name: 'Casual', href: '#' },
                { name: 'Boxers', href: '#' },
                { name: 'Outdoor', href: '#' },
            ],
            collection: [
                { name: 'Everything', href: '#' },
                { name: 'Core', href: '#' },
                { name: 'New Arrivals', href: '#' },
                { name: 'Sale', href: '#' },
            ],
            categories: [
                { name: 'Artwork Tees', href: '#' },
                { name: 'Pants', href: '#' },
                { name: 'Accessories', href: '#' },
                { name: 'Boxers', href: '#' },
                { name: 'Basic Tees', href: '#' },
            ],
            brands: [
                { name: 'Significant Other', href: '#' },
                { name: 'My Way', href: '#' },
                { name: 'Counterfeit', href: '#' },
                { name: 'Re-Arranged', href: '#' },
                { name: 'Full Nelson', href: '#' },
            ],
        },
    ],
    pages: [
        { name: 'Company', href: '#' },
        { name: 'Stores', href: '#' },
    ],
}
const offers = [
    { name: 'Download the app', description: 'Get an exclusive $5 off code', href: '#' },
    { name: "Return when you're ready", description: '60 days of free returns', href: '#' },
    { name: 'Sign up for our newsletter', description: '15% off your first order', href: '#' },
]
const trendingProducts = [
    {
        id: 1,
        name: 'Machined Pen',
        color: 'Black',
        price: '$35',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
        imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
        availableColors: [
            { name: 'Black', colorBg: '#111827' },
            { name: 'Brass', colorBg: '#FDE68A' },
            { name: 'Chrome', colorBg: '#E5E7EB' },
        ],
    },
    // More products...
]
const collections = [
    {
        name: 'Desk and Office',
        description: 'Work from home accessories',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
        imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
        href: '#',
    },
    {
        name: 'Self-Improvement',
        description: 'Journals and note-taking',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
        imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
        href: '#',
    },
    {
        name: 'Travel',
        description: 'Daily commute essentials',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '#',
    },
]
const testimonials = [
    {
        id: 1,
        quote:
            'My order arrived super quickly. The product is even better than I hoped it would be. Very happy customer over here!',
        attribution: 'Sarah Peters, New Orleans',
    },
    {
        id: 2,
        quote:
            'I had to return a purchase that didn’t fit. The whole process was so simple that I ended up ordering two new items!',
        attribution: 'Kelly McPherson, Chicago',
    },
    {
        id: 3,
        quote:
            'Now that I’m on holiday for the summer, I’ll probably order a few more shirts. It’s just so convenient, and I know the quality will always be there.',
        attribution: 'Chris Paul, Phoenix',
    },
]
const footerNavigation = {
    products: [
        { name: 'Bags', href: '#' },
        { name: 'Tees', href: '#' },
        { name: 'Objects', href: '#' },
        { name: 'Home Goods', href: '#' },
        { name: 'Accessories', href: '#' },
    ],
    customerService: [
        { name: 'Contact', href: '#' },
        { name: 'Shipping', href: '#' },
        { name: 'Returns', href: '#' },
        { name: 'Warranty', href: '#' },
        { name: 'Secure Payments', href: '#' },
        { name: 'FAQ', href: '#' },
        { name: 'Find a store', href: '#' },
    ],
    company: [
        { name: 'Who we are', href: '#' },
        { name: 'Sustainability', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Terms & Conditions', href: '#' },
        { name: 'Privacy', href: '#' },
    ],
    legal: [
        { name: 'Terms of Service', href: '#' },
        { name: 'Return Policy', href: '#' },
        { name: 'Privacy Policy', href: '#' },
        { name: 'Shipping Policy', href: '#' },
    ],
    bottomLinks: [
        { name: 'Accessibility', href: '#' },
        { name: 'Privacy', href: '#' },
        { name: 'Terms', href: '#' },
    ],
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
export default function NavBar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="fixed top-0 left-0 right-0 z-50 w-full">
            <Popover className="relative bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 ">
                <div className="flex items-center justify-between border-b-2 border-gray-100 py-2 md:justify-start md:space-x-10">
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
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
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
                            {({ open }) => (
                                <>
                                    <Popover.Button
                                        className={classNames(
                                            open ? 'text-gray-900' : 'text-brandDark',
                                            'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                                        )}
                                    >
                                        <span>More</span>
                                        <ChevronDownIcon
                                            className={classNames(
                                                open ? 'text-gray-600' : 'text-gray-400',
                                                'ml-2 h-5 w-5 group-hover:text-gray-500'
                                            )}
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
                                                    {resources.map((item) => (
                                                        <a
                                                            key={item.name}
                                                            href={item.href}
                                                            className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                                                        >
                                                            <item.icon className="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                                                            <div className="ml-4">
                                                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                                            </div>
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        </Popover.Panel>
                                    </Transition>
                                </>
                            )}
                        </Popover>
                    </Popover.Group>
                    <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
                        <Menu as="div" className="relative mr-3">
                            <div>
                                <Menu.Button className="flex border border-gray-200 rounded-full py-1 text-sm focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-indigo-100">
                                    <span className="sr-only">Open user menu</span>
                                    <div className="flex justify-around p-1">
                                        <UserIcon className="h-8 w-8 p-2 mx-2 flex-shrink-0  rounded-full text-brandDark bg-indigo-100" aria-hidden="true"/>
                                        <Bars3Icon className="h-8 w-8 p-1 indigo-100 mr-2 flex-shrink-0" aria-hidden="true"/>
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
                                <Menu.Items className="absolute left-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link href="/register">
                                            <a
                                                href="/register"
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'group flex items-center px-4 py-2 text-sm'
                                                )}
                                            >
                                                <PencilSquareIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                                                Sign up
                                            </a>
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link href="/login">
                                            <a
                                                href="#"
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'group flex items-center px-4 py-2 text-sm'
                                                )}
                                            >
                                                <ArrowRightOnRectangleIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                                                Log in
                                            </a>
                                            </Link>
                                        )}
                                    </Menu.Item>
                                </Menu.Items>
                            </Transition>
                        </Menu>
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
                <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
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
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                            </div>
                            <div className="mt-6">
                                <nav className="grid gap-y-8">
                                    {solutions.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                                        >
                                            <item.icon className="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                                            <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                                        </a>
                                    ))}
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
                                {resources.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div>
                                <button
                                    type="button"
                                    className="relative inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
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
        </div>
    )
}
