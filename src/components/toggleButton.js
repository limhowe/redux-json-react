import React, { PropTypes } from 'react';

const ToggleButton = ({ value, onClick, options }) => (
  <button onClick={e=>onClick(e.target.value)}
    value={value} {...options}>
    {value}
  </button>
);

ToggleButton.PropTypes = {
  options: PropTypes.object.isRequed,
  value: PropTypes.string.isRequed,
  onClick: PropTypes.func.isRequed
};

export default ToggleButton;
