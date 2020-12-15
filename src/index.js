import ReactDOM from 'react-dom';
import React from 'react';
import axios from 'axios';

import App from './components/App';

axios
  .get('/api/contests')
  .then((res) => {
    ReactDOM.render(
      <App initialData={res.data} />,
      document.getElementById('root')
    );
  })
  .catch(console.error);
