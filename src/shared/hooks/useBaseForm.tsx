import { FormInterface } from '@mongez/react-form';
import React, { useState } from 'react';

interface Props {
  request: any;
  callback?: (data?: any, form?: FormInterface) => void;
  fullback?: (error?: any, form?: FormInterface) => void;
}

const useBaseForm = ({ request, callback, fullback }: Props) => {
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const onSubmit = (e: React.FormEvent, form: FormInterface) => {
    request(e.target)
      .then((response: any) => {
        if (callback) callback(response, form);
        setResponse(response);
        setError(null);
      })
      .catch((error: any) => {
        if (fullback) fullback(error, form);
        setError(error);
        setResponse(null);
      })
      .finally(() => {
        form.submitting(false);
      });
  };
  return {
    response,
    error,
    onSubmit,
  };
};

export default useBaseForm;
