import React from 'react';
import {BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import {Author} from './Author';
import {Comment} from './Comment';

export class BlogPost extends React.Component {
    render() {
      return (
        <div className="blog-post-article">
          <p>Image</p>
          <h1>{this.props.title}</h1>
          <p>{this.props.body}</p>
          <Author />
          <Comment />
        </div>
      )
    }
  }
  
  