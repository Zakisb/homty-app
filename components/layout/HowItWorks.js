import {MagnifyingGlassIcon, SparklesIcon} from "@heroicons/react/20/solid";
import {
    BoltIcon,
    ChatBubbleBottomCenterTextIcon,
    EnvelopeIcon,
    GlobeAltIcon,
    ScaleIcon,
} from '@heroicons/react/24/outline'

const transferFeatures = [
    {
        id: 1,
        name: 'Competitive exchange rates',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: GlobeAltIcon,
    },
    {
        id: 2,
        name: 'No hidden fees',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: ScaleIcon,
    },
    {
        id: 3,
        name: 'Transfers are instant',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: BoltIcon,
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
const HowItWorks = ({}) => {
    return (
        <div className="bg-white container mx-auto space-y-24 px-4 sm:px-6 lg:px-8 xl:space-y-28 xl:py-18">
            <div className="mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8 lg:py-32">
                <div className="relative flex flex-col justify-between sm:flex-row sm:items-end">
                    <div className="mx-auto w-full text-center">
                        <h2 className="text-3xl font-semibold md:text-4xl">
                            How it works
                        </h2>
                        <span className="mt-2 mb-16 block text-base font-normal text-gray-500 sm:text-xl md:mt-3">
3 simple steps
</span>
                    </div>
                </div>
                <div className="relative grid gap-20 md:grid-cols-3">
                    <img className="absolute inset-x-0 top-10 mx-auto hidden md:block"
                         src="https://coliving.com/icons/steps.svg" alt=""/>
                        <div className="relative mx-auto flex max-w-xs flex-col items-center">
                            <div className="mx-auto mb-8 max-w-[300px]">
                                <img loading="lazy"
                                     src="https://co-living.imgix.net/images/how-does-it-work/apply_2.jpg?w=450&amp;h=450&amp;auto=compress,enhance,format&amp;fit=crop&amp;crop=entropy"
                                     height="300" width="300"
                                     className="h-full w-full rounded-2xl border border-gray-200 object-cover"
                                     alt="Apply"/>
                            </div>
                            <div className="text-center"><h3 className="text-xl font-semibold">1. Apply</h3>
                                <span className="mt-5 block text-gray-700">
Locate the perfect coliving home, click "Reserve," and submit your application in a matter of minutes.
</span>
                            </div>
                        </div>
                    <div className="relative mx-auto flex max-w-xs flex-col items-center">
                        <div className="mx-auto mb-8 max-w-[300px]">
                            <img loading="lazy"
                                 src="https://co-living.imgix.net/images/how-does-it-work/get_approved_2.jpg?w=450&amp;h=450&amp;auto=compress,enhance,format&amp;fit=crop&amp;crop=entropy"
                                 height="300" width="300"
                                 className="h-full w-full rounded-2xl border border-gray-200 object-cover"
                                 alt="Get approved"/>
                        </div>
                        <div className="text-center"><h3 className="text-xl font-semibold">2. Get approved</h3>
                            <span className="mt-5 block text-gray-700">
We carefully review your application and profile to ensure compatibility with our community.
</span>
                        </div>
                    </div>
                    <div className="relative mx-auto flex max-w-xs flex-col items-center">
                        <div className="mx-auto mb-8 max-w-[300px]">
                            <img loading="lazy"
                                 src="https://co-living.imgix.net/images/bg-coliving3.jpg?w=450&amp;h=450&amp;auto=compress,enhance,format&amp;fit=crop&amp;crop=center"
                                 height="300" width="300"
                                 className="h-full w-full rounded-2xl border border-gray-200 bg-white object-cover p-2"
                                 alt="Move in and enjoy"/>
                        </div>
                        <div className="text-center">
                            <h3 className="text-xl font-semibold">3. Move in and enjoy</h3>
                            <span className="mt-5 block text-gray-700">
Upon confirmation, pack your bag for your next coliving journey. A welcoming community awaits in your new home.
</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}

export default HowItWorks;