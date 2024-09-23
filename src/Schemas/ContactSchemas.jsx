import *as yup from 'yup'
export const contactSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().required('Email is required').email('Email is invalid').min(6, 'Email must be at least 6 characters'),
    message: yup.string().required('Message is required').min(6, 'Message must be at least 6 characters')

})