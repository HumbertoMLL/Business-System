import React from 'react';
import { mount } from 'enzyme';
import Add from '../../components/Add';

describe('<Add />', () => {
  test('Render del componente Add', () => {
    const add = mount(<Add />);
    expect(add.length).toEqual(1);
  });
});
