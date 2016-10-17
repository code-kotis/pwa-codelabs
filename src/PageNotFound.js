import React, { Component } from 'react';
import { Link } from 'react-router';

class PageNotFound extends Component {
  render() {
    return (
      <div className="page__notfound">
        <h1>404 Page Not Found.</h1>
        <p>Go to <Link to="/">Home Page</Link></p>
      </div>
    )
  }
}

export default PageNotFound;
