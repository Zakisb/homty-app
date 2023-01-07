import {MagnifyingGlassIcon, EnvelopeIcon, MapPinIcon, BanknotesIcon, EllipsisHorizontalCircleIcon} from "@heroicons/react/20/solid";


const Header = ({}) => {
    return (
        <main className="pt-24">
            <div className="relative px-6 lg:px-8">
                <div className="mx-auto max-w-6xl px-12 pt-10 pb-32 sm:pt-18 sm:pb-23">
                    <div>
                        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                            <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  <span className="text-gray-600">
                    Discover new way of living.{' '}
                      <a href="#" className="font-semibold text-indigo-600">
                      <span className="absolute inset-0" aria-hidden="true" />
                      Read more <span aria-hidden="true">&rarr;</span>
                    </a>
                  </span>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold tracking-tight sm:text-center sm:text-3xl">
                                Find convenient coliving homes.
                            </h1>
                            <div className="mt-8 sm:justify-center">
                                <form action="#" method="POST">
                                    <div className="overflow-hidden shadow sm:rounded-md">
                                        <div className="bg-white px-2 py-5 sm:p-6">
                                            <div className="grid lg:grid-cols-7 md:grid-cols-6  content-center justify-items-stretch gap-6">
                                                <div className="md:col-span-2 sm:col-span-full">
                                                    <div className="relative mt-1 rounded-md shadow-sm">
                                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                            <MapPinIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                        </div>
                                                        <input
                                                            type="text"
                                                            name="localisation"
                                                            id="email"
                                                            className="block w-full rounded-md border-gray-300 py-3 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                            placeholder="Where"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="md:col-span-2 sm:col-span-full">
                                                    <div className="relative mt-1 rounded-md shadow-sm">
                                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                            <BanknotesIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                        </div>
                                                        <input
                                                            type="text"
                                                            name="localisation"
                                                            id="email"
                                                            className="block w-full rounded-md border-gray-300 py-3 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                            placeholder="Your budget"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="md:col-span-2 sm:col-span-full">
                                                    <div className="relative mt-1 rounded-md shadow-sm">
                                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                            <EllipsisHorizontalCircleIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                        </div>
                                                        <input
                                                            type="text"
                                                            name="localisation"
                                                            id="email"
                                                            className="block w-full rounded-md border-gray-300 py-3 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                            placeholder="More"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="lg:col-span-1 sm:col-span-full">
                                                    <button
                                                        type="button"
                                                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 w-full px-4 py-2 text-sm font-medium h-full w-full text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                    >
                                                        Search
                                                        <MagnifyingGlassIcon className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
                                                    </button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                            <svg
                                className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                                viewBox="0 0 1155 678"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                                    fillOpacity=".3"
                                    d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                                />
                                <defs>
                                    <linearGradient
                                        id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                                        x1="1155.49"
                                        x2="-78.208"
                                        y1=".177"
                                        y2="474.645"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#9089FC" />
                                        <stop offset={1} stopColor="#FF80B5" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    );
}

export default Header;