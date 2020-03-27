import TextField from '@material-ui/core/TextField';
import React from 'react';

const InputTextField = ({ label, name, required, value, handleChange }: any) => {
  return (
    <TextField defaultValue={value} label={label} name={name} onChange={handleChange} required={required} />
  );
}

export default InputTextField;
