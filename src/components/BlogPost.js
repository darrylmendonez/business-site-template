import React, { Component } from 'react';
import axios from 'axios'

class BlogPost extends Component {
  state = {
    post: null
  }
  componentDidMount() {
    let id = this.props.match.params.blog_id;
    axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
      .then(res => {
        this.setState({
          post: res.data
        })
        console.log(res);
      })
  }
  render() {
    const post = this.state.post ? (
      <div className="post card">
        <div className="card-header">
          <h4 className="card-title center">{this.state.post.title}</h4>
        </div>
        <div className="card-body">
        <p className="card-text">{this.state.post.body}</p>
        </div>
      </div>
    ) : (
      <div className="center">Loading post...</div>
    );
    return (
      <div className="row mt-4">
        <div className="col-md-12">
          {post}
        </div>
      </div>
    )
  }

}

export default BlogPost