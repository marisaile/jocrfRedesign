import React, { PropTypes } from 'react';
import $ from 'jquery';
import dispatcher from 'pages/todoReact/todoDispatcher';
import header from 'templates/workPage.html';

class Books extends React.Component {
  render() {
    return (
      <div className="{props.subject}">
        <a className="bookLink"
          href={props.url}
        >
          <img className="bookCover"
            src={props.image}
          />
        </a>
        <div className="title">{props.title}</div>
        <div className="author">{props.author}</div>
      </div>
    );
  }
}