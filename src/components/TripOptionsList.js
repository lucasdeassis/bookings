import React from 'react';
import PropTypes from 'prop-types';
import TripOption from './TripOption';

const TripOptionsList = ({ trips }) => (
  <div className="trip__list">
    {
      trips.map(option => (
        <TripOption
          key={option.date}
          option={option}
        />
      ))
    }
  </div>
);

TripOptionsList.propTypes = {
  trips: PropTypes.array.isRequired,
};

export default TripOptionsList;
