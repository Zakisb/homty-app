import cn from 'classnames';

function Button({ title, onClick, type= "button", variant = 'primary', icon, disabled = false, classNames, isLoading = false, size = 'medium' }) {
    const variantClasses = {
        primary:
            "bg-indigo-500 text-white hover:bg-indigo-700 border-transparent",
        secondary:
            "bg-white text-indigo-700 hover:bg-indigo-700 hover:text-white  border-indigo-600",
    };

    const variantSizes = {
        small: "px-3 py-0 h-9 text-sm h-10",
        medium: "px-5 py-0 h-12 text-base",
        big: "px-10 py-0 h-14 text-base",
    };

    return (
        <>
            <button
                type={type}
                onClick={onClick}
                className={cn('inline-flex items-center justify-center border rounded-md font-medium w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',classNames, variantSizes[size], variantClasses[variant], disabled ? 'disabled:bg-gray-400 disabled:text-white' : '')}
                disabled={disabled}
            >
                {title}
                {isLoading && (
                    <svg className={cn(variant === 'primary' ? 'text-white' : 'text-indigo-700', "animate-spin ml-3 mr-3 h-5 w-5")}
                         xmlns="http://www.w3.org/2000/svg"
                         fill="none"
                         viewBox="0 0 24 24">
                        <circle className="opacity-25"cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                )}
                {icon &&
                    icon
                }
            </button>

        </>
    );
}


export default Button;