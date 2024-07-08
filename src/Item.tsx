import React, { memo, useEffect, useState } from 'react';
import { ItemData } from './DialogWindow';

interface ItemProps {
  key: number,
  itemData: ItemData,
  enabled: boolean,
  checked: boolean,
  updateSelected: (id: number, state: boolean) => void
}

const Item = ({ itemData, enabled, checked, updateSelected }: ItemProps) => {
  const [selected, setSelected] = useState(checked);

  useEffect(
    () => {
      setSelected(checked)
    },
    [checked]
  )

  const onChange = (id: number) => {
    setSelected((prev: unknown) => !prev);
    updateSelected(id, !selected);
  };

  return (
    <div className='item'>
      <input
        type="checkbox"
        className='checkbox-item'
        checked={selected}
        disabled={!(enabled || selected)}
        onChange={() => onChange(itemData.id)} />
      <label> {itemData.name}</label>
    </div>
  );
};

export default memo(Item);