import React from 'react';
import ReactDOM from 'react-dom';
import Routes from 'config/routes.js';

import { hot } from 'react-hot-loader/root';

import 'styles/index.scss';

const App = () => <Routes />;

ReactDOM.render(<App />, document.getElementById('root'));
