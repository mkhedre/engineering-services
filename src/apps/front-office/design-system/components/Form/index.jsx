import { Form } from '@mongez/react-form';
import { useEffect, useRef } from 'react';

const BaseForm = () => {
  const form = useRef();
  useEffect(() => {
    form.register({});
  });
  return <Form ref={form}>BaseForm</Form>;
};

export default BaseForm;
