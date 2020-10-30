// write your custom hook here to control your checkout form
import { useState } from "react";

export function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);
  const [lStorage, setLStorage] = useState({});
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    localStorage.setItem("formData", JSON.stringify(values));
    setLStorage(JSON.parse(localStorage.getItem("formData")));
    setValues(initialValues);
    setShowSuccessMessage(true);
  };

  return [values, lStorage, showSuccessMessage, onChange, onSubmit];
}
