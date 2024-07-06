import React from 'react';
import { ItemData } from './DialogWindow';

const Item = (prop: {key: number, itemData: ItemData, updateSeleced: () => void}) => {
  return (
        <div className={prop.itemData.visible ? 'item' : 'disabled'}>
          <input 
            type="checkbox" 
            className='checkbox-item' 
            checked={prop.itemData.selected} 
            disabled={!prop.itemData.enabled} 
            onChange={() => prop.updateSeleced()} />
          <label> {prop.itemData.name}</label>
        </div>
      );
};

export default Item;