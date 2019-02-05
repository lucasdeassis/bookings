import React, { Component } from 'react';
import BookingsWebAPI from './api/bookings_web';

import TripOptionsList from "./components/TripOptionsList";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trips: [],
    };
  }

  async componentDidMount() {
    const { data } = await BookingsWebAPI.availability('2019-02-05');

    this.setState({
      trips: data,
    });
  }

  render() {
    const { trips } = this.state;

    if (!trips.length) {
      return <div>loading...</div>;
    }

    return (
      <div className="wrapper">
          <TripOptionsList trips={trips} />
      </div>
    );
  }
}

export default App;
