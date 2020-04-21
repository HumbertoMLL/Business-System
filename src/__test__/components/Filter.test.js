import React from 'react';
import { mount } from 'enzyme';
import { create } from "react-test-renderer";
import Filter from '../../components/Filter';

describe('<Filter />', () => {
  test('Render del componente Filter', () => {
    const filter = mount(<Filter />);
    expect(filter.length).toEqual(1);
  });
});

describe('Filter Snapshot', () => {
  test('Comprobar la UI del componente Filter', () => {
    const filter = create(<Filter />);
    expect(filter.toJSON()).toMatchSnapshot();
  });
});
//Para actualizar el snapshot cuando actualizamos el html
//Usamos el comando en la terminal
//jest --updateSnapshot
