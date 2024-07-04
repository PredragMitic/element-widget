import React from 'react';

const Item = (prop: {name: string }) => {
    return (
        <div className="item">
          <input type="checkbox" className='checkbox-item' />
          <label> {prop.name}</label>
        </div>
      );
};

export default Item;