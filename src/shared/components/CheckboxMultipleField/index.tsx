import { FormControl, FormControlLabel, FormGroup } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { FormField, Option } from '../../models/field';

const CheckboxMultipleField = ({ name, handleChange, options, required }: any) => {
  const stateValues = options.reduce((item: FormField, current: Option) => Object.assign({}, item, { [current.value]: false }), {});
  const [state, setState] = useState(stateValues);
  const [stateChanged, setStateChanged] = useState(false);
  useEffect(() => {
    if (stateChanged) {
      const keys = Object.keys(state);
      const value = keys.filter((id: string) => state[id]);

      handleChange({
        target: {
          name,
          value
        }
      });
    }
  }, [state, stateChanged, handleChange, name]);

  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setStateChanged(false);
    setState({ ...state, [event.target.name]: event.target.checked });
    setStateChanged(true);
  };

  return (
    <FormControl required={required}>
      <FormGroup>
        {options.map((option: Option) => {
          return (
            <FormControlLabel
              key={option.value}
              control={<Checkbox checked={state[option.value]} onChange={onChange} name={option.value} />}
              label={option.label}
            />
          )
        })}
      </FormGroup>
    </FormControl>
  );
}

export default CheckboxMultipleField;
