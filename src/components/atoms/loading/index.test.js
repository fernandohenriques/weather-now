import React from 'react';
import { shallow, mount } from 'enzyme';
import Loading from './index';

describe('<Loading />', () => {
  it('Snapshot testing', () => {
    const wrapper = shallow(<Loading />);

    expect(wrapper).toMatchSnapshot();
  });

  it('Snapshot testing with fullscreen mode', () => {
    const wrapper = shallow(<Loading fullscreen />);

    expect(wrapper).toMatchSnapshot();
  });

  it('Should always get the fullscreen prop', () => {
    const wrapper = mount(<Loading fullscreen />);

    expect(wrapper.props().fullscreen).toBe(true);
    wrapper.setProps({ fullscreen: false });
    expect(wrapper.props().fullscreen).toBe(false);
  });

  it('Should fullscreen prop is false if not passed', () => {
    const wrapper = mount(<Loading />);

    expect(wrapper.props().fullscreen).toBeFalsy();
  });
});
