import TextField from '@material-ui/core/TextField';
import React, { FC } from 'react';

interface FieldProps {
  label: string | undefined;
  name: string;
  required: boolean | undefined;
  value: string;
  handleChange: any; // formik event with takes html element and object
}

const InputTextField: FC<FieldProps> = ({ label, name, required, value, handleChange }) => {
  return (
    <TextField defaultValue={value} label={label} name={name} onChange={handleChange} required={required} />
  );
}

export default InputTextField;
