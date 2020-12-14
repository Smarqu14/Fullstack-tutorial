import React from 'react';
import PropTypes from 'prop-types';
import ContestPreview from './ContestPreview';

const ContestList = ({ contests, onContestClick }) => {
  return (
    <div className='ContestList'>
      {contests.map((contest) => (
        <ContestPreview
          key={contest.id}
          contest={contest}
          onClick={onContestClick}
        />
      ))}
    </div>
  );
};

export default ContestList;
