import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import Header from "../../components/Header";

describe('<Header />', () => {
  test('Render del componente Header', () => {
    const header = mount(<Header />);
    expect(header.length).toEqual(1);
  });
});

describe('Header Snapshot', () => {
  test('Comprobar la UI del componente Header', () => {
    const header = create(<Header />);
    expect(header.toJSON()).toMatchSnapshot();
    //Para actualizar el snapshot cuando actualizamos el html
    //Usamos el comando en la terminal
    //jest --updateSnapshot
  });
});
