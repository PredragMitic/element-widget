import React from 'react';
import SelectedItem from './SelectedItem';
import { itemsNames } from './DialogWindow';

interface ListSelectedProps {
  selected: Set<number>,
  removeItem: (id: number) => void
}

const ListSelected = ({selected, removeItem}:ListSelectedProps) => {
  const content = Array.from(selected).map((item, i) =>
    <SelectedItem key={item} title={itemsNames[i]} onClick={() => removeItem(item)} />
  )

  return (
    <div className="list-selected">{content}</div>
  );
};

export default ListSelected;