import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { firestore } from '../firebase';

const CreateDebate = () => {
  const validationSchema = Yup.object({
    title: Yup.string().required('Mövzu adı məcburidir'),
    description: Yup.string().required('Təsvir məcburidir'),
  });

  const handleCreateDebate = async (values) => {
    try {
      await firestore.collection('debates').add(values);
      alert('Debat uğurla yaradıldı!');
    } catch (error) {
      alert('Debat yaratmaqda xəta: ' + error.message);
    }
  };

  return (
    <div>
      <h1>Yeni Debat Yarat</h1>
      <Formik
        initialValues={{ title: '', description: '' }}
        validationSchema={validationSchema}
        onSubmit={handleCreateDebate}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <label>Mövzu adı</label>
              <Field name="title" />
              {errors.title && touched.title ? <div>{errors.title}</div> : null}
            </div>
            <div>
              <label>Təsvir</label>
              <Field name="description" />
              {errors.description && touched.description ? <div>{errors.description}</div> : null}
            </div>
            <button type="submit">Yarat</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateDebate;
