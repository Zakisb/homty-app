import { Formik, useFormikContext } from 'formik';
import InputText from '../InputText';

function FormField({ name, ...otherProps }) {
    const {
        setFieldTouched,
        handleChange,
        setFieldValue,
        values,
        errors,
        touched,
        className
    } = useFormikContext();

    return (
        <div>
            <InputText
                className={className}
                value={values[name]}
                onChange={(e) => setFieldValue(name, e.target.value)}
                {...otherProps}
            />
            {errors[name] && <p className="mt-2 text-xs text-red-500">{errors[name]}</p>}
        </div>

    );
}

export default FormField;