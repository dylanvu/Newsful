import React, { Component } from 'react';
import Articles from './Articles';
import axios from 'axios';

class Feed extends Component {
  constructor(props) {
    super(props);

    this.state = {articles: []}
  }

  componentDidMount() {
    this.fetchArticles();
  }

  fetchArticles() {
    axios.get('articles')
    .then((res) => {
      this.setState({articles: res.data});
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    const { articles } = this.state;
    return (
      <div>
        <h2>News Feed</h2>
        <Articles articles={articles} onClick={this.props.onClick}/>
      </div>
    );
  }
}

export default Feed;
