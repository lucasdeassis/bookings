import React from 'react';
import PropTypes from 'prop-types';

import './TripOption.css';

const getPreviousValue = price => (
  price.rrp !== price.rrpWithDiscount
    ? (
      <div className="trip-option-product-previous">
        {price.currencySymbol}
        {price.rrp}
      </div>
    )
    : null
);

export const TripOption = ({ trip }) => (
  <div className="trip-option">
    <div className="trip-option-header">
      <div className="trip-option-header-day">
        <div>{trip.dateText}</div>
        <div>{`(${trip.dateday})`}</div>
      </div>
      <div className="trip-option-header-temp">{trip.temperature}</div>
    </div>
    {
      trip.products.map(({ productClass, prices, status }) => (
        <div key={productClass} className="trip-option-product">
          <div className="trip-option-product-value">
            {getPreviousValue(prices[0])}
            <div className="trip-option-product-actual">
              {prices[0].currencySymbol}
              {prices[0].rrpWithDiscount}
            </div>
          </div>
          <div className="trip-option-product-status">
            {status}
          </div>
        </div>
      ))
    }
  </div>
);

TripOption.propTypes = {
  trip: PropTypes.shape({
    dateText: PropTypes.string,
    dateday: PropTypes.string,
    temperature: PropTypes.string,
    products: PropTypes.arrayOf(PropTypes.shape({
      productClass: PropTypes.string,
      status: PropTypes.string,
      prices: PropTypes.array,
    })),
  }).isRequired,
};


export default TripOption;
