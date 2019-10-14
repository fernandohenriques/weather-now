import { configure } from '@storybook/react';

const importsAll = require.context('../src', true, /\.stories\.js$/);
configure(importsAll, module);
