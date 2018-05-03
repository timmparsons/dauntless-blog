import React from 'react';
import {BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';

export class Nav extends React.Component {
    render() {
      return (
      <ul className="nav">
        <li>
          <NavLink activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/blogpost">
            Blog Post Preview
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/newblogpost">
            New Blog Post
          </NavLink>
        </li>
      </ul>
      )
    }
  }