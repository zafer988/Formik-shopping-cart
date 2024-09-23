import { Spin } from 'antd'
import { useFormik } from 'formik'
import { useState } from 'react'
import { HomeOutlined } from '@ant-design/icons';
import { LoginSchema } from '../../Schemas/LoginSchemas';
const Login = () => {
    const onSubmit = () => { }
    const { values, handleChange, handleSubmit, errors } = useFormik({
        initialValues: {
            email: '',
            password: '',
            contrat: ''
        },
        validationSchema: LoginSchema,
        onSubmit: onSubmit
    });
    const [loading, setLoading] = useState(true);
    setTimeout(() => {
        setLoading(false);
    }, 500);
    return (
        <div>
            <Spin spinning={loading} tip='Loading...' size='large' style={{ height: '100vh' }}>
                <HomeOutlined className='home' />
                <div>
                    <h1 className='text-center'
                        style={{ fontFamily: 'cursive' }}>Login</h1>
                </div>
                <form className='login-form' onSubmit={handleSubmit}>
                    <div className='form'>
                        <label className='label'>E-mail</label>
                        <input className='inputDiv'
                            type="email"
                            id="email"
                            placeholder='Enter your email'
                            onChange={handleChange}
                            value={values.email} />
                        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                        <label className='label'>Password</label>
                        <input className='inputDiv'
                            type="password"
                            id='password'
                            placeholder='Enter your password'
                            onChange={handleChange}
                            value={values.password} />
                        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
                        <div>
                            <label>I did read and accept the terms</label>
                            <input className='checkbox' style={{ width: '20px' }}
                                type="checkbox" id="checkbox" />
                            {errors.contrat && <p style={{ color: 'red' }}>{errors.contrat}</p>}
                        </div>
                        <div>
                            <button type='submit' className='button'>Submit</button>
                            {errors.contrat && <p style={{ color: 'red', textAlign: 'center' }}>{errors.contrat}</p>}
                        </div>
                    </div>
                </form>
            </Spin>
        </div>

    );
}

export default Login;


