import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import React, { ChangeEvent, FC, useState } from 'react';
import { Option } from '../../models/field';

interface FieldProps {
  name: string;
  label: string | undefined;
  required: boolean | undefined;
  value: string;
  options: Option[] | undefined;
  handleChange: any; // formik event with takes html element and object
}

const SelectField: FC<FieldProps> = ({ name, label, options, handleChange, value, required }) => {
  const [state, setState] = useState<string>(value || '');

  const onChange = (event: ChangeEvent<{ value: unknown }>): void => {
    setState(event.target.value as string);
    handleChange({
      target: {
        name,
        value: event.target.value
      }
    });
  };

  return (
    <FormControl required={required}>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        value={state}
        onChange={onChange}
      >
        {options && options.map((option: Option) => {
          return <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
        })}
      </Select>
    </FormControl>
  );
}

export default SelectField;
