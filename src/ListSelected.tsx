import React from 'react';
import SelectedItem from './SelectedItem';

const ListSelected = (prop: { selected: number[], removeItem: (id: number) => void }) => {
  const content = prop.selected.map((item) =>
    <SelectedItem key={item} title={`Element ${item + 1}`} onClick={() => prop.removeItem(item)} />
  )

  return (
    <div className="list-selected">{content}</div>
  );
};

export default ListSelected;