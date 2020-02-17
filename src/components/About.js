import React, { Component } from 'react';
import axios from 'axios';

class About extends Component {
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
          posts: res.data.slice(0, 10)
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
          <p className="post" key={post.id}>
            {post.body}
          </p>
        )
      })
    ) : (
      <div className="center">Loading...</div>
    );
    return (
      <div className="row">
        <div className="col-md-10 offset-md-1">
          <h4 className="mt-4">{aboutTitle}</h4>
          {postList}
        </div>
      </div>
    );
  }
}
 
export default About;