import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Step1 = () => (
  <>
  <div className='form-control'>
      <Field name="firstName" type="text" className="input" placeholder="first name" />
      <div className="label">
      <ErrorMessage name="firstName" component="div" className="text-error label-text-alt" />
      </div>
    </div>
    <div className='form-control'>
      <Field name="lastName" type="text" className="input" placeholder="last name" />
      <div className="label">
      <ErrorMessage name="lastName" component="div" className="text-error label-text-alt" />
      </div>
    </div>
  </>
);

const Step2 = () => (
  <>
    <div className='form-control'>
      <Field name="email" type="email" className="input" placeholder="Email" />
      <div className="label">
      <ErrorMessage name="email" component="div" className="text-error label-text-alt" />
      </div>
    </div>
    <div className='form-control'>
      <Field name="password" type="text" className="input" placeholder="password" />
      <div className="label">
      <ErrorMessage name="password" component="div" className="text-error label-text-alt" />
      </div>
    </div>
  </>
);

const Step3 = () => (
  <>
    <div className='form-control'>
      <Field name="address" type="text" className="input" placeholder="address" />
      <div className="label">
      <ErrorMessage name="address" component="div" className="text-error label-text-alt" />
      </div>
    </div>
    <div className='form-control'>
      <Field name="city" type="text" className="input" placeholder="city" />
      <div className="label">
      <ErrorMessage name="city" component="div" className="text-error label-text-alt" />
      </div>
    </div>
  </>
);

const validationSchemas = [
  Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
  }),
  Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  }),
  Yup.object({
    address: Yup.string().required('Address is required'),
    city: Yup.string().required('City is required'),
  }),
];

const MultiStepForm = () => {
  const [step, setStep] = useState(1);

  const isLastStep = step === validationSchemas.length;

  const handleNext = (values) => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = (values) => {
    if (isLastStep) {
      console.log('Form values:', values);
      alert(JSON.stringify(values, null, 2));
    } else {
      handleNext(values);
    }
  };

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        address: '',
        city: '',
      }}
      validationSchema={validationSchemas[step - 1]}
      onSubmit={handleSubmit}
    >
      {({ values, isValid }) => (
        <Form className='bg-neutral p-10'>
          {step === 1 && <Step1 />}
          {step === 2 && <Step2 />}
          {step === 3 && <Step3 />}

          <div className="space-x-3">
            {step > 1 && (
              <button className='btn btn-secondary' type="button" onClick={handleBack}>
                Back
              </button>
            )}
            <button className='btn btn-secondary' type="submit">
              {isLastStep ? 'Submit' : 'Next'}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default MultiStepForm;
