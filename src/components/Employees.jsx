import React from 'react';
import '../assets/styles/components/Employees.scss';

const Employees = ({ children }) => (
  <div className='section__list-users--container'>
    {children}
  </div>
);

export default Employees;
