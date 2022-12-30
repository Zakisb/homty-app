import {MagnifyingGlassIcon} from "@heroicons/react/20/solid";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBath, faBed, faCoffee, faHome} from '@fortawesome/free-solid-svg-icons'
import './Properties.module.css'
import {
    HeartIcon
} from '@heroicons/react/24/outline'

const PropertiesComponent = ({}) => {
    return (
        <div className="gray-bg container mx-auto xl:px-14 ">
            <div className="relative flex flex-col justify-between sm:flex-row sm:items-end">
                <div className="mx-auto w-full text-center">
                    <h2 className="text-3xl font-semibold md:text-4xl">
                        Based on your location
                    </h2>
                    <span className="mt-2 mb-16 block text-base font-normal text-gray-500 sm:text-md md:mt-3">
Some of our picked properties near you location.
</span>
                </div>
            </div>
            <div className="grid w-full gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                <div className="relative mx-auto w-full">
                    <a href="#"
                       className="relative inline-block w-full transform transition-transform duration-300 ease-in-out hover:-translate-y-2">
                        <div className="rounded-lg bg-white shadow">
                            <div className="relative flex h-52 justify-center overflow-hidden rounded-t-lg">
                                <div
                                    className="w-full transform transition-transform duration-500 ease-in-out hover:scale-110">
                                    <div className="absolute inset-0 bg-black bg-opacity-80">
                                        <img
                                            src="/assets/img/properties/1.jpg"
                                            alt=""/>
                                    </div>
                                </div>

                                <div className="absolute bottom-0 left-5 mb-3 flex">
                                    <p className="flex items-center font-medium text-white shadow-sm">
                                        <i className="fa fa-camera mr-2 text-xl text-white"></i>
                                        10
                                    </p>
                                </div>
                                <div className="absolute bottom-0 right-5 mb-3 flex">
                                    <p className="flex items-center font-medium text-gray-800">
                                        <i className="fa fa-heart mr-2 text-2xl text-white"></i>
                                    </p>
                                </div>
                                <span
                                    className="absolute top-0 left-0 z-10 mt-3 ml-3 inline-flex select-none rounded-lg bg-transparent px-3 py-2 text-lg font-medium text-white"> <i
                                    className="fa fa-star"></i> </span>
                            </div>
                            <div className="p-4">
                                <div className="mt-4">
                                    <div className="flex">
                                        <p className="text-primary mt-2 inline-block whitespace-nowrap rounded-xl font-semibold leading-tight">
                                        <span
                                            className="text-[19px] text-indigo-600 uppercase"> $3,200,000,000 </span>
                                            <span className="text-sm">/month</span>
                                        </p>
                                        <span
                                            className="text-indigo-700 ml-auto inline bg-indigo-50 rounded-[26px] inline-flex p-3 ring-4 ring-white"
                                        >
                                      <HeartIcon className="h-6 w-6" aria-hidden="true" />
                                    </span>
                                    </div>

                                    <h4 className="line-clamp-1 text-brandDark ">Kayak Point House</h4>

                                </div>
                                <div className="mt-4">
                                    <p className="line-clamp-1 text-gray-500 " >6 bedrooms Architect designed
                                        Imported fixtures and fittings Full basement Top of the [more]</p>
                                </div>
                                <div className="justify-center" >
                                    <div className="mt-4 flex justify-around space-x-3 overflow-hidden  px-1 pt-3 border-t border-indigo-20000 ">
                                        <p className="flex items-center font-medium text-gray-800">
                                            <FontAwesomeIcon icon={faBed} className="mr-1 text-indigo-600"/>
                                            2 beds
                                        </p>

                                        <p className="flex items-center font-medium text-gray-800">
                                            <FontAwesomeIcon icon={faBath} className="mr-1 text-indigo-600"/>
                                            3 Bathrooms
                                        </p>
                                        <p className="flex items-center font-medium text-gray-800">
                                            <FontAwesomeIcon icon={faHome} className="mr-1 text-indigo-600"/>
                                            8x10 m²<sup></sup>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="relative mx- auto w-full">
                    <a href="#"
                       className="relative inline-block w-full transform transition-transform duration-300 ease-in-out hover:-translate-y-2">
                        <div className="rounded-lg bg-white shadow">
                            <div className="relative flex h-52 justify-center overflow-hidden rounded-t-lg">
                                <div
                                    className="w-full transform transition-transform duration-500 ease-in-out hover:scale-110">
                                    <div className="absolute inset-0 bg-black bg-opacity-80">
                                        <img
                                            src="/assets/img/properties/2.jpg"
                                            alt=""/>
                                    </div>
                                </div>

                                <div className="absolute bottom-0 left-5 mb-3 flex">
                                    <p className="flex items-center font-medium text-white shadow-sm">
                                        <i className="fa fa-camera mr-2 text-xl text-white"></i>
                                        10
                                    </p>
                                </div>
                                <div className="absolute bottom-0 right-5 mb-3 flex">
                                    <p className="flex items-center font-medium text-gray-800">
                                        <i className="fa fa-heart mr-2 text-2xl text-white"></i>
                                    </p>
                                </div>
                                <span
                                    className="absolute top-0 left-0 z-10 mt-3 ml-3 inline-flex select-none rounded-lg bg-transparent px-3 py-2 text-lg font-medium text-white"> <i
                                    className="fa fa-star"></i> </span>
                            </div>
                            <div className="p-4">
                                <div className="mt-4">
                                    <div className="flex">
                                        <p className="text-primary mt-2 inline-block whitespace-nowrap rounded-xl font-semibold leading-tight">
                                        <span
                                            className="text-[19px] text-indigo-600 uppercase"> $3,200,000,000 </span>
                                            <span className="text-sm">/month</span>
                                        </p>
                                        <span
                                            className="text-indigo-700 ml-auto inline bg-indigo-50 rounded-[26px] inline-flex p-3 ring-4 ring-white"
                                        >
                                      <HeartIcon className="h-6 w-6" aria-hidden="true" />
                                    </span>
                                    </div>

                                    <h4 className="line-clamp-1 text-brandDark ">Kayak Point House</h4>

                                </div>
                                <div className="mt-4">
                                    <p className="line-clamp-1 text-gray-500 " >6 bedrooms Architect designed
                                        Imported fixtures and fittings Full basement Top of the [more]</p>
                                </div>
                                <div className="justify-center" >
                                    <div className="mt-4 flex justify-around space-x-3 overflow-hidden  px-1 pt-3 border-t border-indigo-20000 ">
                                        <p className="flex items-center font-medium text-gray-800">
                                            <FontAwesomeIcon icon={faBed} className="mr-1 text-indigo-600"/>
                                            2 beds
                                        </p>

                                        <p className="flex items-center font-medium text-gray-800">
                                            <FontAwesomeIcon icon={faBath} className="mr-1 text-indigo-600"/>
                                            3 Bathrooms
                                        </p>
                                        <p className="flex items-center font-medium text-gray-800">
                                            <FontAwesomeIcon icon={faHome} className="mr-1 text-indigo-600"/>
                                            8x10 m²<sup></sup>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="relative mx-auto w-full">
                    <a href="#"
                       className="relative inline-block w-full transform transition-transform duration-300 ease-in-out hover:-translate-y-2">
                        <div className="rounded-lg bg-white shadow">
                            <div className="relative flex h-52 justify-center overflow-hidden rounded-t-lg">
                                <div
                                    className="w-full transform transition-transform duration-500 ease-in-out hover:scale-110">
                                    <div className="absolute inset-0 bg-black bg-opacity-80">
                                        <img
                                            src="/assets/img/properties/3.jpg"
                                            alt=""/>
                                    </div>
                                </div>

                                <div className="absolute bottom-0 left-5 mb-3 flex">
                                    <p className="flex items-center font-medium text-white shadow-sm">
                                        <i className="fa fa-camera mr-2 text-xl text-white"></i>
                                        10
                                    </p>
                                </div>
                                <div className="absolute bottom-0 right-5 mb-3 flex">
                                    <p className="flex items-center font-medium text-gray-800">
                                        <i className="fa fa-heart mr-2 text-2xl text-white"></i>
                                    </p>
                                </div>
                                <span
                                    className="absolute top-0 left-0 z-10 mt-3 ml-3 inline-flex select-none rounded-lg bg-transparent px-3 py-2 text-lg font-medium text-white"> <i
                                    className="fa fa-star"></i> </span>
                            </div>
                            <div className="p-4">
                                <div className="mt-4">
                                    <div className="flex">
                                        <p className="text-primary mt-2 inline-block whitespace-nowrap rounded-xl font-semibold leading-tight">
                                        <span
                                            className="text-[19px] text-indigo-600 uppercase"> $3,200,000,000 </span>
                                            <span className="text-sm">/month</span>
                                        </p>
                                        <span
                                            className="text-indigo-700 ml-auto inline bg-indigo-50 rounded-[26px] inline-flex p-3 ring-4 ring-white"
                                        >
                                      <HeartIcon className="h-6 w-6" aria-hidden="true" />
                                    </span>
                                    </div>

                                    <h4 className="line-clamp-1 text-brandDark ">Kayak Point House</h4>

                                </div>
                                <div className="mt-4">
                                    <p className="line-clamp-1 text-gray-500 " >6 bedrooms Architect designed
                                        Imported fixtures and fittings Full basement Top of the [more]</p>
                                </div>
                                <div className="justify-center" >
                                    <div className="mt-4 flex justify-around space-x-3 overflow-hidden  px-1 pt-3 border-t border-indigo-20000 ">
                                        <p className="flex items-center font-medium text-gray-800">
                                            <FontAwesomeIcon icon={faBed} className="mr-1 text-indigo-600"/>
                                            2 beds
                                        </p>

                                        <p className="flex items-center font-medium text-gray-800">
                                            <FontAwesomeIcon icon={faBath} className="mr-1 text-indigo-600"/>
                                            3 Bathrooms
                                        </p>
                                        <p className="flex items-center font-medium text-gray-800">
                                            <FontAwesomeIcon icon={faHome} className="mr-1 text-indigo-600"/>
                                            8x10 m²<sup></sup>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="relative mx-auto w-full">
                    <a href="#"
                       className="relative inline-block w-full transform transition-transform duration-300 ease-in-out hover:-translate-y-2">
                        <div className="rounded-lg bg-white shadow">
                            <div className="relative flex h-52 justify-center overflow-hidden rounded-t-lg">
                                <div
                                    className="w-full transform transition-transform duration-500 ease-in-out hover:scale-110">
                                    <div className="absolute inset-0 bg-black bg-opacity-80">
                                        <img
                                            src="/assets/img/properties/4.jpg"
                                            alt=""/>
                                    </div>
                                </div>

                                <div className="absolute bottom-0 left-5 mb-3 flex">
                                    <p className="flex items-center font-medium text-white shadow-sm">
                                        <i className="fa fa-camera mr-2 text-xl text-white"></i>
                                        10
                                    </p>
                                </div>
                                <div className="absolute bottom-0 right-5 mb-3 flex">
                                    <p className="flex items-center font-medium text-gray-800">
                                        <i className="fa fa-heart mr-2 text-2xl text-white"></i>
                                    </p>
                                </div>
                                <span
                                    className="absolute top-0 left-0 z-10 mt-3 ml-3 inline-flex select-none rounded-lg bg-transparent px-3 py-2 text-lg font-medium text-white"> <i
                                    className="fa fa-star"></i> </span>
                            </div>
                            <div className="p-4">
                                <div className="mt-4">
                                    <div className="flex">
                                        <p className="text-primary mt-2 inline-block whitespace-nowrap rounded-xl font-semibold leading-tight">
                                        <span
                                            className="text-[19px] text-indigo-600 uppercase"> $3,200,000,000 </span>
                                            <span className="text-sm">/month</span>
                                        </p>
                                        <span
                                            className="text-indigo-700 ml-auto inline bg-indigo-50 rounded-[26px] inline-flex p-3 ring-4 ring-white"
                                        >
                                      <HeartIcon className="h-6 w-6" aria-hidden="true" />
                                    </span>
                                    </div>

                                    <h4 className="line-clamp-1 text-brandDark ">Kayak Point House</h4>

                                </div>
                                <div className="mt-4">
                                    <p className="line-clamp-1 text-gray-500 " >6 bedrooms Architect designed
                                        Imported fixtures and fittings Full basement Top of the [more]</p>
                                </div>
                                <div className="justify-center" >
                                    <div className="mt-4 flex justify-around space-x-3 overflow-hidden  px-1 pt-3 border-t border-indigo-20000 ">
                                        <p className="flex items-center font-medium text-gray-800">
                                            <FontAwesomeIcon icon={faBed} className="mr-1 text-indigo-600"/>
                                            2 beds
                                        </p>

                                        <p className="flex items-center font-medium text-gray-800">
                                            <FontAwesomeIcon icon={faBath} className="mr-1 text-indigo-600"/>
                                            3 Bathrooms
                                        </p>
                                        <p className="flex items-center font-medium text-gray-800">
                                            <FontAwesomeIcon icon={faHome} className="mr-1 text-indigo-600"/>
                                            8x10 m²<sup></sup>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="relative mx-auto w-full">
                    <a href="#"
                       className="relative inline-block w-full transform transition-transform duration-300 ease-in-out hover:-translate-y-2">
                        <div className="rounded-lg bg-white shadow">
                            <div className="relative flex h-52 justify-center overflow-hidden rounded-t-lg">
                                <div
                                    className="w-full transform transition-transform duration-500 ease-in-out hover:scale-110">
                                    <div className="absolute inset-0 bg-black bg-opacity-80">
                                        <img
                                            src="/assets/img/properties/5.jpg"
                                            alt=""/>
                                    </div>
                                </div>

                                <div className="absolute bottom-0 left-5 mb-3 flex">
                                    <p className="flex items-center font-medium text-white shadow-sm">
                                        <i className="fa fa-camera mr-2 text-xl text-white"></i>
                                        10
                                    </p>
                                </div>
                                <div className="absolute bottom-0 right-5 mb-3 flex">
                                    <p className="flex items-center font-medium text-gray-800">
                                        <i className="fa fa-heart mr-2 text-2xl text-white"></i>
                                    </p>
                                </div>
                                <span
                                    className="absolute top-0 left-0 z-10 mt-3 ml-3 inline-flex select-none rounded-lg bg-transparent px-3 py-2 text-lg font-medium text-white"> <i
                                    className="fa fa-star"></i> </span>
                            </div>
                            <div className="p-4">
                                <div className="mt-4">
                                    <div className="flex">
                                        <p className="text-primary mt-2 inline-block whitespace-nowrap rounded-xl font-semibold leading-tight">
                                        <span
                                            className="text-[19px] text-indigo-600 uppercase"> $3,200,000,000 </span>
                                            <span className="text-sm">/month</span>
                                        </p>
                                        <span
                                            className="text-indigo-700 ml-auto inline bg-indigo-50 rounded-[26px] inline-flex p-3 ring-4 ring-white"
                                        >
                                      <HeartIcon className="h-6 w-6" aria-hidden="true" />
                                    </span>
                                    </div>

                                    <h4 className="line-clamp-1 text-brandDark ">Kayak Point House</h4>

                                </div>
                                <div className="mt-4">
                                    <p className="line-clamp-1 text-gray-500 " >6 bedrooms Architect designed
                                        Imported fixtures and fittings Full basement Top of the [more]</p>
                                </div>
                                <div className="justify-center" >
                                    <div className="mt-4 flex justify-around space-x-3 overflow-hidden  px-1 pt-3 border-t border-indigo-20000 ">
                                        <p className="flex items-center font-medium text-gray-800">
                                            <FontAwesomeIcon icon={faBed} className="mr-1 text-indigo-600"/>
                                            2 beds
                                        </p>

                                        <p className="flex items-center font-medium text-gray-800">
                                            <FontAwesomeIcon icon={faBath} className="mr-1 text-indigo-600"/>
                                            3 Bathrooms
                                        </p>
                                        <p className="flex items-center font-medium text-gray-800">
                                            <FontAwesomeIcon icon={faHome} className="mr-1 text-indigo-600"/>
                                            8x10 m²<sup></sup>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="relative mx-auto w-full">
                    <a href="#"
                       className="relative inline-block w-full transform transition-transform duration-300 ease-in-out hover:-translate-y-2">
                        <div className="rounded-lg bg-white shadow">
                            <div className="relative flex h-52 justify-center overflow-hidden rounded-t-lg">
                                <div
                                    className="w-full transform transition-transform duration-500 ease-in-out hover:scale-110">
                                    <div className="absolute inset-0 bg-black bg-opacity-80">
                                        <img
                                            src="/assets/img/properties/6.jpg"
                                            alt=""/>
                                    </div>
                                </div>

                                <div className="absolute bottom-0 left-5 mb-3 flex">
                                    <p className="flex items-center font-medium text-white shadow-sm">
                                        <i className="fa fa-camera mr-2 text-xl text-white"></i>
                                        10
                                    </p>
                                </div>
                                <div className="absolute bottom-0 right-5 mb-3 flex">
                                    <p className="flex items-center font-medium text-gray-800">
                                        <i className="fa fa-heart mr-2 text-2xl text-white"></i>
                                    </p>
                                </div>
                                <span
                                    className="absolute top-0 left-0 z-10 mt-3 ml-3 inline-flex select-none rounded-lg bg-transparent px-3 py-2 text-lg font-medium text-white"> <i
                                    className="fa fa-star"></i> </span>
                            </div>
                            <div className="p-4">
                                <div className="mt-4">
                                    <div className="flex">
                                        <p className="text-primary mt-2 inline-block whitespace-nowrap rounded-xl font-semibold leading-tight">
                                        <span
                                            className="text-[19px] text-indigo-600 uppercase"> $3,200,000,000 </span>
                                            <span className="text-sm">/month</span>
                                        </p>
                                        <span
                                            className="text-indigo-700 ml-auto inline bg-indigo-50 rounded-[26px] inline-flex p-3 ring-4 ring-white"
                                        >
                                      <HeartIcon className="h-6 w-6" aria-hidden="true" />
                                    </span>
                                    </div>

                                    <h4 className="line-clamp-1 text-brandDark ">Kayak Point House</h4>

                                </div>
                                <div className="mt-4">
                                    <p className="line-clamp-1 text-gray-500 " >6 bedrooms Architect designed
                                        Imported fixtures and fittings Full basement Top of the [more]</p>
                                </div>
                                <div className="justify-center" >
                                    <div className="mt-4 flex justify-around space-x-3 overflow-hidden  px-1 pt-3 border-t border-indigo-20000 ">
                                        <p className="flex items-center font-medium text-gray-800">
                                            <FontAwesomeIcon icon={faBed} className="mr-1 text-indigo-600"/>
                                            2 beds
                                        </p>

                                        <p className="flex items-center font-medium text-gray-800">
                                            <FontAwesomeIcon icon={faBath} className="mr-1 text-indigo-600"/>
                                            3 Bathrooms
                                        </p>
                                        <p className="flex items-center font-medium text-gray-800">
                                            <FontAwesomeIcon icon={faHome} className="mr-1 text-indigo-600"/>
                                            8x10 m²<sup></sup>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div className="mt-2 md:flex md:items-center md:justify-center mb-14">
                <button
                    type="button"
                    className="ml-3 inline-flex items-center rounded-md border border-transparent bg-indigo-500 px-4 py-3 mt-8 text-sm font-medium text-white shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                    Browse properties
                </button>
            </div>

        </div>
    );
}

export default PropertiesComponent;