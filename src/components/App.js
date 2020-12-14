import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import ContestList from './ContestList';
import Contest from './Contest';

const pushState = (obj, url) => window.history.pushState(obj, '', url);

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
  fetchContest = (contestId) => {
    pushState(
      {
        currentContestId: contestId,
      },
      `/contest/${contestId}`
    );

    this.setState({
      pageHeader: this.state.contests[contestId].contestName,
      currentContestId: contestId,
    });
  };

  currentContent = () => {
    if (this.state.currentContestId) {
      return <Contest {...this.state.contests[this.state.currentContestId]} />;
    } else {
      <ContestList
        contests={this.state.contests}
        onContestClick={this.fetchContest}
      />;
    }
  };
  render() {
    const { pageHeader, contests, currentContestId } = this.state;

    return (
      <div className='App'>
        <Header message={pageHeader} />
        {currentContestId ? (
          <Contest {...this.state.contests[this.state.currentContestId]} />
        ) : (
          <ContestList contests={contests} onContestClick={this.fetchContest} />
        )}
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
