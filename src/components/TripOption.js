import React from 'react';
import PropTypes from 'prop-types';

import './TripOption.css';

const sortProductsById = (products = []) =>
  products.sort((a, b) => Number(a.productClassId) - Number(b.productClassId));

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
      sortProductsById(trip.products)
        .map(({ productClass, prices, status, statusCode }) => (
          <div
            key={productClass}
            className={`trip-option-product trip-option-product-${statusCode}`}>
            <div className="trip-option-product-value">
              {getPreviousValue(prices[0])}
              <div className="trip-option-product-actual">
                {prices[0].currencySymbol}
                {prices[0].rrpWithDiscount}
              </div>
            </div>
            <div className={`trip-option-product-status trip-option-product-status-${statusCode}`}>
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
      productClassId: PropTypes.string,
      status: PropTypes.string,
      statusCode: PropTypes.string,
      prices: PropTypes.array,
    })),
  }).isRequired,
};


export default TripOption;
