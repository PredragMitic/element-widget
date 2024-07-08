import React, { memo, useEffect, useState } from 'react';
import { ItemData } from './DialogWindow';

interface ItemProps { 
  key: number,
  itemData: ItemData, 
  enabled: boolean,
  checked: boolean,
  updateSelected: (id: number, state: boolean) => void
}

const Item = (prop: ItemProps) => {
  const [selected, setSelected] = useState(prop.checked);

  useEffect(
    () => {
      console.log('Eff', prop.checked)
      setSelected(prop.checked)
    },
    [prop.checked]
  )

  const onChange = (id: number) => {
    setSelected((prev: unknown) => !prev);
    prop.updateSelected(id, !selected);
  };

  console.log('render')

  return (
    <div className='item'>
      <input
        type="checkbox"
        className='checkbox-item'
        checked={selected}
        disabled={!(prop.enabled || selected)}
        onChange={() => onChange(prop.itemData.id)} />
      <label> {prop.itemData.name}</label>
    </div>
  );
};

export default memo(Item);