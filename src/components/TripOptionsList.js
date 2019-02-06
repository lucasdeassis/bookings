import React from 'react';
import PropTypes from 'prop-types';
import TripOption from './TripOption';

import './TripOptionsList.css';

const MAX_OPTIONS_PER_TIME = 8;

const PRODUCTS_CLASSES = [
  "Premier",
  "Premier Plus",
  "Catamaran"
];

const TripOptionsList = ({ trips }) => (
  <div className="trip">
    <div className="trip-option">
      <div />
      {
        PRODUCTS_CLASSES.map(productClass => (
          <div className="trip-option-label">{productClass}</div>
        ))
      }
    </div>
    {
      [...Array(MAX_OPTIONS_PER_TIME)].map((_, index) => (
        <TripOption
          key={trips[index].date}
          trip={trips[index]}
        />
      ))
    }
  </div>
);

TripOptionsList.propTypes = {
  trips: PropTypes.array.isRequired,
};

export default TripOptionsList;
