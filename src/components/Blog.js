import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Blog extends Component {
  state = {
    posts: [{
      id: null,
      userId: null,
      title: '',
      body: ''
    }]
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        this.setState({
          posts: res.data
        })
      })
  }

  render() {
    const { posts } = this.state;
    console.log(posts);
    const aboutTitle = posts[0].title;
    const postList = posts.length ? (
      posts.map(post => {
        console.log(post.id)
        return (
          <Link to={'/blog/' + post.id }>
            <div className="card" key={post.id}>
              <div className="card-header">
                <h5 className="card-title">{post.title}</h5>
              </div>
            </div>
          </Link>
        )
      })
    ) : (
      <div className="center">Loading...</div>
    );
    return (
      <div className="row">
        <div className="col-md-10 offset-md-1">
          <h4 className="mt-4">Blog Posts</h4>
          <small><em>Fetched from JSONPlaceholder via axios.</em></small>
          {postList}
        </div>
      </div>
    );
  }
}
 
export default Blog;