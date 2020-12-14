import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import ContestPreview from './ContestPreview';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pageHeader: 'Naming Contests',
    };
  }

  componentDidMount() {
    console.log('DID MOUNT');
    // AJAX DATA
    // FIRE TIMERS, LISTENERS
  }

  // componentWillUnmount() {
  //   console.log('WILL UNMOUNT');
  //   // FIRE TIMERS, LISTENERS CLEAN
  // }
  render() {
    const { pageHeader } = this.state;

    return (
      <div className='App'>
        <Header message={pageHeader} />
        <div>
          {this.props.contest.map((contest) => {
            return <ContestPreview {...contest} />;
          })}
        </div>
      </div>
    );
  }
}

export default App;

App.propTypes = {
  headerMessage: PropTypes.string,
};

App.defaultProps = {
  headerMessage: 'hi',
};
