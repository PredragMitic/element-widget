import React, { memo } from 'react';
import Item from './Item';
import { ItemData } from './DialogWindow';

interface ItemsListProps {
  items: ItemData[],
  enabled: boolean,
  selected: Set<number>,
  updateSelected: (position: number, state: boolean) => void
}

const ItemsList = ({items, enabled, selected, updateSelected}: ItemsListProps) => {
  const renderItems = items.map(
    (item) => {
      return item.visible && (
        <Item
          key={item.id}
          itemData={item}
          enabled={enabled}
          checked={selected.has(item.id)}
          updateSelected={updateSelected}
        />
      )
    }
  );

  return <div className='items-list'>{renderItems}</div>;
};

export default memo(ItemsList);