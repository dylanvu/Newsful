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
  }

  fetchArticlesTest() {
    console.log('get');
    axios.get('api')
    .then(res => {
      console.log(res.data.articles);
      this.setState({list: res.data.articles});
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {
    const { list } = this.state;
    return (
      <div className="App">
        <div>
          { list.map(ele => (
            <div key={ele.title}>
              <img src={ele.urlToImage}/>
              <p><a href={ele.url}>{ele.title}</a></p>
              <p>{ele.author}</p>
              <p>{ele.description}</p>
              <p>{ele.publishedAt}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
