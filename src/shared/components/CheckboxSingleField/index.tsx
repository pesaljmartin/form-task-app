import Checkbox from '@material-ui/core/Checkbox';
import React, { ChangeEvent } from 'react';

const CheckboxSingleField = ({ name, value, handleChange, required }: any) => {
  const [state, setState] = React.useState(value || false);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
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
