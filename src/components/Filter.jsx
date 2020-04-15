import React from 'react';
import '../assets/styles/components/Filter.scss';

const Filter = () => (
  <section className='section__filter'>
    <div className='section__filter--item'>
      <h2>Lista de empleados</h2>

      <ul className='section__filter--options'>
        <h3> Todos los empleados </h3>
        <h4> Proyecto </h4>
        <li>
          <button type='button'> Wizline </button>
        </li>
        <li>
          <button type='button'> Tesla </button>
        </li>
        <li>
          <button type='button'> Arduino </button>
        </li>
        <li>
          <button type='button'> Gitlab </button>
        </li>
        <li>
          <button type='button'> Globant </button>
        </li>
        <li>
          <button type='button'> Platzi</button>
        </li>
      </ul>
    </div>
  </section>
);

export default Filter;
