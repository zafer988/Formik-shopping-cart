import *as yup from 'yup'
export const LoginSchema = yup.object().shape({
    email: yup.string().required('Email is required').email('Email is invalid').min(6, 'Email must be at least 6 characters'),
    contrat: yup.boolean().required('You must accept the terms and conditions').required('You must accept the terms and conditions'),
    password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),

})
