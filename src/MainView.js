/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

export default class MainView extends React.Component {
  render() {
    return (
      <h1>You&apos;re at {this.props.page ? this.props.page : 'Focalpoint'}</h1>
    );
  }
}
