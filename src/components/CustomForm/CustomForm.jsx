import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState, useEffect } from 'react';
import Button from '../Button/Button';
import * as Yup from 'yup';
import './custom-form.scss';

const CustomForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    if (formSubmitted) {
      const timer = setTimeout(() => {
        setFormSubmitted(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [formSubmitted]);
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        text: '',
      }}
      validationSchema={Yup.object({
        name: Yup.string().min(2, 'Min 2 symbols!').required('Required field!'),
        email: Yup.string()
          .email('Wrong email address')
          .required('Required field!'),
        text: Yup.string().min(2, 'Min 2 symbols'),
      })}
      onSubmit={(values, { resetForm }) => {
        setFormSubmitted(true);
        resetForm();
      }}
    >
      <Form className="form">
        <label htmlFor="name">Name</label>
        <Field id="name" name="name" type="text" />
        <ErrorMessage className="error" name="name" component="div" />
        <label htmlFor="email">Email</label>
        <Field id="email" name="email" type="email" />
        <ErrorMessage className="error" name="email" component="div" />
        <label htmlFor="text">Message</label>
        <Field id="text" name="text" as="textarea" />
        <ErrorMessage className="error" name="text" component="div" />
        <Button>Submit</Button>
        {formSubmitted && (
          <div className="success-message">
            Thanks! Your form has been submitted successfully!
          </div>
        )}
      </Form>
    </Formik>
  );
};

export default CustomForm;
