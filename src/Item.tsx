import React from 'react';

const Item = (prop: {key: number, visible: boolean, name: string, disable: boolean, updateSeleced: () => void}) => {
  return (
        <div className={prop.visible ? 'item' : 'disabled'}>
          <input type="checkbox" className='checkbox-item' disabled={prop.disable} onClick={() => prop.updateSeleced()} />
          <label> {prop.name}</label>
        </div>
      );
};

export default Item;