import React, { memo } from 'react';
import Item from './Item';
import { ItemData } from './DialogWindow';

interface ItemsListProps {
  updateSelected: (position: number) => void,
  checkedList: boolean[],
  items: ItemData[]
  enabled: boolean
}

const ItemsList = (prop: ItemsListProps) => {
  console.log('render items list');
  const renderItems = prop.items.map(
    (item, ind) => {
      return item.visible && (
        <Item
          key={item.id}
          itemData={item}
          enabled={prop.enabled}
          checked={prop.checkedList[ind]}
          updateSelected={() => prop.updateSelected(ind)}
        />
      )
    }
  );

  return <div className='items-list'>{renderItems}</div>;
};

export default memo(ItemsList);