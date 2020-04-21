import React from 'react';
import { mount } from 'enzyme';
import Data from '../../components/Data';

describe('<Data />', () => {
  test('Render del componente Data', () => {
    const data = mount(<Data />);
    expect(data.length).toEqual(1);
  });
});
