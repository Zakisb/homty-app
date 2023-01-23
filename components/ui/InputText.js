import cn from 'classnames';

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
                    className="block text-sm font-medium text-gray-700 mb-3"
                >
                    {label}
                </label>
            )}
            <div>
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
                        'w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm',
                    )}
                    disabled={disabled}
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck="false"
                    type={type}
                    {...rest}
                />
            </div>
        </div>
    );
}

export default InputText;