import { BuildingOfficeIcon, HomeIcon } from '@heroicons/react/24/outline';
import cn from 'classnames';
import { TbToolsKitchen2, TbParking } from 'react-icons/tb';
import { MdBalcony, MdOutlineLiving, MdOutlineYard } from 'react-icons/md';
import { CiParking1 } from 'react-icons/ci';
import { GiGardeningShears, GiShower, GiYarn,  } from 'react-icons/gi';

export const homeTypes = [
	{
		id: 1,
		title: () => {
			return <BuildingOfficeIcon className={cn('h-5 w-5 text-indigo-600')}
			                           aria-hidden="true"/>;
		},
		description: 'Self-contained living space, typically located in a building with multiple units.',
		footer: 'Appartement',
		value:'Appartement'
	},
	{
		id: 2, title: () => {
			return <HomeIcon className={cn('h-5 w-5 text-indigo-600')}
			                 aria-hidden="true"/>;
		}, description: 'Standalone building typically larger in size than an appartement.', footer: 'House', value:'House'
	}
];

export const communSpaces  = [
	{
		id: 1,
		icon: <TbToolsKitchen2 className={cn('h-5 w-5 text-indigo-600')} aria-hidden="true"/>,
		value: 'Kitchen'
	},
	{
		id: 2,
		icon: <MdOutlineLiving className={cn('h-5 w-5 text-indigo-600')} aria-hidden="true"/>,
		value: 'Living room'
	},
	{
		id: 3,
		icon:  <TbParking className={cn('h-5 w-5 text-indigo-600')} aria-hidden="true"/>,
		value: 'Parking'
	},
	{
		id: 4,
		icon: <GiGardeningShears className={cn('h-5 w-5 text-indigo-600')} aria-hidden="true"/>,
		description: 'Standalone building typically larger in size than an appartement.',
		value: 'Garden'
	},
	{
		id: 5,
		icon: <MdOutlineYard  className={cn('h-5 w-5 text-indigo-600')} aria-hidden="true"/>,
		description: 'Standalone building typically larger in size than an appartement.',
		value: 'Yard'
	},
	{
		id: 6,
		icon: <GiShower className={cn('h-5 w-5 text-indigo-600')} aria-hidden="true"/>,
		description: 'Standalone building typically larger in size than an appartement.',
		value: 'Shower'
	},
	{
		id: 7,
		icon: <GiYarn className={cn('h-5 w-5 text-indigo-600')} aria-hidden="true"/>,
		description: 'Standalone building typically larger in size than an appartement.',
		value: 'Basement'
	},
	{
		id: 8,
		icon: <MdBalcony className={cn('h-5 w-5 text-indigo-600')} aria-hidden="true"/>,
		description: 'Standalone building typically larger in size than an appartement.',
		value: 'Balcony'
	},
];