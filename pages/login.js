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
				<div className="md:max-w-3xl w-10/12">
					<ApplyAsTenant/>
				</div>
			</div>
		</TenantLayout>
);
}
