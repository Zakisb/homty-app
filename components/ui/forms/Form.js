import  {useState} from "react";
import {Formik} from "formik";

function Form({initialValues, values, onSubmit, validationSchema, children, ...otherProps}) {
    const [formFields, setFormFields] = useState({values});

    return (
        <Formik
            enableReinitialize={true}
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            {...otherProps}
        >
            {
                ({}) => children
            }
        </Formik>
    );
}

export default Form;
