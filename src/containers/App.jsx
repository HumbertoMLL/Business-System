import React from 'react';
import Header from '../components/Header';
import Filter from '../components/Filter';
import '../assets/styles/App.scss';
import Main from '../components/Main';
import ListUser from '../components/ListUser';
import Add from '../components/Add';
import Data from '../components/Data';
import Employees from '../components/Employees';
import Employee from '../components/Employee';

const App = () => (
  <div className='App'>
    <Header />
    <Main>
      <Filter />
      <ListUser>
        <Add />
        <Data />
        <Employees>
          <Employee />
          <Employee />
          <Employee />
          <Employee />
          <Employee />
          <Employee />
          <Employee />
          <Employee />
          <Employee />
          <Employee />
          <Employee />
          <Employee />
          <Employee />
          <Employee />
          <Employee />
        </Employees>
      </ListUser>
    </Main>

  </div>

);

export default App;
