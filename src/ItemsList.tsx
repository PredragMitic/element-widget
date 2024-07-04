import React from 'react';
import Item from './Item';

const ItemsList = () => {
    const number = 9;
    const states = new Array(number).fill(false);

    const items = states.map((_item, ind) => <Item name={`Element ${ind + 1}`} key={ind} />)

    return (
        <div className="items-list">{items}</div>
      );
};

export default ItemsList;