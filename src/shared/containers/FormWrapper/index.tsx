import React, { useEffect, useState } from 'react';
import FormInit from '../../components/FormInit';

const FormWrapper = () => {
  const [fields, setFields] = useState([]);

  useEffect(() => {
    fetch("./data/index.json")
      .then(response => response.json())
      .then(data => {
        setFields(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <FormInit fields={fields} />
  );
}

export default FormWrapper;
