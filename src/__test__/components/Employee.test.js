import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import Employee from '../../components/Employee';

describe('<Employee />', () => {
  test('Render del componente Employee', () => {
    const employee = mount(<Employee />);
    expect(employee.length).toEqual(1);
  });
});

describe('Employee Snapshot', () => {
  test('Comprobar la UI del componente Employee', () => {
    const employee = create(<Employee />);
    expect(employee.toJSON()).toMatchSnapshot();
  });
});
//Para actualizar el snapshot cuando actualizamos el html
//Usamos el comando en la terminal
//jest --updateSnapshot
