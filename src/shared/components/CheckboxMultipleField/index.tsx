import { FormControl, FormControlLabel, FormGroup } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { Option } from '../../models/field';

interface FieldProps {
  name: string;
  required: boolean | undefined;
  options: Option[] | undefined;
  handleChange: any; // formik event with takes html element and object
}

interface FormField {
  [key: string]: boolean;
}

const CheckboxMultipleField: FC<FieldProps> = ({ name, handleChange, options, required }) => {
  const stateValues = options && options.reduce((item: FormField, current: Option) => Object.assign({}, item, { [current.value]: false }), {});
  const [state, setState] = useState<FormField | undefined>(stateValues);
  const [stateChanged, setStateChanged] = useState<boolean>(false);
  useEffect(() => {
    if (state && stateChanged) {
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
        {options && options.map((option: Option) => {
          return (
            <FormControlLabel
              key={option.value}
              control={<Checkbox checked={state ? state[option.value] : false} onChange={onChange} name={option.value} />}
              label={option.label}
            />
          )
        })}
      </FormGroup>
    </FormControl>
  );
}

export default CheckboxMultipleField;
