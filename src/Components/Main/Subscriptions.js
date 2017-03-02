import React, { Component } from 'react';
import axios from 'axios';

class Subscriptions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sources: [],
      subscriptions: []
    }
  }

  componentDidMount() {
    this.fetchSources();
  }

  fetchSources() {
    axios.get('sources')
    .then((res) => {
      this.setState({sources: res.data});
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    const { sources } = this.state;
    return (
      <div>
        { sources.map(source => (
          <div key={source.name}>
          </div>
        ))}
      </div>
    );
  }
}

export default Subscriptions;
