import {ChevronRightIcon, EnvelopeIcon, HomeIcon, PhoneIcon, StarIcon} from '@heroicons/react/20/solid'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHouse, faSliders} from "@fortawesome/free-solid-svg-icons";
import {IoHomeOutline, IoPeopleOutline, IoBedOutline, IoCubeOutline, IoCashOutline} from "react-icons/io5";
import {MdCameraOutdoor, MdOutlineBalcony} from "react-icons/md"
import {BiBus} from "react-icons/bi"
import {AiOutlineWifi, AiOutlineFundProjectionScreen, AiOutlineMail} from "react-icons/ai";
import {FaShower} from "react-icons/fa";
import {FiWind, FiCoffee} from "react-icons/fi";
import {HiOutlineDocumentText} from "react-icons/hi";
import {CgGym, CgProfile} from "react-icons/cg";
import {GiSoccerBall, GiPeaceDove} from "react-icons/gi";
import {GoogleMap, useJsApiLoader} from "@react-google-maps/api";
import {BsPinMap, BsTelephone, BsWhatsapp} from "react-icons/bs";
import {useCallback, useState} from "react";
import {Switch} from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Combobox } from '@headlessui/react'


const pages = [
    {name: 'Listings', href: '#', current: false,},
    {name: 'Details', href: '#', current: true},
]

const details = [
    {
        detailTitle: 'Rooms',
        detailDescription: '4',
        icon: IoHomeOutline
    },
    {
        detailTitle: 'Price',
        detailDescription: '$300/mo',
        icon: IoCashOutline
    },
    {
        detailTitle: 'Roomates',
        detailDescription: '8',
        icon: IoPeopleOutline
    },
    {
        detailTitle: 'Surface',
        detailDescription: '320 / sqrt',
        icon: IoCubeOutline
    },
    {
        detailTitle: 'Outside',
        detailDescription: 'Terrace',
        icon: MdCameraOutdoor
    },
    {
        detailTitle: 'Transports',
        detailDescription: 'Bus, Subway',
        icon: BiBus
    },
    // More people...
]
const reviews = [
    {
        id: 1,
        title: "Can't say enough good things",
        rating: 5,
        content: `
      <p>I was really pleased with the overall shopping experience. My order even included a little personal, handwritten note, which delighted me!</p>
      <p>The product quality is amazing, it looks and feel even better than I had anticipated. Brilliant stuff! I would gladly recommend this store to my friends. And, now that I think of it... I actually have, many times!</p>
    `,
        author: 'Risako M',
        date: 'May 16, 2021',
        datetime: '2021-01-06',
    },
    // More reviews...
]
const ameneties = [
    {
        title: 'Fast WiFi',
        icon: FiWind,
        img: '6.png'
    },
    {
        title: 'Gym',
        icon: CgGym,
        img: '3.png'
    },
    {
        title: 'Soccer',
        icon: GiSoccerBall,
        img: '4.png'
    },
    {
        title: 'Calm',
        icon: GiPeaceDove,
        img: '2.png'
    },
    {
        title: 'Furniture',
        icon: GiSoccerBall,
        img: '1.png'
    },
    {
        title: 'TV',
        icon: GiSoccerBall,
        img: '5.png'
    },
]

