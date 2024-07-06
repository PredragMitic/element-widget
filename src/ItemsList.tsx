import React from 'react';
import Item from './Item';
import { ItemData } from './DialogWindow';

const ItemsList = (prop: { updateSeleced: (position: number) => void, items: ItemData[], limit: boolean }) => {
  const items = prop.items.map((item, ind) => <Item
    key={ind}
    itemData={item}
    updateSeleced={() => prop.updateSeleced(ind)}
  />)

  return (
    <div className="items-list">{items}</div>
  );
};

export default ItemsList;