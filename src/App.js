import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {list: []};
  }

  componentDidMount() {
    this.fetchArticlesTest();
    this.fetchSourcesTest();
  }

  fetchArticlesTest() {
    axios.get('api')
    .then(res => {
      this.setState({list: res.data});
    })
    .catch(err => {
      console.log(err);
    });
  }

  fetchSourcesTest() {
    axios.get('api/sources')
    .then(res => {
      // console.log(res.data);
    })
  }

  render() {
    const { list } = this.state;
    return (
      <div className="App">
        <div>
          { list.map(ele => (
            <div key={ele.title}>
              {/* <img src={ele.urlToImage} alt={ele.title}/> */}
              <p><a href={ele.url}>{ele.title}</a></p>
              <p>{ele.author}</p>
              <p>{ele.description}</p>
              <p>{ele.publishedAt}</p>
              <p>{ele.sourceName}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
