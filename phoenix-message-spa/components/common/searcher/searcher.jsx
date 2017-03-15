import React, { PropTypes } from 'react';

const Searcher = ({ className, textValue, valueChangeCb }) => (
  <div className={className}>
    <i className="material-icons">search</i>
    <input type="text" placeholder="Search" defaultValue={textValue} onChange={(v) => { valueChangeCb(v.target.value); }} />
  </div>
);

Searcher.propTypes = {
  className: PropTypes.string,
  textValue: PropTypes.string,
  valueChangeCb: PropTypes.func,
};

export default Searcher;
