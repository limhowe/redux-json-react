import React, { PropTypes } from 'react';

const Items = ({ items }) => (
  <ul>
    {items.map((item, i) =>
      <li key={i}>{item.id}</li>
    )}
  </ul>
);

Items.PropTypes = {
  items : PropTypes.array.isRequed
};

export default Items;
