import React, { memo, useCallback } from 'react';
import Item from './Item';
import { ItemData } from './DialogWindow';

interface ItemsListProps {
  updateSeleced: (position: number) => void,
  items: ItemData[],
  limit: boolean
}

const ItemsList = (prop: ItemsListProps) => {
  
  const updateSelected = useCallback( (ind: number) => {
    prop.updateSeleced(ind)
  }, [])

  console.log('render2')
  
  return (
    <div className="items-list">{
      prop.items.map((item, ind) => <Item
        key={ind}
        itemData={item}
        updateSeleced={() => updateSelected(ind)}
      />)
    }</div>
  );
};

export default memo(ItemsList);