import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';

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
          <h1>Dauntless blog</h1>
          <button onClick={this.AddNewPost}>New blog post</button>
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

// BlogPost Component

class BlogPostPreview extends React.Component {
  
  render() {
    return (
      <div className="blog-post-section">
        <div className="blog-post-preview-image">Image</div>
          {this.props.title.length > 15 && 
            <h3>{this.props.title.substring(0, 15)}</h3>
          }
          {this.props.body.length > 30 && 
            <p>{this.props.body.substring(0, 30)}</p>
          }
          <button onClick={this.props.handleViewPost}>View blog post</button>    
      </div>
    );
  }
}

// BlogPost Component 

class BlogPost extends React.Component {
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

// Author Component

class Author extends React.Component {
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

// Comment Component

class Comment extends React.Component {
  render() {
    return (
      <div className="comments-section">
        <p>Comments</p>
      </div>
    )
  }
}

// NewPost Component

class NewPost extends React.Component {
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

export default App;
