import React from 'react';
import { mount } from 'enzyme';
import Employees from '../../components/Employees';

describe('<Employees />', () => {
  test('Render del componente Employees', () => {
    const employees = mount(<Employees />);
    expect(employees.length).toEqual(1);
  });
});
