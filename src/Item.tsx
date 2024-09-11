import React, { memo, useEffect, useState } from 'react';
import { itemsNames } from './DialogWindow';

interface ItemProps {
  id: number,
  enabled: boolean,
  checked: boolean,
  updateSelected: (id: number, state: boolean) => void
}

const Item = ({id, enabled, checked, updateSelected }: ItemProps) => {
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
        onChange={() => onChange(id)} />
      <label> {itemsNames[id]}</label>
    </div>
  );
};

export default memo(Item);