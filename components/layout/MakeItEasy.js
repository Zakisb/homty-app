import {MagnifyingGlassIcon, SparklesIcon} from "@heroicons/react/20/solid";
import {
    BoltIcon,
    ChatBubbleBottomCenterTextIcon,
    EnvelopeIcon,
    GlobeAltIcon,
    ScaleIcon,
} from '@heroicons/react/24/outline'

const tabs = [
    { name: 'Tenants', href: '#', current: true },
    { name: 'Landlords', href: '#', current: false },
]

const transferFeatures = [
    {
        id: 1,
        name: 'Property Insurance',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis.',
        icon: 'insuranceIcon',
    },
    {
        id: 2,
        name: 'Best Price',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        icon: 'bestPrice',
    },
    {
        id: 3,
        name: 'Lowest Commission',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. .',
        icon: 'commisionIconm',
    },
]
const communicationFeatures = [
    {
        id: 1,
        name: 'Mobile notifications',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: ChatBubbleBottomCenterTextIcon,
    },
    {
        id: 2,
        name: 'Reminder emails',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: EnvelopeIcon,
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}



const MakeItEasy = ({}) => {
    return (
        <div className="overflow-hidden bg-gray-50 py-16 lg:py-24 lg:px-4">
            <div className="relative mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8">
                <svg
                    className="absolute left-full hidden -translate-x-1/2 -translate-y-1/4 transform lg:block"
                    width={404}
                    height={784}
                    fill="none"
                    viewBox="0 0 404 784"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
                            x={0}
                            y={0}
                            width={20}
                            height={20}
                            patternUnits="userSpaceOnUse"
                        >
                            <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width={404} height={784} fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
                </svg>

                <div className="relative">
                    <h2 className="text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                        We make it easy for tenants and landlords

                    </h2>
                    <p className="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-500">
                        Whether it’s selling your current home, getting financing, or buying a new home, we make it easy  and efficient. The best part? you’ll save a bunch of money and time with our services.
                    </p>
                </div>

                <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
                    <div className="relative">
                        <div>
                            <div className="sm:hidden">
                                <label htmlFor="tabs" className="sr-only">
                                    Select a tab
                                </label>
                                {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
                                <select
                                    id="tabs"
                                    name="tabs"
                                    className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                                    defaultValue={tabs.find((tab) => tab.current)?.name}
                                >
                                    {tabs.map((tab) => (
                                        <option key={tab.name}>{tab.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="hidden sm:block mb-5">
                                <nav className="flex space-x-4" aria-label="Tabs">
                                    {tabs.map((tab) => (
                                        <button
                                            key={tab.name}
                                            className={classNames(
                                                tab.current ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:text-gray-700',
                                                'px-3 py-2 font-medium text-sm rounded-md'
                                            )}
                                            aria-current={tab.current ? 'page' : undefined}
                                        >
                                            {tab.name}
                                        </button>
                                    ))}
                                </nav>
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">The new way to find your new home</h3>
                        <p className="mt-3 text-lg text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minima sequi recusandae, porro maiores
                            officia assumenda.
                        </p>

                        <dl className="mt-10 space-y-10">
                            {transferFeatures.map((item) => (
                                <div key={item.id} className="relative">
                                    <dt>
                                        <div className="absolute flex h-12 w-12 items-center justify-center rounded-xl  text-white">
                                            <item.icon className="h-8 w-8" aria-hidden="true" />
                                            <img
                                                className="relative mx-auto"
                                                src={`/assets/img/${item.icon}.png`}
                                                alt=""
                                            />
                                        </div>
                                        <p className="ml-16 text-lg font-medium leading-6 text-gray-900">{item.name}</p>
                                    </dt>
                                    <dd className="mt-2 ml-16 text-base text-gray-500">{item.description}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>

                    <div className="relative -mx-4 mt-10 lg:mt-0" aria-hidden="true">
                        <svg
                            className="absolute left-1/2 -translate-x-1/2 translate-y-16 transform lg:hidden"
                            width={784}
                            height={404}
                            fill="none"
                            viewBox="0 0 784 404"
                        >
                            <defs>
                                <pattern
                                    id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                                    x={0}
                                    y={0}
                                    width={20}
                                    height={20}
                                    patternUnits="userSpaceOnUse"
                                >
                                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width={784} height={404} fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)" />
                        </svg>
                        <img
                            className="relative mx-auto"
                            width={490}
                            src="https://tailwindui.com/img/features/feature-example-1.png"
                            alt=""
                        />
                    </div>
                </div>

                <svg
                    className="absolute right-full hidden translate-x-1/2 translate-y-12 transform lg:block"
                    width={404}
                    height={784}
                    fill="none"
                    viewBox="0 0 404 784"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                            x={0}
                            y={0}
                            width={20}
                            height={20}
                            patternUnits="userSpaceOnUse"
                        >
                            <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width={404} height={784} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
                </svg>
            </div>
        </div>
    );
}

export default MakeItEasy;