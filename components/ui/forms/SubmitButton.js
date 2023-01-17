import React from "react";
import { useFormikContext } from "formik";

import Button from "../Button";

function SubmitButton({ title, ...props }) {
  const { handleSubmit } = useFormikContext();
  return <Button title={title} onClick={handleSubmit} {...props} />;
}

export default SubmitButton;
