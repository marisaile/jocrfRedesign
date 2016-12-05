import React, { PropTypes } from 'react';
import $ from 'jquery';
import dispatcher from 'pages/todoReact/todoDispatcher';
import header from 'templates/workPage.html';

class Books extends React.Component {
  render() {
    return (
      <div className="prompt">
        {props.prompt}
      </div>
    );
  }
}