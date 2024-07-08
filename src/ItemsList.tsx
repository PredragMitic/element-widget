import React, { memo } from 'react';
import Item from './Item';
import { ItemData } from './DialogWindow';

interface ItemsListProps {
  updateSelected: (position: number, state: boolean) => void,
  items: ItemData[]
  enabled: boolean,
  selected: Set<number>
}

const ItemsList = (prop: ItemsListProps) => {
  console.log('render items list');
  const renderItems = prop.items.map(
    (item) => {
      return item.visible && (
        <Item
          key={item.id}
          itemData={item}
          enabled={prop.enabled}
          checked={prop.selected.has(item.id)}
          updateSelected={prop.updateSelected}
        />
      )
    }
  );

  return <div className='items-list'>{renderItems}</div>;
};

export default memo(ItemsList);