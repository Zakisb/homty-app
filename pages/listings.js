import Header from "../components/elements/Header";
import Footer from "../components/elements/Footer";
import {
    BanknotesIcon, EllipsisHorizontalCircleIcon, MagnifyingGlassIcon, MapPinIcon, AdjustmentsHorizontalIcon
} from "@heroicons/react/20/solid";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBath, faBed, faHome, faSliders, faStopCircle} from '@fortawesome/free-solid-svg-icons'
import {Popover, Listbox, Transition} from '@headlessui/react'
import {Range, getTrackBackground} from 'react-range';
import {useState, Fragment, useMemo, useCallback, useRef} from "react";
import {ChevronDownIcon} from '@heroicons/react/20/solid'
import {GoogleMap, useLoadScript, Marker, MarkerF, useJsApiLoader} from "@react-google-maps/api";
import {
    ArrowPathIcon, ChartBarIcon, CursorArrowRaysIcon, HeartIcon, PhoneIcon, PlayIcon, ShieldCheckIcon, Squares2X2Icon,
} from '@heroicons/react/24/outline'
import {TagsInput} from "react-tag-input-component";
import Map from "../components/elements/Map";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'


const people = [{id: 1, name: 'Wade Cooper'}, {id: 2, name: 'Arlene Mccoy'}, {id: 3, name: 'Devon Webb'}, {
    id: 4,
    name: 'Tom Cook'
}, {id: 5, name: 'Tanya Fox'}, {id: 6, name: 'Hellen Schmidt'}, {id: 7, name: 'Caroline Schultz'}, {
    id: 8,
    name: 'Mason Heaney'
}, {id: 9, name: 'Claudie Smitham'}, {id: 10, name: 'Emil Schaefer'},]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const sortBy = [
    { id: 1, name: 'Wade Cooper' },
    { id: 2, name: 'Arlene Mccoy' },
    { id: 3, name: 'Devon Webb' },
    { id: 4, name: 'Tom Cook' },
    { id: 5, name: 'Tanya Fox' },
    { id: 6, name: 'Hellen Schmidt' },
    { id: 7, name: 'Caroline Schultz' },
    { id: 8, name: 'Mason Heaney' },
    { id: 9, name: 'Claudie Smitham' },
    { id: 10, name: 'Emil Schaefer' },
]
const solutions = [{
    name: 'Analytics',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
}, {
    name: 'Engagement',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: CursorArrowRaysIcon,
}, {name: 'Security', description: "Your customers' data will be safe and secure.", href: '#', icon: ShieldCheckIcon}, {
    name: 'Integrations',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: Squares2X2Icon,
}, {
    name: 'Automations',
    description: 'Build strategic funnels that will drive your customers to convert',
    href: '#',
    icon: ArrowPathIcon,
},]
const callsToAction = [{name: 'Watch Demo', href: '#', icon: PlayIcon}, {
    name: 'Contact Sales',
    href: '#',
    icon: PhoneIcon
},]

