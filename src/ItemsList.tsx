import React from 'react';
import Item from './Item';

const ItemsList = (prop: { updateSeleced: (position: number) => void, items: boolean[], visible: boolean[],  limit: boolean }) => {
  const items = prop.items.map((item, ind) => <Item
    name={`Element ${ind + 1}`}
    key={ind}
    visible={true}
    disable={!item && prop.limit}
    updateSeleced={() => prop.updateSeleced(ind)}
  />)

  return (
    <div className="items-list">{items}</div>
  );
};

export default ItemsList;