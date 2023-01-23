import cn from 'classnames';

function Card({ className, isActive = false, ...props }) {

    return (
        <div
            className={cn("p-10 md:p-6 rounded-md bg-white border rounded-md  border-solid border-border-base shadow", className)}
            {...props}
        />
    );
}


export default Card;