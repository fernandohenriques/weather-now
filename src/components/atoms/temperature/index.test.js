import React from 'react';
import { shallow } from 'enzyme';
import Temperature from './index';

describe('<Temperature />', () => {
  it('Snapshot testing', () => {
    const wrapper = shallow(<Temperature number={5} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('Snapshot testing with featured mode', () => {
    const wrapper = shallow(<Temperature number={19} featured />);

    expect(wrapper).toMatchSnapshot();
  });

  it('Should render Temperature with tag H2 if prop featured is true', () => {
    const wrapper = shallow(<Temperature number={31} featured />);

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.find('h2')).toHaveLength(1);
  });
});
