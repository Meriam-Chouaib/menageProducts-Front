import * as Yup from 'yup'

export const validationSigninSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email format')

    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters') // Password length validation
    .required('Password is required'),
})
