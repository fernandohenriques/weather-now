import React from 'react';
import { shallow } from 'enzyme';
import ListWeatherCard from './index';

describe('<ListWeatherCard />', () => {
  const citiesMock = [
    { id: 1, name: 'Nuuk', country: 'GL', temperature: -5, updatedAt: '02:48:32 PM' },
    { id: 2, name: 'Ubirici', country: 'BR', temperature: 19, humidity: 75, pressure: 892, updatedAt: '02:48:32 PM' },
  ];

  it('Snapshot testing', () => {
    const wrapper = shallow(<ListWeatherCard cities={citiesMock} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('Should render WeatherCard component', () => {
    const wrapper = shallow(<ListWeatherCard cities={citiesMock} />);

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.find('WeatherCard')).toHaveLength(2);
  });
});
