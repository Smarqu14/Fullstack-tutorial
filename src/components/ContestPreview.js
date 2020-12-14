import React, { Component } from 'react';

class ContestPreview extends Component {
  handleclick = () => {
    this.props.onClick(this.props.contest.id);
  };
  render() {
    const { categoryName, contestName } = this.props.contest;

    return (
      <div className='ContestPreview link' onClick={this.handleclick}>
        <div className='category-name'>{categoryName}</div>
        <div className='contest-name'>{contestName}</div>
      </div>
    );
  }
}

export default ContestPreview;
