import * as Yup from 'yup'

export const formikSchemas = [

    Yup.object().shape({
        username: Yup
            .string()
            .min(3, "username must at least 3 characters long")
            .required("username is required"),
        password: Yup
            .string()
            .min(6, "password must at least 6 characters long")
            .matches(/^(?=.*[A-Z])/, "password must have at least one uppercase letter")
            .matches(/^(?=.*\d)/, "password must have at least one number")
            .matches(/^(?=.*[\W_])/, "password must have at least one special character")
            .required("password is required"),
        confirmPassword: Yup
            .string()
            .oneOf([Yup.ref('password'), null], 'Password do not match')
            .required("confirm you password")

    }),

    Yup.object().shape({
        role: Yup
            .string()
            .oneOf(["Admin", "User", "CEO", "Manager", "other"], "Please select your role")
            .required("role is required")

    }),

    Yup.object().shape({
        termsAndCondition: Yup
            .boolean()
            .oneOf([true], "Please accept the terms and condition")
    })

]