const rooms = [
    {
        title: 'Room 1',
        description: 'Morbi varius, nulla sit amet rutrum elementum, est elit finibus tellus, ut tristique elit risus at metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.est elit finibus tellus, ut tristique elit risus at metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        surface: '320',
        imgs: ['9.jpg'],
        features: [{icon: AiOutlineWifi}, {icon: MdOutlineBalcony}, {icon: AiOutlineFundProjectionScreen}]
    },
    {
        title: 'Room 2',
        description: 'Morbi varius, nulla sit amet rutrum elementum, est elit finibus tellus, ut tristique elit risus at metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        surface: '670',
        imgs: ['1.jpg'],
        features: [{icon: MdCameraOutdoor}, {icon: FiCoffee}, {icon: BiBus}]
    },
    {
        title: 'Room 3',
        description: 'Morbi varius, nulla sit amet rutrum elementum, est elit finibus tellus, ut tristique elit risus at metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        surface: '570',
        imgs: ['1.jpg'],
        features: [{icon: FiWind}, {icon: FaShower}, {icon: AiOutlineFundProjectionScreen}]
    },
    // More people...
]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function ListingDetails() {
    const [agreed, setAgreed] = useState(false)
    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    })

    const people = [
        { id: 1, name: 'Room 1', online: false, active: false },
        { id: 2, name: 'Room 2', online: true,  active: true },
        { id: 3, name: 'Room 3', online: false,  active: true },
        // More users...
    ]

    const [query, setQuery] = useState('')
    const [selectedPerson, setSelectedPerson] = useState(people[1])

    const filteredPeople =
        query === ''
            ? people
            : people.filter((person) => {
                return person.name.toLowerCase().includes(query.toLowerCase())
            })

    const [map, setMap] = useState(null)

    const onLoad = useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
    }, [])

    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])

    const containerStyle = {
        height: '100%',
        width: '100%',
    };

    const center = {
        lat: -3.745,
        lng: -38.523
    };

    return (
        <div className="py-16 bg-[#F5F7FB] h-full ">
            <div className="border-gray-200 border-solid  bg-white border-b shadow-sm">
                <div className="py-7 max-w-7xl mx-auto sm:px-10">
                    <nav className="flex" aria-label="Breadcrumb">
                        <ol role="list" className="flex items-center space-x-2">
                            <li>
                                <div>
                                    <a href="#" className="text-indigo-500 hover:text-gray-500 ">
                                        <HomeIcon className="h-4 w-4 flex-shrink-0 " aria-hidden="true"/>
                                        <span className="sr-only">Home</span>
                                    </a>
                                </div>
                            </li>
                            {pages.map((page) => (
                                <li key={page.name}>
                                    <div className="flex items-center">
                                        <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-gray-400"
                                                          aria-hidden="true"/>
                                        <a
                                            href={page.href}
                                            className={classNames(page.current ? 'text-brandDark' : 'text-gray-500', 'ml-3 text-xs font-bold hover:text-gray-700')}
                                            aria-current={page.current ? 'page' : undefined}
                                        >
                                            {page.name}
                                        </a>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </nav>
                </div>
            </div>
            <div className="container mx-auto max-w-screen-xl sm:grid grid-cols-[70px_3fr_1.5fr] gap-6 my-24">
                <div className="flex justify-center h-fit">
                    <ul className="no-list-style fixed top-60 px-4 ml-auto bg-white rounded-md  border border-solid border-[#e2e2e2]">
                        <li><IoHomeOutline className="text-4xl bg-indigo-500 p-2.5 rounded-md text-white my-6"/></li>
                        <li><HiOutlineDocumentText className="text-4xl p-2 rounded-md text-gray-500 my-6"/></li>
                        <li><IoPeopleOutline className="text-4xl p-2 rounded-md text-gray-500 my-6"/></li>
                        <li><BsPinMap className="text-4xl p-2 rounded-md text-gray-500 my-6"/></li>
                    </ul>
                </div>
                <div className="bg-white">
                    <div className="sm:grid sm:grid-cols-3 gap-1 sm:grid-rows-3 p-1 bg-white rounded-sm">
                        <div>
                            <img className="h-full" src="/assets/img/properties/10.jpg" alt=""/>
                        </div>
                        <div>
                            <img className="h-full" src="/assets/img/properties/4.jpg" alt=""/>
                        </div>
                        <div>
                            <img className="h-full" src="/assets/img/properties/6.jpg" alt=""/>
                        </div>
                        <div className="row-start-2 row-span-2 col-span-2">
                            <img className="h-full" src="/assets/img/properties/8.jpg" alt=""/>
                        </div>
                        <div>
                            <img className="h-full" src="/assets/img/properties/6.jpg" alt=""/>
                        </div>
                        <div>
                            <img className="h-full" src="/assets/img/properties/6.jpg" alt=""/>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-1 ">
                        {/*General details*/}
                        <div
                            className="bg-[#f9f9f9] border border-solid border-[#e2e2e2] flex flex-col items-center p-7">
                            <IoHomeOutline className="text-4xl text-indigo-700 "/>
                            <h2 className="text-[15px] mt-3 text-brandDark">Type</h2>
                            <p className="text-[13px] text-gray-500  font-bold mt-1">Apartment/ House </p>
                        </div>
                        <div
                            className="bg-[#f9f9f9] border border-solid border-[#e2e2e2] flex flex-col items-center p-7">
                            <IoPeopleOutline className="text-4xl text-indigo-700 "/>
                            <h2 className="text-[15px] mt-3 text-brandDark">Roomates</h2>
                            <p className="text-[13px] text-gray-500  font-bold mt-1">4 rommates </p>
                        </div>
                        <div
                            className="bg-[#f9f9f9] border border-solid border-[#e2e2e2] flex flex-col items-center p-7">
                            <IoBedOutline className="text-4xl text-indigo-700 "/>
                            <h2 className="text-[15px] mt-3 text-brandDark">Beds</h2>
                            <p className="text-[13px] text-gray-500  font-bold mt-1">2 beds </p>
                        </div>
                        <div
                            className="bg-[#f9f9f9] border border-solid border-[#e2e2e2] flex flex-col items-center p-7">
                            <IoCubeOutline className="text-4xl text-indigo-700 "/>
                            <h2 className="text-[15px] mt-3 text-brandDark">Surface</h2>
                            <p className="text-[13px] text-gray-500  font-bold mt-1">1,170 sqft
                            </p>
                        </div>
                    </div>
                    {/*description*/}
                    <div className="border-b p-3 border-solid border-[#e2e2e2]">
                        <h4 className="p-3 mt-3">Description</h4>
                        <div className="p-3">
                            <p className="text-gray-500">
                                Praesent eros turpis, commodo vel justo at, pulvinar mollis eros. Mauris aliquet eu quam
                                id ornare.
                                Morbi ac quam enim. Cras vitae nulla condimentum, semper dolor non, faucibus dolor.
                                Vivamus adipiscing eros quis
                                orci fringilla, sed pretium lectus viverra. Pellentesque habitant morbi tristique
                                senectus et netus et malesuada f
                                ames ac turpis egestas. Donec nec velit non odio aliquam suscipit. Sed non neque
                                faucibus, condimentum lectus at, accumsan enim
                            </p>
                            <p className="text-gray-500">Praesent eros turpis, commodo vel justo at, pulvinar mollis
                                eros. Mauris aliquet eu quam id ornare.
                                Morbi ac quam enim. Cras vitae nulla condimentum, semper dolor non, faucibus dolor.
                                Vivamus adipiscing eros quis
                                orci fringilla, sed pretium lectus viverra. Pellentesque habitant morbi tristique
                                senectus et netus et malesuada f
                                ames ac turpis egestas. Donec nec velit non odio aliquam suscipit. Sed non neque
                                faucibus, condimentum lectus at, accumsan enim</p>
                            <button
                                type="button"
                                className="inline-flex items-center rounded-sm  border border-transparent bg-indigo-600 p-4 mt-3 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                View Roommates
                            </button>
                        </div>
                    </div>
                    {/*Details*/}
                    <div className="border-b p-3 border-solid border-[#e2e2e2]">
                        <h4 className="p-3 mt-3">Details</h4>
                        <div className="p-3">
                            <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {details.map((detail) => (
                                    <li key={detail.detailTitle}
                                        className="col-span-1 rounded-lg bg-white flex items-center">
                                        <detail.icon className="text-sm text-indigo-700 mr-1"/>
                                        <span className="text-gray-800 mr-1 font-bold">{detail.detailTitle}:</span>
                                        <span className="text-brandDark">{detail.detailDescription}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                    <div className=" p-3 border-solid border-[#e2e2e2]">
                        <h4 className="p-3 mt-3">Available Rooms</h4>
                        <div className="p-3">
                            {rooms.map((room, index) => (
                                <div key={room.title}
                                     className={classNames(index === rooms.length - 1 ? '' : 'border-b border-solid border-[#e2e2e2]', 'py-4 mb-1 bg-white grid grid-cols-[1fr_2fr] items-center')}>
                                    <img className="h-full w-full" src="/assets/img/properties/10.jpg" alt=""/>
                                    <div className="px-5 py-1 h-full">
                                        <div className="flex justify-between items-center items-center	">
                                            <h6>{room.title}</h6>
                                            <p className="bg-indigo-100 px-2 py-1 rounded-sm border border-solid mt-2 border-gray-300 text-[10px] align-center font-bold">
                                                <span className="text-indigo-700 mr-1">{room.surface}</span> / sqrt
                                            </p>
                                        </div>
                                        <p className="">{room.description}</p>
                                        <div className="flex">
                                            {room.features.map((feature, index) => (
                                                <feature.icon key={index} className="text-xl text-indigo-500 mr-3"/>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="border rounded-md border-solid border-[#e2e2e2] m-4 px-6 py-8">
                        <h4 className="mt-2">Ameneties</h4>
                        <div className="mt-7 p-2">
                            <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {ameneties.map((amnety) => (
                                    <li key={amnety.title} className="col-span-1 rounded-lg bg-white flex items-center">
                                        <img className="w-6 mr-2" src={`/assets/icons/${amnety.img}`} alt=""/>
                                        <span>{amnety.title}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {/*location*/}
                    <div className="h-96 p-4 my-6">
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
                    {/*Reviews */}
                    <div className="bg-white">
                        <div className="mx-auto max-w-2xl py-10 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                            <h2 className="text-lg">Recent reviews</h2>
                            <div
                                className="mt-6 space-y-10 divide-y divide-gray-200 border-t border-b border-gray-200 pb-10">
                                {reviews.map((review) => (
                                    <div key={review.id} className="pt-10 lg:grid lg:grid-cols-12 lg:gap-x-8">
                                        <div
                                            className="lg:col-span-8 lg:col-start-5 xl:col-span-9 xl:col-start-4 xl:grid xl:grid-cols-3 xl:items-start xl:gap-x-8">
                                            <div className="flex items-center xl:col-span-1">
                                                <div className="flex items-center">
                                                    {[0, 1, 2, 3, 4].map((rating) => (
                                                        <StarIcon
                                                            key={rating}
                                                            className={classNames(
                                                                review.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                                                                'h-5 w-5 flex-shrink-0'
                                                            )}
                                                            aria-hidden="true"
                                                        />
                                                    ))}
                                                </div>
                                                <span className="ml-3 text-sm text-gray-700">
                                                    {review.rating}
                                                    <span className="sr-only"> out of 5 stars</span>
                                                </span>
                                            </div>

                                            <div className="mt-4 lg:mt-6 xl:col-span-2 xl:mt-0">
                                                <h3 className="text-sm font-medium text-gray-900">{review.title}</h3>

                                                <div
                                                    className="mt-3 space-y-6 text-sm text-gray-500"
                                                    dangerouslySetInnerHTML={{__html: review.content}}
                                                />
                                            </div>
                                        </div>

                                        <div
                                            className="mt-6 flex items-center text-sm lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:mt-0 lg:flex-col lg:items-start xl:col-span-3">
                                            <p className="font-medium text-gray-900">{review.author}</p>
                                            <time
                                                dateTime={review.datetime}
                                                className="ml-4 border-l border-gray-200 pl-4 text-gray-500 lg:ml-0 lg:mt-2 lg:border-0 lg:pl-0"
                                            >
                                                {review.date}
                                            </time>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>


                </div>
                <div className="">
                    {/*User card */}
                    <div className="bg-white border rounded-md  border-solid border-[#e2e2e2] shadow ">
                        <div className="flex  p-4 citems-center border-b">
                            <img className="h-24 h-24 rounded-full border border-solid border-gray-300"
                                 src="/assets/img/users/1.jpeg" alt=""/>
                            <div className="px-6 space-y-1">
                                <h6 className="text-md">John Doe</h6>
                                <div><BsTelephone className="text-lg  rounded-md text-gray-400 inline-block mr-3"/><span
                                    className="text-xs font-bold text-gray-700">+88 225 555 888</span></div>
                                <div><AiOutlineMail
                                    className="text-lg  rounded-md  text-gray-400 inline-block mr-3"/><span
                                    className="text-xs font-bold text-gray-700">johndoe@apus.com</span></div>
                            </div>
                        </div>
                        <div>
                            <div className="-mt-px flex divide-x divide-gray-200">
                                <div className="flex w-0 flex-1 bg-indigo-600 rounded-bl-md">
                                    <a
                                        href={`mailto:`}
                                        className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                                    >
                                        <CgProfile className="h-5 w-5 text-white" aria-hidden="true"/>
                                        <span className="ml-3 text-white">Profile</span>
                                    </a>
                                </div>
                                <div className="-ml-px flex w-0 flex-1">
                                    <a
                                        href={`tel:`}
                                        className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                                    >
                                        <BsWhatsapp className="h-5 w-5 text-indigo-600" aria-hidden="true"/>
                                        <span className="ml-3">WhatsApp</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Apply*/}
                    <div className="mt-4 bg-white  border border-solid border-[#e2e2e2] rounded-md">
                        <div className=" py-10 px-4 sm:px-6 lg:px-8 lg:py-14">
                            <div className="relative mx-auto max-w-xl">
                                <div className="text-center">
                                    <h2 className="text-3xl font-bold pb-1 tracking-tight sm:text-4xl">Apply</h2>
                                    <p className="mt-3 text-md mb-0 leading-6 text-gray-500">
                                        Interested? apply today and your application will be reviewed
                                    </p>
                                </div>
                                <div className="mt-12">
                                    <div className="mb-4"><h4 className="inline mr-2">650€</h4><span className="text-gray-400">/month</span></div>
                                    <form action="#" method="POST"
                                          className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                                        <div className="sm:col-span-2">
                                            <Combobox as="div" value={selectedPerson} onChange={setSelectedPerson}>
                                                <Combobox.Label className="block text-sm font-medium text-gray-700 mb-3">Room</Combobox.Label>
                                                <div className="relative mt-1">
                                                    <Combobox.Input
                                                        className="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                                                        onChange={(event) => setQuery(event.target.value)}
                                                        displayValue={(person) => person?.name}
                                                    />
                                                    <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                                                        <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                    </Combobox.Button>

                                                    {filteredPeople.length > 0 && (
                                                        <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                            {filteredPeople.map((person) => (
                                                                <Combobox.Option
                                                                    key={person.id}
                                                                    value={person}
                                                                    className={({ active }) =>
                                                                        classNames(
                                                                            'relative cursor-default select-none py-2 pl-3 pr-9',
                                                                            active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                                                                        )
                                                                    }
                                                                >
                                                                    {({ active, selected }) => (
                                                                        <>
                                                                            <div className="flex items-center">
                      <span
                          className={classNames(
                              'inline-block h-2 w-2 flex-shrink-0 rounded-full',
                              person.online ? 'bg-green-400' : 'bg-gray-200'
                          )}
                          aria-hidden="true"
                      />
                                                                                <span className={classNames('ml-3 truncate', selected && 'font-semibold')}>
                        {person.name}
                                                                                    <span className="sr-only"> is {person.online ? 'online' : 'offline'}</span>
                      </span>
                                                                            </div>

                                                                            {selected && (
                                                                                <span
                                                                                    className={classNames(
                                                                                        'absolute inset-y-0 right-0 flex items-center pr-4',
                                                                                        active ? 'text-white' : 'text-indigo-600'
                                                                                    )}
                                                                                >
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                                                                            )}
                                                                        </>
                                                                    )}
                                                                </Combobox.Option>
                                                            ))}
                                                        </Combobox.Options>
                                                    )}
                                                </div>
                                            </Combobox>
                                        </div>
                                        <div className="sm:col-span-2">
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-3">
                                                Email
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    autoComplete="email"
                                                    className="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                                                />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-2">
                                            <label htmlFor="phone-number"
                                                   className="block text-sm font-medium text-gray-700">
                                                Phone Number
                                            </label>
                                            <div className="relative mt-1 rounded-md shadow-sm ">
                                                <div className="absolute inset-y-0 left-0 flex items-center">
                                                    <label htmlFor="country" className="sr-only">
                                                        Country
                                                    </label>
                                                    <select
                                                        id="country"
                                                        name="country"
                                                        className="h-full rounded-md border-transparent bg-transparent py-0 pl-2 pr-2 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500"
                                                    >
                                                        <option>US</option>
                                                        <option>CA</option>
                                                        <option>EU</option>
                                                    </select>
                                                </div>
                                                <input
                                                    type="text"
                                                    name="phone-number"
                                                    id="phone-number"
                                                    autoComplete="tel"
                                                    className="block w-full rounded-md border-gray-300 py-3 px-4 pl-20 focus:border-indigo-500 focus:ring-indigo-500"
                                                    placeholder="+1 (555) 987-6543"
                                                />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-2">
                                            <label htmlFor="message"
                                                   className="block text-sm font-medium text-gray-700 mb-3">
                                                Message
                                            </label>
                                            <div className="mt-1">
                                                    <textarea
                                                        id="message"
                                                        name="message"
                                                        rows={4}
                                                        className="block w-full rounded-md border border-gray-300  py-3 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                                        defaultValue={''}
                                                    />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-2">
                                            <div className="flex items-start">
                                                <div className="flex-shrink-0">
                                                    <Switch
                                                        checked={agreed}
                                                        onChange={setAgreed}
                                                        className={classNames(
                                                            agreed ? 'bg-indigo-600' : 'bg-gray-200',
                                                            'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                                                        )}
                                                    >
                                                        <span className="sr-only">Agree to policies</span>
                                                        <span
                                                            aria-hidden="true"
                                                            className={classNames(
                                                                agreed ? 'translate-x-5' : 'translate-x-0',
                                                                'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                                                            )}
                                                        />
                                                    </Switch>
                                                </div>
                                                <div className="ml-3">
                                                    <p className="text-base text-gray-500">
                                                        By selecting this, you agree to the{' '}
                                                        <a href="#" className="font-medium text-gray-700 underline">
                                                            Privacy Policy
                                                        </a>{' '}
                                                        and{' '}
                                                        <a href="#" className="font-medium text-gray-700 underline">
                                                            Cookie Policy
                                                        </a>
                                                        .
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sm:col-span-2">
                                            <button
                                                type="submit"
                                                className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                            >
                                                Apply
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
