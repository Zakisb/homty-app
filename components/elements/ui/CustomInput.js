import { useField } from "formik";

const CustomInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <>
            <div>
                <label className="block text-sm font-medium text-gray-700">
                    {label}
                </label>
                <div className="mt-1">
                    <input
                        {...props}
                        {...field}
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
                {meta.touched && meta.error && <div className="error text-red-500">{meta.error}</div>}
            </div>
            {/*<input
                {...field}
                {...props}
                className={meta.touched && meta.error ? "input-error" : ""}
            />
            {meta.touched && meta.error && <div className="error">{meta.error}</div>}*/}
        </>
    );
};
export default CustomInput;