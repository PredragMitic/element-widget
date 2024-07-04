import React from 'react';

const Item = (prop: {key: number, name: string, disable: boolean, updateSeleced: () => void}) => {
    return (
        <div className="item">
          <input type="checkbox" className='checkbox-item' disabled={prop.disable} onClick={() => prop.updateSeleced()} />
          <label> {prop.name}</label>
        </div>
      );
};

export default Item;