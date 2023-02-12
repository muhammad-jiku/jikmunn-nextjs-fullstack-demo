'use client';

import React from 'react';
import AddUser from './AddUser';
import UpdateUser from './UpdateUser';

const Form = () => {
  const flag = true;

  return (
    <div className="container mx-auto py-5">
      {flag ? (
        <>
          <AddUser />
        </>
      ) : (
        <>
          <UpdateUser />
        </>
      )}
    </div>
  );
};

export default Form;
