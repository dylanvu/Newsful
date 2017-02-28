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
        <Login />
        <div>
          { list.map(ele => (
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
      </div>
    );
  }
}

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert('A name was submitted: ' + this.state.username);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="username"
          onChange={this.handleChange}
          placeholder="Username"
          type="text"
          value={this.state.username}
        />
        <input
          name="password"
          onChange={this.handleChange}
          placeholder="Password"
          type="password"
          value={this.state.password}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default App;
