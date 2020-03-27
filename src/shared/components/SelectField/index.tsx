import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import React, { ChangeEvent } from 'react';
import { Option } from '../../models/field';

const SelectField = ({ name, label, options, handleChange, value, required }: any) => {
  const [state, setState] = React.useState(value || '');

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
        {options.map((option: Option) => {
          return <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
        })}
      </Select>
    </FormControl>
  );
}

export default SelectField;
