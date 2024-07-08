import React from 'react';
import SelectedItem from './SelectedItem';

interface ListSelectedProps {
  selected: Set<number>,
  removeItem: (id: number) => void
}

const ListSelected = ({selected, removeItem}:ListSelectedProps) => {
  const content = Array.from(selected).map((item) =>
    <SelectedItem key={item} title={`Element ${item}`} onClick={() => removeItem(item)} />
  )

  return (
    <div className="list-selected">{content}</div>
  );
};

export default ListSelected;