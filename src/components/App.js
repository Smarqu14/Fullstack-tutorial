import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import ContestList from './ContestList';
import Contest from './Contest';
import * as api from '../api';

const pushState = (obj, url) => window.history.pushState(obj, '', url);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.initialData;
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
    api.fetchContest(contestId).then((contest) => {
      this.setState({
        pageHeader: contest.contestName,
        currentContestId: contest.id,
        contests: {
          ...this.state.contests,
          [contest.id]: contest,
        },
      });
    });
  };

  pageHeader = () => {
    if (this.state.currentContestId) {
      return this.currentContest().contestName;
    }
    return 'Naming Contests';
  };

  currentContest = () => {
    return this.state.contests[this.state.currentContestId];
  };
  currentContent = () => {
    if (this.state.currentContestId) {
      return <Contest {...this.currentContest()} />;
    } else {
      <ContestList
        contests={this.state.contests}
        onContestClick={this.fetchContest}
      />;
    }
  };
  render() {
    const { contests, currentContestId } = this.state;

    return (
      <div className='App'>
        <Header message={this.pageHeader()} />
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
