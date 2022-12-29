import { Container } from '@mantine/core';
import { Form, FormInterface } from '@mongez/react-form';
import React from 'react';
import useBaseForm from 'shared/hooks/useBaseForm';

type NewFormProps = {
  request: any;
  callback?: (data: any, form: FormInterface) => void;
  fullback?: (error: any, form: FormInterface) => void;
  readonly children?: React.ReactNode | React.ReactNode[];
};
const NewForm = ({ children, request, callback, fullback }: NewFormProps) => {
  const { error, onSubmit, response } = useBaseForm({
    request,
    // callback
    // ,fullback
  });
  // handle form request

  return (
    <Container>
      {/* Response Error */}

      {/* sucess Response */}

      <Form onSubmit={onSubmit}>{children}</Form>
    </Container>
  );
};

export default NewForm;
