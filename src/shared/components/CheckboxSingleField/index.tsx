import Checkbox from '@material-ui/core/Checkbox';
import React, { ChangeEvent, FC, useState } from 'react';

interface FieldProps {
  name: string;
  required: boolean | undefined;
  value: boolean;
  handleChange: any; // formik event with takes html element and object
}

const CheckboxSingleField: FC<FieldProps> = ({ name, value, handleChange, required }) => {
  const [state, setState] = useState<boolean>(value || false);

  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setState(event.target.checked);
    handleChange({
      target: {
        name,
        value: event.target.checked
      }
    });
  };

  return (
    <Checkbox
      className="single-checkbox"
      required={required}
      checked={state}
      onChange={onChange}
      name={name}
    />
  );
}

export default CheckboxSingleField;
