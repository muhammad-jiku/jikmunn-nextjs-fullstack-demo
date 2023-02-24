'use client';

import React, { useReducer } from 'react';

//  external import
import { useSelector } from 'react-redux';

//  internal imports
import AddUser from './AddUser';
import UpdateUser from './UpdateUser';

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

const Form = () => {
  const [formData, setFormData] = useReducer(formReducer, {});
  const formId = useSelector((state) => state.app.client.formId);

  return (
    <div className="container mx-auto py-5">
      {formId
        ? UpdateUser({ formId, formData, setFormData })
        : AddUser({ formData, setFormData })}
    </div>
  );
};

export default Form;
