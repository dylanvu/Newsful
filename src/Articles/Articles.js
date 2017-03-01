import React, { Component } from 'react';
import axios from 'axios';

class Articles extends Component {
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
      <div className="Articles">
        { articles.map(ele => (
          <div key={ele.title}>
            {/* <img src={ele.urlToImage} alt={ele.title}/> */}
            <p><a href={ele.url}>{ele.title}</a></p>
            <p>{ele.author}</p>
            <p>{ele.description}</p>
            <p>{ele.publishedAt}</p>
            <p><a href={ele.sourceUrl}>{ele.sourceName}</a></p>
            <br></br>
          </div>
        ))}
      </div>
    );
  }
}

export default Articles;
