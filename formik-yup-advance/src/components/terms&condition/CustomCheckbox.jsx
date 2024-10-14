import { useField } from 'formik'
import React from 'react'

export default function CustomCheckbox({ label, ...props }) {

    const [field, meta] = useField(props)

    return (
        <div className="form-control">
            <label className="label cursor-pointer">
                <span className="label-text">
                    {label}
                </span>
                <input {...field} {...props} type="checkbox" className="checkbox" />
            </label>
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
