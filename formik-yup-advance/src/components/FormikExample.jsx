import React, { useState } from 'react'
import { Form, Formik } from 'formik';
import { formikSchemas } from '../schemas'
import UsernameInput from './account/UsernameInput';
import PasswordInput from './account/PasswordInput';
import ConfirmPasswordInput from './account/ConfirmPasswordInput';
import CustomCheckbox from './terms&condition/CustomCheckbox';
import CustomSelect from './role/CustomSelect';

export default function FormikExample() {

  const [step, setStep] = useState(1)
  const isLastStep = step === formikSchemas.length
  const handleNext = () => {
    setStep(step + 1)
  }
  const handlePrev = () => {
    setStep(step - 1)
  }
  const handleSubmit = async (values) => {

    // just mimick fetching data
    await new Promise((resolve) => setTimeout(resolve, 1000))

    isLastStep ? alert(JSON.stringify(values)) : handleNext(values)
  }

  return (
    <div>
      <Formik
        initialValues={{
          username: '',
          password: '',
          confirmPassword: '',
          role: '',
          termsAndCondition: false,
        }}
        validationSchema={formikSchemas[step - 1]}
        onSubmit={handleSubmit}
      >
        {({ values, isValid, isSubmitting }) => (
          <div className='flex items-center justify-center h-screen'>
            <Form className='bg-neutral p-5 gap-3 flex w-96 m-auto flex-col rounded-box shadow-md'>
              {step === 1 &&
                <div>
                  <UsernameInput
                    label="username"
                    type="text"
                    name="username"
                    placeholder="Enter your username here"
                  />
                  <PasswordInput
                    label="Password"
                    name="password"
                    type="text"
                    placeholder="Enter your password here"
                  />
                  <ConfirmPasswordInput
                    label="Confirm Password"
                    type="text"
                    name="confirmPassword"
                    placeholder="Confirm your password"
                    className="input input-bordered"
                  />
                </div>}
              {step === 2 &&
                <CustomSelect
                  label="Role"
                  name="role"
                  placeholder="Please select your role"
                >
                  <option value="">Select a role</option>
                  <option value="User">User</option>
                  <option value="Admin">Admin</option>
                  <option value="CEO">CEO</option>
                  <option value="Manager">Manager</option>
                  <option value="other">other</option>
                </CustomSelect>}
              {step === 3 &&
                <CustomCheckbox
                  label="Terms and Condition"
                  name="termsAndCondition"
                />}
              <div className='flex gap-2'>
                {
                  step > 1 && (
                    <button className="btn btn-secondary" onClick={handlePrev}>
                      back
                    </button>
                  )
                }
                <button
                  disabled={isSubmitting}
                  className="btn btn-secondary">
                    {
                    isSubmitting ? <span className="loading loading-spinner text-secondary"></span> : ""
                  }
                  {
                    isLastStep ? 'Submit' : 'Next'
                  }
                </button>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  )
}