export default function Listings() {
    const [selected, setSelected] = useState([""]);
    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    })

    const [values, setValues] = useState([25, 75]);
    const STEP = 1;
    const MIN = 14;
    const MAX = 100;

    const [map, setMap] = useState(null)

    const onLoad = useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        
    }, [])

    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])
    const AnyReactComponent = ({text}) => <div>{text}</div>;
    const containerStyle = {
        height:'100vh',
        width:'calc(100% - 780px)',
        position:'fixed',
    };

    const center = {
        lat: -3.745,
        lng: -38.523
    };

    return (<>
        <div className="w-full fixed top-16 bg-white left-0 right-0 z-40 flex content-center">
            <div className="max-h-fit  py-4 bg-indigo-700 flex content-center	 ">
                <FontAwesomeIcon icon={faSliders} className="w-8 py-4 px-4 relative text-xl text-white bg-indigo-700"/>
            </div>
            <div className="sm:grid px-6 sm:grid-cols-6 sm:items-start space-x-4 inline py-4">
                <div className="relative mt-1 rounded-sm shadow-sm sm:col-span-2">
                    <div
                        className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <MapPinIcon className="h-5 w-5 text-gray-400" aria-hidden="true"/>
                    </div>
                    <input
                        type="text"
                        name="localisation"
                        id="email"
                        className="block w-full bg-purpleOne border border-solid border-gray-200 rounded-sm border-gray-300 py-3 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Where"
                    />
                </div>
                <div className="relative mt-1 rounded-md shadow-sm">
                    <Popover className="relative">
                        {({open}) => (<>
                            <Popover.Button
                                className={classNames(open ? 'text-gray-900' : 'text-gray-500', 'py-3 group bg-purpleOne border border-solid rounded-sm border-gray-300 inline-flex items-center px-4 w-full rounded-sm bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2')}
                            >
                                <span className="sm:text-sm">Budget</span>
                                <ChevronDownIcon
                                    className={classNames(open ? 'text-gray-600' : 'text-gray-400', 'ml-auto mr-2 h-5 w-5 group-hover:text-gray-500')}
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
                                <Popover.Panel
                                    className="absolute left-1/2 z-50 bg-white mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                                    <div
                                        className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                        <div className="bg-indigo-200 w-full p-3">
                                            <h1 className="text-sm text-blue-800 ">Price range</h1>
                                        </div>

                                        <div className="mt-1 grid  p-4 grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                            <div className="sm:col-span-3">
                                                <label htmlFor="first-name"
                                                       className="block text-sm font-medium text-gray-700">
                                                    Minimum
                                                </label>
                                                <div className="mt-1">
                                                    <input
                                                        type="text"
                                                        name="first-name"
                                                        id="first-name"
                                                        autoComplete="given-name"
                                                        className="block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    />
                                                </div>
                                            </div>

                                            <div className="sm:col-span-3">
                                                <label htmlFor="last-name"
                                                       className="block text-sm font-medium text-gray-700">
                                                    Maximum
                                                </label>
                                                <div className="mt-1">
                                                    <input
                                                        type="text"
                                                        name="last-name"
                                                        id="last-name"
                                                        autoComplete="family-name"
                                                        className="block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            className="space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                                            <button
                                                type="button"
                                                className="w-full rounded-md border border-gray-300 bg-brandPrimary py-2 px-3 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                            >
                                                Apply
                                            </button>
                                        </div>
                                    </div>

                                </Popover.Panel>
                            </Transition>
                        </>)}
                    </Popover>
                </div>
                <div className="relative mt-1 rounded-md shadow-sm">
                    <Popover className="relative">
                        {({open}) => (<>
                            <Popover.Button
                                className={classNames(open ? 'text-gray-900' : 'text-gray-500', 'bg-purpleOne border border-solid border-gray-300 group inline-flex items-center py-3 px-4 w-full rounded-sm bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2')}
                            >
                                <span className="sm:text-sm">Surface</span>
                                <ChevronDownIcon
                                    className={classNames(open ? 'text-gray-600' : 'text-gray-400', 'ml-auto mr-2 h-5 w-5 group-hover:text-gray-500')}
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
                                <Popover.Panel
                                    className="absolute left-1/2 z-50 bg-white mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                                    <div
                                        className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                        <div className="bg-indigo-200 w-full p-3">
                                            <h1 className="text-sm text-blue-800 ">Square feet</h1>
                                        </div>

                                        <div className="mt-1 grid  p-4 grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                            <div className="sm:col-span-3">
                                                <label htmlFor="first-name"
                                                       className="block text-sm font-medium text-gray-700">
                                                    Minimum
                                                </label>
                                                <div className="mt-1">
                                                    <input
                                                        type="text"
                                                        name="first-name"
                                                        id="first-name"
                                                        autoComplete="given-name"
                                                        className="block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    />
                                                </div>
                                            </div>

                                            <div className="sm:col-span-3">
                                                <label htmlFor="last-name"
                                                       className="block text-sm font-medium text-gray-700">
                                                    Maximum
                                                </label>
                                                <div className="mt-1">
                                                    <input
                                                        type="text"
                                                        name="last-name"
                                                        id="last-name"
                                                        autoComplete="family-name"
                                                        className="block w-full py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            className="space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                                            <button
                                                type="button"
                                                className="w-full rounded-md border border-gray-300 bg-brandPrimary py-2 px-3 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                            >
                                                Apply
                                            </button>
                                        </div>
                                    </div>

                                </Popover.Panel>
                            </Transition>
                        </>)}
                    </Popover>
                </div>
                <div className="relative mt-1 rounded-md shadow-sm">
                    <Popover className="relative">
                        {({open}) => (<>
                            <Popover.Button
                                className={classNames(open ? 'text-gray-900' : 'text-gray-500', 'bg-purpleOne border border-solid border-gray-300 group inline-flex items-center py-3 px-4 w-full rounded-sm bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2')}
                            >
                                <span className="sm:text-sm">Commodities</span>
                                <ChevronDownIcon
                                    className={classNames(open ? 'text-gray-600' : 'text-gray-400', 'ml-auto mr-2 h-5 w-5 group-hover:text-gray-500')}
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
                                <Popover.Panel
                                    className="absolute left-1/2 z-50 bg-white mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                                    <div
                                        className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                        <div className="bg-indigo-200 w-full p-3">
                                            <h1 className="text-sm text-blue-800">Commodities</h1>
                                        </div>
                                        <div className="p-3">
                                            <h1 className="mt-1 max-w-2xl text-sm text-gray-500">Transports</h1>
                                            <div className="flex h-5 items-center justify-between mt-4 px-4">
                                                <div className="flex h-5 items-center">
                                                    <input
                                                        id="meuble"
                                                        aria-describedby="comments-description"
                                                        name="comments"
                                                        type="checkbox"
                                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                    />
                                                    <label htmlFor="meublé"
                                                           className="ml-3 block text-sm font-medium text-gray-700">
                                                        Bus
                                                    </label>
                                                </div>
                                                <div className="flex h-5 items-center">
                                                    <input
                                                        id="meuble"
                                                        aria-describedby="comments-description"
                                                        name="comments"
                                                        type="checkbox"
                                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                    />
                                                    <label htmlFor="meublé"
                                                           className="ml-3 block text-sm font-medium text-gray-700">
                                                        Subway
                                                    </label>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="p-3">
                                            <h1 className="mt-1 max-w-2xl text-sm text-gray-500">Outside</h1>
                                            <div className="flex h-5 items-center justify-between mt-4 px-4">
                                                <div className="flex h-5 items-center">
                                                    <input
                                                        id="meuble"
                                                        aria-describedby="comments-description"
                                                        name="comments"
                                                        type="checkbox"
                                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                    />
                                                    <label htmlFor="meublé"
                                                           className="ml-3 block text-sm font-medium text-gray-700">
                                                        Balcony
                                                    </label>
                                                </div>
                                                <div className="flex h-5 items-center">
                                                    <input
                                                        id="meuble"
                                                        aria-describedby="comments-description"
                                                        name="comments"
                                                        type="checkbox"
                                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                    />
                                                    <label htmlFor="meublé"
                                                           className="ml-3 block text-sm font-medium text-gray-700">
                                                        Terrace
                                                    </label>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="p-3">
                                            <h1 className="mt-1 max-w-2xl text-sm text-gray-500">Basement</h1>
                                            <div className="flex h-5 items-center  justify-between mt-4 px-4">
                                                <div className="flex h-5 items-center">
                                                    <input
                                                        id="meuble"
                                                        aria-describedby="comments-description"
                                                        name="comments"
                                                        type="checkbox"
                                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                    />
                                                    <label htmlFor="meublé"
                                                           className="ml-3 block text-sm font-medium text-gray-700">
                                                        Parking
                                                    </label>
                                                </div>
                                                <div className="flex h-5 items-center">
                                                    <input
                                                        id="meuble"
                                                        aria-describedby="comments-description"
                                                        name="comments"
                                                        type="checkbox"
                                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                    />
                                                    <label htmlFor="meublé"
                                                           className="ml-3 block text-sm font-medium text-gray-700">
                                                        Box
                                                    </label>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="p-3">
                                            <h1 className="mt-1 max-w-2xl text-sm text-gray-500">Keywords</h1>
                                            <div className="mt-4">
                                                <TagsInput
                                                    value={selected}
                                                    onChange={setSelected}
                                                    name="keywords"
                                                    placeHolder="Eg: School"
                                                />
                                                <em>Press enter add new keyword</em>
                                            </div>
                                        </div>


                                        <div
                                            className="space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                                            <button
                                                type="button"
                                                className="w-full rounded-md border  border-gray-300 bg-brandPrimary py-2 px-3 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-50 hover:text-brandDark focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                            >
                                                Apply
                                            </button>
                                        </div>
                                    </div>

                                </Popover.Panel>
                            </Transition>
                        </>)}
                    </Popover>
                </div>
                <div className="relative mt-1 rounded-md shadow-sm">
                    <Popover className="relative">
                        {({open}) => (<>
                            <Popover.Button
                                className={classNames(open ? 'text-gray-900' : 'text-gray-500', 'bg-purpleOne  border border-solid border-gray-300 group inline-flex items-center py-3 px-4 w-full rounded-sm bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2')}
                            >
                                <span className="sm:text-sm">Roomates</span>
                                <ChevronDownIcon
                                    className={classNames(open ? 'text-gray-600' : 'text-gray-400', 'ml-auto mr-2 h-5 w-5 group-hover:text-gray-500')}
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
                                <Popover.Panel
                                    className="absolute left-1/2 z-50 bg-white mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                                    <div
                                        className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                        <div className="bg-indigo-200 w-full p-3">
                                            <h1 className="text-sm text-blue-800">Roomates</h1>
                                        </div>
                                        <div className="p-3">
                                            <h1 className="mt-1 max-w-2xl text-sm text-gray-500">Age</h1>
                                            <div className="mb-1 mt-2 mx-6">
                                                <div
                                                    style={{
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        flexWrap: 'wrap'
                                                    }}
                                                >
                                                    <Range
                                                        draggableTrack
                                                        values={values}
                                                        step={STEP}
                                                        min={MIN}
                                                        max={MAX}
                                                        onChange={(values) => {
                                                            setValues(values);
                                                        }}
                                                        renderTrack={({props, children}) => (
                                                            <div
                                                                onMouseDown={props.onMouseDown}
                                                                onTouchStart={props.onTouchStart}
                                                                style={{
                                                                    ...props.style,
                                                                    height: '36px',
                                                                    display: 'flex',
                                                                    width: '100%'
                                                                }}
                                                            >
                                                                <div
                                                                    ref={props.ref}
                                                                    style={{
                                                                        height: '5px',
                                                                        width: '100%',
                                                                        borderRadius: '4px',
                                                                        background: getTrackBackground({
                                                                            values,
                                                                            colors: ['#ccc', '#548BF4', '#ccc'],
                                                                            min: MIN,
                                                                            max: MAX,
                                                                        }),
                                                                        alignSelf: 'center'
                                                                    }}
                                                                >
                                                                    {children}
                                                                </div>
                                                            </div>
                                                        )}
                                                        renderThumb={({index, props, isDragged}) => (
                                                            <div
                                                                {...props}
                                                                style={{
                                                                    ...props.style,
                                                                    borderRadius: '4px',
                                                                    backgroundColor: '#FFF',
                                                                    display: 'flex',
                                                                    justifyContent: 'center',
                                                                    alignItems: 'center',
                                                                    boxShadow: '0px 2px 6px #AAA'
                                                                }}
                                                            >
                                                                <FontAwesomeIcon icon={faStopCircle}
                                                                                 className="text-indigo-600"/>
                                                                <div
                                                                    style={{
                                                                        position: 'absolute',
                                                                        top: '-34px',
                                                                        color: '#fff',
                                                                        fontWeight: 'bold',
                                                                        fontSize: '14px',
                                                                        fontFamily: 'Arial,Helvetica Neue,Helvetica,sans-serif',
                                                                        padding: '3px',
                                                                        borderRadius: '4px',
                                                                        backgroundColor: '#878A9F'
                                                                    }}
                                                                >
                                                                    {values[index]}
                                                                </div>
                                                            </div>
                                                        )}
                                                    />
                                                </div>

                                            </div>
                                        </div>
                                        <div className="p-3">
                                            <h1 className="mt-1 max-w-2xl text-sm text-gray-500">Sexe</h1>
                                            <div className="flex h-5 items-center  justify-between mt-4 px-4">
                                                <div className="flex h-5 items-center">
                                                    <input
                                                        id="meuble"
                                                        aria-describedby="comments-description"
                                                        name="comments"
                                                        type="radio"
                                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                    />
                                                    <label htmlFor="meublé"
                                                           className="ml-3 block text-sm font-medium text-gray-700">
                                                        Homme
                                                    </label>
                                                </div>
                                                <div className="flex h-5 items-center">
                                                    <input
                                                        id="meuble"
                                                        aria-describedby="comments-description"
                                                        name="comments"
                                                        type="radio"
                                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                    />
                                                    <label htmlFor="meublé"
                                                           className="ml-3 block text-sm font-medium text-gray-700">
                                                        Femme
                                                    </label>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="p-3">
                                            <h1 className="mt-1 max-w-2xl text-sm text-gray-500">Personnalité</h1>
                                            <div className="flex  items-center justify-between flex-wrap mt-4 px-4">
                                                <div className="flex h-5 items-center">
                                                    <input
                                                        id="meuble"
                                                        aria-describedby="comments-description"
                                                        name="comments"
                                                        type="checkbox"
                                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                    />
                                                    <label htmlFor="meublé"
                                                           className="ml-3 block text-sm font-medium text-gray-700">
                                                        Calm
                                                    </label>
                                                </div>
                                                <div className="flex h-5 items-center">
                                                    <input
                                                        id="meuble"
                                                        aria-describedby="comments-description"
                                                        name="comments"
                                                        type="checkbox"
                                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                    />
                                                    <label htmlFor="meublé"
                                                           className="ml-3 block text-sm font-medium text-gray-700">
                                                        Organized
                                                    </label>
                                                </div>
                                                <div className="flex h-5 items-center">
                                                    <input
                                                        id="meuble"
                                                        aria-describedby="comments-description"
                                                        name="comments"
                                                        type="checkbox"
                                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                    />
                                                    <label htmlFor="meublé"
                                                           className="ml-3 block text-sm font-medium text-gray-700">
                                                        Open-minded
                                                    </label>
                                                </div>
                                                <div className="flex h-5 items-center">
                                                    <input
                                                        id="meuble"
                                                        aria-describedby="comments-description"
                                                        name="comments"
                                                        type="checkbox"
                                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                    />
                                                    <label htmlFor="meublé"
                                                           className="ml-3 block text-sm font-medium text-gray-700">
                                                        Funny
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-3">
                                            <h1 className="mt-1 max-w-2xl text-sm text-gray-500 ">Passions</h1>
                                            <div className="flex  items-center justify-between flex-wrap mt-4 px-4">
                                                <div className="flex h-5 items-center">
                                                    <input
                                                        id="meuble"
                                                        aria-describedby="comments-description"
                                                        name="comments"
                                                        type="checkbox"
                                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                    />
                                                    <label htmlFor="meublé"
                                                           className="ml-3 block text-sm font-medium text-gray-700">
                                                        Reading
                                                    </label>
                                                </div>
                                                <div className="flex h-5 items-center">
                                                    <input
                                                        id="meuble"
                                                        aria-describedby="comments-description"
                                                        name="comments"
                                                        type="checkbox"
                                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                    />
                                                    <label htmlFor="meublé"
                                                           className="ml-3 block text-sm font-medium text-gray-700">
                                                        Football
                                                    </label>
                                                </div>
                                                <div className="flex h-5 items-center">
                                                    <input
                                                        id="meuble"
                                                        aria-describedby="comments-description"
                                                        name="comments"
                                                        type="checkbox"
                                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                    />
                                                    <label htmlFor="meublé"
                                                           className="ml-3 block text-sm font-medium text-gray-700">
                                                        Gaming
                                                    </label>
                                                </div>
                                                <div className="flex h-5 items-center">
                                                    <input
                                                        id="meuble"
                                                        aria-describedby="comments-description"
                                                        name="comments"
                                                        type="checkbox"
                                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                    />
                                                    <label htmlFor="meublé"
                                                           className="ml-3 block text-sm font-medium text-gray-700">
                                                        Music
                                                    </label>
                                                </div>
                                            </div>
                                        </div>


                                        <div
                                            className="space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                                            <button
                                                type="button"
                                                className="w-full rounded-md border  border-gray-300 bg-brandPrimary py-2 px-3 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-50 hover:text-brandDark focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                            >
                                                Apply
                                            </button>
                                        </div>
                                    </div>

                                </Popover.Panel>
                            </Transition>
                        </>)}
                    </Popover>
                </div>
            </div>
        </div>
        <div className="sm:grid sm:grid-cols-[1fr_850px]">
            <div className="grid-cols-1 w-full  fixed h-screen ">
                    {isLoaded ? (
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={center}
                            zoom={10}
                            onLoad={onLoad}
                            onUnmount={onUnmount}
                        >
                            { /* Child components, such as markers, info windows, etc. */}
                        </GoogleMap>
                    ) : <></>}
            </div>
            <div className="grid-cols-1 absolute right-0  bg-[#F5F7FB] sm:pt-36 w-[780px]">
                <div className="sm:p-10 flex items-center">
                    <div>
                        <h2 className="text-sm text-brandDark" >Results for : <span className="text-indigo-500">7e arrondissement de Paris </span><strong className="px-2 py-1 ml-3 border-solid  border-2 border-gray-200 rounded-md bg-white text-brandDark">8</strong></h2>
                    </div>
                    <div className="ml-auto">
                        <label htmlFor="location" className="inline mr-2 text-sm font-medium text-brandDark">
                            Sort by:
                        </label>
                        <select
                            id="location"
                            name="location"
                            className="mt-1 inline rounded-md border-gray-300 py-2 pl-2 px-6  text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            defaultValue="Popularity"
                        >
                            <option>Popularity</option>
                            <option>Price (High to low)</option>
                            <option>Price (Low to high)</option>
                            <option>Newest</option>
                        </select>
                    </div>
                </div>
                <div className="sm:grid grid-cols-2 gap-6 sm:px-10 sm:py-3">
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
                <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:mt-8 sm:px-6">
                    <div className="flex flex-1 justify-between sm:hidden">
                        <a
                            href="#"
                            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                        >
                            Previous
                        </a>
                        <a
                            href="#"
                            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                        >
                            Next
                        </a>
                    </div>
                    <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                        <div>
                            <p className="text-sm text-gray-700">
                                Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
                                <span className="font-medium">97</span> results
                            </p>
                        </div>
                        <div>
                            <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                                <a
                                    href="#"
                                    className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                                >
                                    <span className="sr-only">Previous</span>
                                    <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                                </a>
                                {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
                                <a
                                    href="#"
                                    aria-current="page"
                                    className="relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20"
                                >
                                    1
                                </a>
                                <a
                                    href="#"
                                    className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                                >
                                    2
                                </a>
                                <a
                                    href="#"
                                    className="relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex"
                                >
                                    3
                                </a>
                                <span className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700">
              ...
            </span>
                                <a
                                    href="#"
                                    className="relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex"
                                >
                                    8
                                </a>
                                <a
                                    href="#"
                                    className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                                >
                                    9
                                </a>
                                <a
                                    href="#"
                                    className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                                >
                                    10
                                </a>
                                <a
                                    href="#"
                                    className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                                >
                                    <span className="sr-only">Next</span>
                                    <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/*<Footer/>*/}
    </>)
}