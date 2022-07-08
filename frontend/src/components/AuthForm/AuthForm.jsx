import style from './style.module.scss';
import React, { useContext } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { AuthContext } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';
 
 const SigninSchema = Yup.object().shape({
   password: Yup.string()
     .required('Required'),
   email: Yup.string().email('Invalid email').required('Required'),
 });

const AuthForm = () => {

  const { store, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();



  return (
    <div>
    <h1>Dive into it</h1>
    <Formik
      initialValues={{ email: 'kaverin1990@gmail.com', password: 'hi' }}
      validationSchema={SigninSchema}
      onSubmit={ (values, { setSubmitting }) => {
        dispatch({type: 'startLoading'})
          setTimeout(async () => {
          setSubmitting(false)
          try {
            const response = await axios.post('/api/v1/login', { username: 'admin', password: 'admin' })
            dispatch({type: 'authentication', payload: response.data})
            navigate('/')
          } catch(e) {
            dispatch({type: 'error', payload: e.message})
          }
          
          },1500)
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form className={style.authForm} onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <span className={style.authForm__error}>{errors.email && touched.email && errors.email}</span>
          <input
            type="password"
            name="password"
            placeholder="passowrd"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
         <span className={style.authForm__error}> {errors.password && touched.password && errors.password}</span>
          <button type="submit" disabled={isSubmitting}>
            {store.authentication.isLoading ? 'Loading' : 'Sign in'}
          </button>
          <span>{store.authentication.errors}</span>
        </form>
      )}
    </Formik>
  </div>
  )
}

export default AuthForm;