import { useField } from 'formik'
import React from 'react'

export default function CustomSelect({ label, ...props }) {

    const [field, meta] = useField(props)

    return (
        <div className='form-control'>
            <div className="label">
                <span className="label-text">
                    {label}
                </span>
            </div>
            <select {...field} {...props}
                className={`select select-bordered 
                    ${meta.error && meta.touched ?
                        "select-error" : ""}`}
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
