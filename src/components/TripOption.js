import React from 'react';
import PropTypes from 'prop-types';

const TripOption = ({ trip }) => (
  <div className="trip__option">
    <div className="trip__option__header">
      <div>{trip.dateText}</div>
      <div>{trip.dateday}</div>
      <div>{trip.temperature}</div>
    </div>
  </div>
);

TripOption.propTypes = {
  trip: PropTypes.shape({
    dateText: PropTypes.string,
    dateday: PropTypes.string,
    temperature: PropTypes.string,
    products: PropTypes.arrayOf(PropTypes.shape({
      status: PropTypes.string,
      prices: PropTypes.array,
      productClass: PropTypes.string,
    })),
  }).isRequired,
};


export default TripOption;
