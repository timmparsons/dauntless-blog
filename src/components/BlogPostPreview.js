import React from 'react';
import {BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';

const BlogPostPreview = (props) => {
    return (
      <div>
        <h1>{props.title}</h1>
        <Link to={`/post/${props.id}`}>See Full Post</Link>
      </div>
    )
  }

  export default BlogPostPreview;
//       return (
//         <div className="blog-post-section">
//           <div className="blog-post-preview-image">Image</div>            
//             {this.props.title.length > 15 && 
//               <h3>{this.props.title.substring(0, 15)}</h3>
//             }
//             {this.props.body.length > 30 && 
//               <p>{this.props.body.substring(0, 30)}</p>
//             }
//             <button onClick={this.props.handleViewPost}>View blog post</button>    
//         </div>
//       );
//     }
//   }