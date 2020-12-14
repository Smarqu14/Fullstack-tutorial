import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import ContestList from './ContestList';
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pageHeader: 'Naming Contests',
      contests: this.props.initialContests,
    };
  }

  componentDidMount() {}

  componentWillUnmount() {
    console.log('WILL UNMOUNT');
    //   // FIRE TIMERS, LISTENERS CLEAN
  }

  render() {
    const { pageHeader, contests } = this.state;

    return (
      <div className='App'>
        <Header message={pageHeader} />
        <ContestList contests={contests} />
        <div>
          <h3>I am the shit</h3>
          <h3>I am the shit</h3>
        </div>
      </div>
    );
  }
}

export default App;
