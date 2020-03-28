import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import React, { FC } from 'react';
import { Option } from '../../models/field';

interface FieldProps {
  name: string;
  label: string | undefined;
  required: boolean | undefined;
  options: Option[] | undefined;
  handleChange: any; // formik event with takes html element and object
}

const RadioFieldField: FC<FieldProps> = ({ name, label, options, required, handleChange }) => {
  return (
    <FormControl required={required}>
      <FormLabel>{label}</FormLabel>
      <RadioGroup aria-label={label} name={name} onChange={handleChange}>
        {options && options.map((option: Option) => {
          return <FormControlLabel key={option.value} value={option.value} control={<Radio />} label={option.label} />
        })}
      </RadioGroup>
    </FormControl>
  );
}

export default RadioFieldField;
