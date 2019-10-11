import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import cities from './ducks/cities';

const persistConfig = {
  key: 'root',
  storage,
};

const reducers = combineReducers({ cities });
const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, {}, applyMiddleware(thunk));
const persistor = persistStore(store);

export { store, persistor };
