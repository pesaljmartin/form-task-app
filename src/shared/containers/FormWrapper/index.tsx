import React, { FC, useEffect, useState } from 'react';
import FormInit from '../../components/FormInit';
import { Field } from '../../models/field';

const FormWrapper: FC = () => {
  const [fields, setFields] = useState<Field[]>([]);

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
