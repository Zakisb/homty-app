import cn from 'classnames';
import { EnvelopeIcon } from '@heroicons/react/20/solid';

function InputText ({
	                    className,
	                    label,
	                    value = '',
	                    icon,
	                    name,
	                    variant = 'normal',
	                    dimension = 'medium',
	                    shadow = false,
	                    disabled = false,
	                    type = 'text',
	                    legend,
	                    ...rest
                    }) {

	const variantClasses = {
		normal:
			'bg-gray-100 border border-border-base rounded focus:shadow focus:bg-light focus:border-accent',
		solid:
			'bg-gray-100 border border-border-100 rounded focus:bg-light focus:border-accent',
		outline: 'border border-border-base rounded focus:border-accent',
		line: 'ps-0 border-b border-border-base rounded-none focus:border-accent'
	};

	const sizeClasses = {
		small: 'text-sm h-10',
		medium: 'h-12',
		big: 'h-14'
	};

	return (
		<div className={className}>
			{label && (
				<label
					htmlFor={name}
					className="text-sm  font-medium text-gray-900"
				>
					{label}
				</label>
			)}
			<div className="mt-3 relative">
				{icon &&
					<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
						{icon}
					</div>
				}
				<input
					id={name}
					value={value}
					name={name}
					className={cn(
						icon ? 'pl-10' : '', 'w-full rounded-md border border-gray-300 bg-white py-2  pr-8 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-sm'
					)}
					disabled={disabled}
					autoComplete="off"
					autoCorrect="off"
					autoCapitalize="off"
					spellCheck="false"
					type={type}
					{...rest}
				/>
				{legend &&
					<div className="pointer-events-none absolute bg-gray-50 border-gray-300 border rounded-r-md inset-y-0 right-0 flex items-center px-3">
						<span className="text-gray-500 sm:text-sm" id="price-currency">
							{legend}
			           </span>
					</div>
				}
			</div>
		</div>
	);
}

export default InputText;