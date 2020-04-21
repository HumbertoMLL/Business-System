import React from 'react';
import { mount } from 'enzyme';
import ListUser from '../../components/ListUser';

describe('<ListUser />', () => {
  test('Render del componente ListUser', () => {
    const listUser = mount(<ListUser />);
    expect(listUser.length).toEqual(1);
  });
});
