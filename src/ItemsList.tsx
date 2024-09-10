import React, { memo } from 'react';
import Item from './Item';

interface ItemsListProps {
  visible: boolean[],
  enabled: boolean,
  selected: Set<number>,
  updateSelected: (position: number, state: boolean) => void
}

const ItemsList = ({visible, enabled, selected, updateSelected}: ItemsListProps) => {
  const renderItems = visible.map(
    (item, i) => {
      return item && (
        <Item
          key={i}
          id={i}
          enabled={enabled}
          checked={selected.has(i)}
          updateSelected={updateSelected}
        />
      )
    }
  );

  return <div className='items-list'>{renderItems}</div>;
};

export default memo(ItemsList);