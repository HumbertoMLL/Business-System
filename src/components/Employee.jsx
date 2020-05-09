import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/Employee.scss';
// import pencil from '../static/pencil.svg';
// import trash from '../static/trash.svg';
// import userIcon from '../static/woman.svg';

const Employee = ({ name, proyect, salary, monthsOfWork }) => (
  <span className='section__list-users--component'>
    <ul className='section__list-users--component-data'>
      <li className='section__list-users--component-data-img'>
        <img src='https://firebasestorage.googleapis.com/v0/b/humbertostark21.appspot.com/o/woman.svg?alt=media&token=28e58c45-62a1-4c30-b2a3-da9dac2d692f' alt='User_image' />
      </li>
      <li className='section__list-users--component-data-employe'>
        <h2>{ name }</h2>
        <h3> Software Engineer </h3>
      </li>
      <li className='section__list-users--component-data-salary'>
        <h2>{salary}</h2>
        <h3>{proyect}</h3>
      </li>
      <li className='section__list-users--component-data-status'>
        {monthsOfWork}
      </li>
      <li className='section__list-users--component-data-edit'>
        <button type='button'>
          <img src='https://firebasestorage.googleapis.com/v0/b/humbertostark21.appspot.com/o/pencil.svg?alt=media&token=75fd35e8-495d-4ce6-9f75-f32a36cc1fcd' alt='Edit Icon' />
        </button>
        <button type='button'>
          <img src='https://firebasestorage.googleapis.com/v0/b/humbertostark21.appspot.com/o/trash.svg?alt=media&token=0d246700-9a88-4fc2-b267-649d7be7a9fd' alt='Delete Icon' />
        </button>
      </li>
    </ul>
  </span>
);

Employee.propTypes = {
  name: PropTypes.string,
  proyect: PropTypes.string,
  salary: PropTypes.number,
  monthsOfWork: PropTypes.number,
};

export default Employee;
