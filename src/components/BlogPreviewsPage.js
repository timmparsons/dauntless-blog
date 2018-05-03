import React from 'react';
import {BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import {BlogPostPreview} from './components/BlogPostPreview';

class ViewPreviewsPage extends React.Component {
    constructor() {
      super()
      this.state = {
        posts: []
      }
    }
  
    componentDidMount() {
      axios.get('/my/posts').then(results => {
        this.setState({ posts: results.posts })
      })
    }
  
    render() {
      return (
        <div>
          {this.state.posts.map(post => {
            return <BlogPostPreview id={post.id} title={post.title} />
          })}
        </div>
      )
    }
  
  }