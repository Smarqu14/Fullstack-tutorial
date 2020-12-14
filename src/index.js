import ReactDOM from 'react-dom';
import React from 'react';

import App from './components/App';
import data from './testData.json';

ReactDOM.render(
  <App contest={data.contest} />,
  document.getElementById('root')
);
