import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { useState } from 'react';
import cn from 'classnames';
import { RadioGroup } from '@headlessui/react';
import { CheckCircleIcon, CheckIcon } from '@heroicons/react/20/solid';
import { BiRadioCircle } from 'react-icons/bi';
import { BsCheckCircleFill } from 'react-icons/bs';
import Link from 'next/link';
import ApplyAsTenant from '../components/apply-as/ApplyAsTenant';
import TenantLayout from '../components/layout/tenant/TenantLayout';

export default function ApplyAs () {
	const [activeIndex, setActiveIndex] = useState(null);
	const applyType = [{
		id: 1,
		description: 'I\'m landlord, listing my property.',
		img: 'house.png',
		cta: 'Join as landlord'
	}, { id: 2, description: 'I\'m tenant, looking for a room.', img: 'search.png', cta: 'Join as tenant' }];

	return (
		<TenantLayout>
			<div className="flex pt-36 justify-center">
				<Card className="md:max-w-2xl w-10/12 md:px-16 md:py-12">
                <h3 className="text-center sm:text-4xl text-3xl">Join as tenant or landlord</h3>
                <RadioGroup value={activeIndex} onChange={setActiveIndex}>
                    <div className="grid gap-8 md:grid-cols-2 grid-cols-1 px-3 my-10">
                        {applyType.map((type) => (
                                <RadioGroup.Option key={type.id} value={type.id}>
                                    {({ checked, active }) => (
                                        <>
                                            <Card isActive={activeIndex === type.id} className={cn(activeIndex === type.id ? 'bg-gray-100 border-brand-primary border-2' : '','cursor-pointer hover:border-brand-primary')}>
                                                <div className="flex justify-between">
                                                    <div>
                                                        <img className="w-8" src={`/assets/icons/applyas/${type.img}`} alt=""/>
                                                    </div>
                                                    <div className="flex items-center">
                                                        {checked ? (
                                                            <BsCheckCircleFill
                                                                className={cn('h-5 w-5 text-indigo-600')}
                                                                aria-hidden="true"
                                                            /> ) : ( <BiRadioCircle
                                                                className={cn('h-6 w-6 text-gray-400')}
                                                                aria-hidden="true"
                                                            />
                                                            )}
                                                    </div>
                                                </div>
                                                <p className="text-lg font-bold text-brand-secondary mt-4">{type.description}</p>
                                            </Card>
                                    </>
                                )}
                                </RadioGroup.Option>
                        ))}
                </div>
                </RadioGroup>
                <div className="px-16">
	                <Link href={'/login'}>
		                <Button title={activeIndex ? applyType.find((e) => e.id === activeIndex).cta : 'Create account'} disabled={!activeIndex}/>
	                </Link>

				</div>
                <p className="mt-5 text-sm text-gray-600 text-center">
                    Already have an account?{' '}
                    <Link href='/login'>
                        <a href="#" className="font-medium text-indigo-600 underline hover:text-indigo-500">
                            Log in
                        </a>
                    </Link>
                </p>
            </Card>
			{/*	<div className="md:max-w-3xl w-10/12">
					<ApplyAsTenant/>
				</div>*/}
			</div>
		</TenantLayout>
	);
}