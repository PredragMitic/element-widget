import React, { memo } from 'react';
import { ItemData } from './DialogWindow';

interface ItemProps { 
  key: number, 
  itemData: ItemData, 
  updateSeleced: () => void
}

const Item = (prop: ItemProps) => {
  console.log('render')

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

export default memo(Item);