import React from 'react';
import { mount } from 'enzyme';
import Main from '../../components/Main';

describe('<Main />', () => {
  test('Render del componente Main', () => {
    const main = mount(<Main />);
    expect(main.length).toEqual(1);
  });
});

