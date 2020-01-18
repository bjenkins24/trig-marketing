import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Formik } from 'formik';
import { StringField, TextField, Button } from '@trig-app/core-components';

const Container = styled.div``;

const sendMail = ({ email, message }) => {
  return fetch('/.netlify/functions/sendMail', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      from: email,
      text: message,
    }),
  });
};

const contactFormTypes = {
  afterSubmit: PropTypes.func,
};

const defaultProps = {
  afterSubmit: () => null,
};

const ContactForm = ({ afterSubmit }) => {
  return (
    <Container>
      <Formik
        initialValues={{ email: '', topic: '', message: '' }}
        onSubmit={async (values, { setSubmitting }) => {
          let result;
          try {
            result = await sendMail(values);
          } catch (error) {
            console.log(error);
          }
          afterSubmit(result);
          setSubmitting(false);
        }}
      >
        {({
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => {
          return (
            <form onSubmit={handleSubmit}>
              <StringField
                onChange={handleChange}
                name="email"
                type="email"
                onBlur={handleBlur}
                label="Your email address"
              />
              {errors.email && touched.email && errors.email}
              <StringField
                onChange={handleChange}
                name="topic"
                onBlur={handleBlur}
                label="Topic"
              />
              {errors.topic && touched.topic && errors.topic}
              <TextField
                onChange={handleChange}
                name="message"
                onBlur={handleBlur}
                label="Message"
              />
              {errors.message && touched.message && errors.message}
              <Button type="submit" disabled={isSubmitting}>
                Send Message
              </Button>
            </form>
          );
        }}
      </Formik>
    </Container>
  );
};

ContactForm.propTypes = contactFormTypes;
ContactForm.defaultProps = defaultProps;

export default ContactForm;
