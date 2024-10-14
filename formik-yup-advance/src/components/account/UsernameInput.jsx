import { useField } from 'formik'
import React from 'react'

export default function UsernameInput({label, ...props}) {

  const [field, meta] = useField(props)

  return (
    <div className='form-control'>
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input 
      {...field} {...props}
      type="text" className={`input input-bordered ${meta.touched && meta.error ? 'input-error' : ''}`} placeholder='Enter your username' />
      {
        meta.touched && meta.error && (
          <div className="label">
            <span className="label-text text-error">{meta.error}</span>
          </div>
        )
      }
    </div>
  )
}
