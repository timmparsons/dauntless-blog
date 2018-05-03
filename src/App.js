import React from 'react';
import {BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import BlogPostPreview from './components/BlogPostPreview';
import {BlogPost} from './components/BlogPost';
import {Nav} from './components/Nav.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleViewPost = this.handleViewPost.bind(this);
    this.state = {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        "url" : "www.myblog.com",
        "author": "Tim P",   
        "authors_prof": "www.google.com"
      }     
    }
  
 handleViewPost() {
    alert("view blog post")
  };
  AddNewPost() {
    alert("add new post");
  }
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <h1>Dauntless blog</h1>
          <Link className="button" to='/newblogpost'>
            New Blog Post
          </Link>
          <BlogPostPreview 
            title={this.state.title}
            body={this.state.body}
            url={this.state.url}
            handleViewPost={this.handleViewPost}/> 
          <Route path='/blogpost' component={BlogPost} />                 
        </div>
      </Router>
    );
  }
}



export default App;
