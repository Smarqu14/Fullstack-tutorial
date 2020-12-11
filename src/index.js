import ReactDOM from 'react-dom';
import React from 'react';

import App from './components/App';

ReactDOM.render(<App />, document.getElementById('root'));

setTimeout(() => {
  ReactDOM.render(<h2> Hello </h2>, document.getElementById('root'));
}, 4000);
