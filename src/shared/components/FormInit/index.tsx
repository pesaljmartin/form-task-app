import { Button } from '@material-ui/core';
import { FieldArray, Form, Formik, FormikErrors } from 'formik';
import React from 'react';
import { Field, FormField } from '../../models/field';
import CheckboxMultipleField from '../CheckboxMultipleField';
import CheckboxSingleField from '../CheckboxSingleField';
import InputTextField from '../InputTextField';
import RadioFieldField from '../RadioField';
import SelectField from '../SelectField';
import './index.scss';

const FormInit = (props: { fields: Field[] }) => {
  const { fields } = props;
  const initialValues = fields.reduce((item: FormField, current: Field) => Object.assign({}, item, { [current.key]: undefined }), {});
  const requiredFields = fields.reduce((item: FormField, current: Field) => {
    const req = current.required ? { [current.key]: true } : null;
    return Object.assign({}, item, req)
  }, {});

  return (
    <Formik
      initialValues={initialValues}
      validateOnChange={false}
      validate={(values: FormField) => {
        const errors: FormikErrors<FormField> = {};
        for (let property in requiredFields) {
          if (!values[property]
            || values[property] === undefined
            || values[property].length < 0
            || values[property] === ''
            || values[property] === null
          ) {
            errors[property] = "This field is required!";
          }
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        handleChange,
        isSubmitting,
      }) => (
          <Form>
            <FieldArray
              name='fields'
            >
              {() => (
                <div className="form-fields">
                  {fields.map((field: Field) => {
                    const { key, label, type, required, options } = field;
                    switch (type) {
                      case 'text':
                        return (
                          <div key={key}>
                            <InputTextField {...{ label, required, handleChange }} name={key} value={values[key]} />
                            {errors[key] && <div className="error">{errors[key]}</div>}
                          </div>
                        )
                      case 'checkbox_single':
                        return (
                          <div key={key} className="checkbox_single">
                            <CheckboxSingleField {...{ required, handleChange }} name={key} value={values[key]} />
                            {errors[key] && <div className="error">{errors[key]}</div>}
                          </div>
                        )
                      case 'checkbox_multiple':
                        return (
                          <div key={key}>
                            <CheckboxMultipleField {...{ options, required, handleChange }} name={key} />
                            {errors[key] && <div className="error">{errors[key]}</div>}
                          </div>
                        )
                      case 'radio':
                        return (
                          <div key={key}>
                            <RadioFieldField {...{ label, options, required, handleChange }} name={key} />
                            {errors[key] && <div className="error">{errors[key]}</div>}
                          </div>
                        )
                      case 'select':
                        return (
                          <div key={key}>
                            <SelectField {...{ label, options, required, handleChange }} name={key} value={values[key]} />
                            {errors[key] && <div className="error">{errors[key]}</div>}
                          </div>
                        )
                      default:
                        return <div key={key} />
                    }
                  })}
                  <Button variant="contained" color="primary" type="submit" disabled={isSubmitting}>
                    Submit
                  </Button>
                </div>
              )}
            </FieldArray>
          </Form>
        )}
    </Formik>
  )
}

export default FormInit;
