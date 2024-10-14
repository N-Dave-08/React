import { useField } from 'formik'
import React from 'react'

export default function PasswordInput({ label, ...props }) {

    const [field, meta] = useField(props)

    return (
        <div className='form-control'>
            <div className="label">
                <span className="label-text-alt">
                    {label}
                </span>
            </div>
            <input {...field} {...props}
                className={`input input-bordered 
                    ${meta.error && meta.touched ?
                        "input-error" : ""}`}
            />
            {meta.error && meta.touched &&
                <div className="label">
                    <span className="label-text-alt text-error">
                        {meta.error}
                    </span>
                </div>
            }
        </div>
    )
}
