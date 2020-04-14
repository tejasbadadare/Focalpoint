/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Link } from 'react-router-dom';

export default class SidebarView extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">
          <h2>Home</h2>
        </Link>
        <Link to="/landscapes">
          <h2>Landscapes</h2>
        </Link>
        <Link to="/astro">
          <h2>Astrophotography</h2>
        </Link>
        <Link to="/portraits">
          <h2>Portraits</h2>
        </Link>
      </div>
    );
  }
}
