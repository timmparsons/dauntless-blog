import React from 'react';
import {BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';


export class Author extends React.Component {
    render() {
      return (
        <div className="author-details">
          <p>Author Name</p>
          <p>Author link</p>
          <p>Map</p>
        </div>
      )
    }
  }