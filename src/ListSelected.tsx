import React from 'react';
import SelectedItem from './SelectedItem';

interface ListSelectedProps {
  selected: Set<number>,
  removeItem: (id: number) => void
}

const ListSelected = (prop: ListSelectedProps) => {
  const content = Array.from(prop.selected).map((item) =>
    <SelectedItem key={item} title={`Element ${item + 1}`} onClick={() => prop.removeItem(item)} />
  )

  return (
    <div className="list-selected">{content}</div>
  );
};

export default ListSelected;