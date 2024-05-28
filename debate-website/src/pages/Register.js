import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { auth } from '../firebase';

const Register = () => {
  const validationSchema = Yup.object({
    email: Yup.string().email('Geçərli bir email daxil edin').required('Email məcburidir'),
    password: Yup.string().min(6, 'Şifrə ən azı 6 simvol olmalıdır').required('Şifrə məcburidir'),
  });

  const handleRegister = async (values) => {
    try {
      await auth.createUserWithEmailAndPassword(values.email, values.password);
      alert('Qeydiyyat uğurlu oldu!');
    } catch (error) {
      alert('Qeydiyyat zamanı xəta baş verdi: ' + error.message);
    }
  };

  return (
    <div>
      <h1>Qeydiyyat</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleRegister}
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
            <button type="submit">Qeydiyyatdan keç</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
