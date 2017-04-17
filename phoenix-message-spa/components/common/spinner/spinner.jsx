import React, { PropTypes } from 'react';

import './spinner-style';

const Spinner = ({ className }) => (
  <div className={`spinner ${className}`}>
    <div className="double-bounce1" />
    <div className="double-bounce2" />
  </div>
);

Spinner.propTypes = {
  className: PropTypes.string,
};

export default Spinner;
