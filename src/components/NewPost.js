import React from 'react';
import {BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';

export class NewPost extends React.Component {
    constructor(props) {
      super(props);
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
  
    handleFormSubmit() {
      alert("Form submitted")
    }
  
    render() {
      return (
        <div className="new-post">
          <form onClick={this.handleFormSubmit}>
            <input type="text" placeholder="Title" name="title"></input>
            <input type="text" placeholder="Blog Conent" name="content"></input>
            <button>Submit</button>
          </form>
        </div>
      )
    }
  }