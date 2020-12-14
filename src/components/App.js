import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Header from './Header';
import ContestPreview from './ContestPreview';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pageHeader: 'Naming Contests',
      contests: this.props.initialContests,
    };
  }

  componentDidMount() {
    axios
      .get('/api/contests')
      .then((res) => {
        this.setState({
          contests: res.data.contests,
        });
      })
      .catch(console.error);
  }

  componentWillUnmount() {
    console.log('WILL UNMOUNT');
    //   // FIRE TIMERS, LISTENERS CLEAN
  }
  render() {
    const { pageHeader, contests } = this.state;

    return (
      <div className='App'>
        <Header message={pageHeader} />
        <div>
          {contests.map((contest) => {
            return <ContestPreview key={contest.id} {...contest} />;
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
