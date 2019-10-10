import React from 'react';
import { shallow } from 'enzyme';
import Divider from './index';

describe('<Divider />', () => {
  it('Snapshot testing', () => {
    const wrapper = shallow(<Divider />);

    expect(wrapper).toMatchSnapshot();
  });

  it('Never render children', () => {
    const wrapper = shallow(
      <Divider>
        <div>children</div>
      </Divider>
    );

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.children()).toHaveLength(0);
  });
});
