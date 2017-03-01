import React, { Component } from 'react';
import Articles from './Articles/Articles';
import Login from './Login/Login';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      isLoggedIn: false
    };
  }

  componentDidMount() {
    this.verifySession();
    this.fetchArticlesTest();
  }

  verifySession() {
    axios.get('token')
    .then((res) => {
      if (res.data) {
        this.setState({isLoggedIn: res.data});
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }

  fetchArticlesTest() {
    axios.get('articles')
    .then(res => {
      this.setState({articles: res.data});
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {
    const { articles } = this.state;
    return (
      <div className="App">
        <Login />
        <Articles articles={articles} />
      </div>
    );
  }
}

export default App;
