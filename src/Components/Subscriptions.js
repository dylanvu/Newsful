import React, { Component } from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';
import { Button, Checkbox } from 'react-bootstrap';

class Subscriptions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sources: [],
      subscriptions: []
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchSources();
    this.fetchSubscriptions();
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

  fetchSubscriptions() {
    axios.get('subscriptions')
    .then((res) => {
      this.setState({subscriptions: res.data});
    })
    .catch((err) => {
      console.log(err);
    });
  }

  handleInputChange(event) {
    const subscriptions = this.state.subscriptions;
    const sourceId = parseInt(event.target.value, 10);
    if (event.target.checked) {
      subscriptions.push(sourceId)
    } else {
      subscriptions.splice(subscriptions.indexOf(sourceId), 1)
    }

    this.setState({subscriptions})
  }

  handleSubmit() {
    event.preventDefault();
    axios.post('subscriptions', this.state.subscriptions)
    .then((res) => {
      browserHistory.push('/feed');
    })
    .catch((err) => {
      console.log(err);
    })
  }

  render() {
    const { sources } = this.state;
    return (
      <div>
        <h2>Subscriptions</h2>
        <form onSubmit={this.handleSubmit}>
          <Button type="submit">Update Subscriptions</Button>
          { sources.map(source => (
            <div key={source.id}>
              <Checkbox
                value={source.id}
                name="subscribed"
                type="checkbox"
                checked={this.state.subscriptions.includes(source.id)}
                onChange={this.handleInputChange}
              >
                {source.name}
              </Checkbox>
            </div>
          ))}
        </form>
      </div>
    );
  }
}

export default Subscriptions;
