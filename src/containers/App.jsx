/* eslint-disable arrow-parens */
/* eslint-disable react/jsx-props-no-spreading */
import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import Filter from '../components/Filter';
import '../assets/styles/App.scss';
import Main from '../components/Main';
import ListUser from '../components/ListUser';
import Add from '../components/Add';
import Data from '../components/Data';
import Employees from '../components/Employees';
import Employee from '../components/Employee';
import useInitialState from '../hooks/useInitialState';

const API = 'http://localhost:3000/initialState';

const App = () => {
  const initialState = useInitialState(API);
  return initialState.length === 0 ? <h1>Loading...</h1> : (
    <div className='App'>
      <Header />
      <Main>
        <Filter />
        <ListUser>
          <Add />
          <Data />
          <Employees>
            {initialState.employees.map((item) => (
              <Employee key={item.id} {...item} />
            ))}
          </Employees>
        </ListUser>
      </Main>
    </div>
  );
};

export default App;
