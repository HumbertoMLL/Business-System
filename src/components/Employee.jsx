import React from 'react';
import '../assets/styles/components/Employee.scss';
import pencil from '../static/pencil.svg';
import trash from '../static/trash.svg';
import userIcon from '../static/woman.svg';

const Employee = () => (
  <span className='section__list-users--component'>
    <ul className='section__list-users--component-data'>
      <li className='section__list-users--component-data-img'>
        <img src={userIcon} alt='' />
      </li>
      <li className='section__list-users--component-data-employe'>
        <h2> Humberto López </h2>
        <h3> Software Engineer </h3>
      </li>
      <li className='section__list-users--component-data-salary'>
        <h2>Cantidad</h2>
        <h3>Full time</h3>
      </li>
      <li className='section__list-users--component-data-status'>
        Activo
      </li>
      <li className='section__list-users--component-data-edit'>
        <button type='button'>
          <img src={pencil} alt='' />
        </button>
        <button type='button'>
          <img src={trash} alt='' />
        </button>
      </li>
    </ul>
  </span>
);

export default Employee;
