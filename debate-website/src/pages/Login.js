import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { auth } from '../firebase';

const Login = () => {
  const validationSchema = Yup.object({
    email: Yup.string().email('Geçərli bir email daxil edin').required('Email məcburidir'),
    password: Yup.string().min(6, 'Şifrə ən azı 6 simvol olmalıdır').required('Şifrə məcburidir'),
  });

  const handleLogin = async (values) => {
    try {
      await auth.signInWithEmailAndPassword(values.email, values.password);
      alert('Giriş uğurlu oldu!');
    } catch (error) {
      alert('Giriş zamanı xəta baş verdi: ' + error.message);
    }
  };

  return (
    <div>
      <h1>Giriş</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleLogin}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <label>Email</label>
              <Field name="email" type="email" />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
            </div>
            <div>
              <label>Şifrə</label>
              <Field name="password" type="password" />
              {errors.password && touched.password ? <div>{errors.password}</div> : null}
            </div>
            <button type="submit">Daxil ol</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
