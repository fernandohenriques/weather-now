import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';

describe('<Header />', () => {
  it('Snapshot testing', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper).toMatchSnapshot();
  });

  it('Should find semantic tags Header and Figure', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.find('header')).toHaveLength(1);
    expect(wrapper.find('figure')).toHaveLength(1);
  });
});
