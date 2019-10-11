import R from 'ramda';
import moment from 'moment';
import { createActions, createReducer } from 'reduxsauce';

const initialState = [
  {
    id: 3421319,
    name: '',
    country: '',
    temperature: 0,
    humidity: 0,
    pressure: 0,
    updatedAt: moment(),
  },
];

const { Types, Creators } = createActions({
  addCity: ['city'],
  setCityWeather: ['id', 'temperature', 'humidity', 'pressure'],
});
const { addCity, setCityWeather } = Creators;

const addOneCity = (state = initialState, action) => {
  const { city } = action;

  if (!city.id) return state;

  const newState = state.filter((c) => c.id !== city.id);
  newState.push({
    ...city,
    updatedAt: moment(),
  });

  return newState;
};

const updateCityWeather = (state = initialState, action) => {
  const { temperature, humidity, pressure } = action;
  const city = R.find(R.propEq('id', action.id))(state);

  if (!city) return state;
  return R.mergeDeepRight(state, { ...city, temperature, humidity, pressure, updatedAt: moment() });
};

const handlers = {
  [Types.ADD_CITY]: addOneCity,
  [Types.SET_CITY_WEATHER]: updateCityWeather,
};

const citiesReducer = createReducer(initialState, handlers);

export { addCity, setCityWeather };
export default citiesReducer;
