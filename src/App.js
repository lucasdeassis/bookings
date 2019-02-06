import React, { Component } from 'react';
import BookingsWebAPI from './api/bookings_web';

import TripOptionsList from './components/TripOptionsList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trips: [],
      fetch: 'pending',
    };

    this.dateInputRef = React.createRef();
    this.fetchAvailability = this.fetchAvailability.bind(this);
  }

  async fetchAvailability() {
    const searchDate = this.dateInputRef.current.value;

    if (!searchDate) {
      return;
    }

    this.setState({
      fetch: 'loading',
    });

    try {
      const { data = [] } = await BookingsWebAPI.availability(searchDate);

      this.setState({
        trips: data,
        fetch: data.length ? 'done' : 'error',
      });

    } catch (err) {
      this.setState({
        fetch: 'error',
      });
    }
  }

  render() {
    const { trips, fetch } = this.state;

    if (fetch === 'error') {
      return <div className="wrapper">Unfortunately, an error has occurred ¯\_(ツ)_/¯</div>
    }

    if (fetch === 'loading') {
      return <div className="wrapper loading">loading...</div>
    }

    return (
      <div className="wrapper">
        {fetch === 'done'
          ? <TripOptionsList trips={trips} />
          : (
            <div className="input">
              <div className="greeting-message">
                Welcome! Please provide a date to see our travel options:
               </div>
              <input
                type="date"
                className="search-date-input"
                name="trip-date" min="2019-02-05"
                ref={this.dateInputRef}
              />
              <button className="start-button" onClick={this.fetchAvailability}>
                Start
              </button>
            </div>
          )
        }
      </div>
    );
  }
}

export default App;
