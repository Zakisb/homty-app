import cn from 'classnames';
import { PlusIcon, XMarkIcon } from '@heroicons/react/20/solid';

export default function Tag({title, icon, selected = false}) {
	return (
		<div className={cn('flex bg-indigo-200 px-2.5 py-1.5 rounded-xl text-xs')}>
			{icon  ? icon : null}
			<span>{title}</span>
			{/*{selected ? <XMarkIcon className="h-3 w-3 mt-0.5 ml-1" aria-hidden="true" /> : <PlusIcon className="h-3 w-3 mt-0.5 ml-1" aria-hidden="true" />}*/}
		</div>

	)
}