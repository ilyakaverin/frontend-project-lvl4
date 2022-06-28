import style from './style.module.scss';
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
 
 const SignupSchema = Yup.object().shape({
   password: Yup.string()
     .required('Required'),
   email: Yup.string().email('Invalid email').required('Required'),
 });

const AuthForm = () => (
  <div>
    <h1>Dive into it</h1>
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={SignupSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
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
          <span>{errors.email && touched.email && errors.email}</span>
          <input
            type="password"
            name="password"
            placeholder="passowrd"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
         <span> {errors.password && touched.password && errors.password}</span>
          <button type="submit" disabled={isSubmitting}>
            Sign  in
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default AuthForm;