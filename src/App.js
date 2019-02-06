import React, { Component } from 'react';
import BookingsWebAPI from './api/bookings_web';

import TripOptionsList from './components/TripOptionsList';
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

    return (
      <div className="wrapper">
        { trips.length
          ? <TripOptionsList trips={trips} />
          : <div>loading...</div>
        }
      </div>
    );
  }
}

export default App;
