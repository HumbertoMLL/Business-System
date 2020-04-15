import React from 'react';
import '../assets/styles/components/ListUser.scss';

const ListUser = ({ children }) => (
  <section className='section__list-users'>
    {children}
  </section>
);

export default ListUser;
