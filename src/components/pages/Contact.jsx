import React from 'react'
import { ContactsOutlined } from '@ant-design/icons';
import { useFormik } from 'formik';
import { Spin } from 'antd';
import { useState } from 'react';
import { contactSchema } from '../../Schemas/ContactSchemas';

const Contact = () => {
    const submit = () => {

    }
    const { values, handleChange, handleSubmit, errors, } = useFormik(
        {
            initialValues: {
                name: '',
                email: '',
                message: '',
            },
            onSubmit: submit,
            validationSchema: contactSchema

        },


    )
    const [loading, setLoading] = useState(true)

    setTimeout(() => {
        setLoading(false)
    }, 500)
    return (
        <>
            <Spin spinning={loading} tip='Loading...' size='large' style={{ height: '100vh' }}>
                <div className='contact'>
                    <ContactsOutlined />
                </div>
                <div>
                    <h1 className='text-center' style={{ fontFamily: 'cursive' }}>Contact Us</h1>
                </div>
                <form className='text-center' onSubmit={handleSubmit}>
                    <input
                        className='inputcontact'
                        type='text' placeholder='Name'
                        id='name'
                        onChange={handleChange}
                        value={values.name}
                    />
                    {errors.name && <p style={{ color: 'red', fontSize: '20px' }}>{errors.name}</p>}
                    <input
                        className='inputcontact'
                        type='email'
                        placeholder='Email'
                        id='email'
                        onChange={handleChange}
                        value={values.email}
                    />
                    {errors.email && <p style={{ color: 'red', fontSize: '20px' }}>{errors.email}</p>}
                    <input type="text"
                        className='inputcontact'
                        placeholder='Message'
                        id='message'
                        onChange={handleChange}
                        value={values.message}
                    />
                    {errors.message && <p style={{ color: 'red', fontSize: '20px' }}  >{errors.message}</p>}
                    <button className='button' type='submit'>Submit</button>
                </form>
            </Spin>
        </>
    )
}
export default Contact