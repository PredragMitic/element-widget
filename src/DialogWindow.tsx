import React, { useState } from 'react';
import './style/DialogWindow.css';
import SearchBar from './SearchBar';
import ListSelected from './ListSelected';
import ClassicButton from './ClassicButton';
import ItemsList from './ItemsList';

export type ItemData = {
  name: string
  selected: boolean
  enabled: boolean
  visible: boolean
}

const DialogWindow = (prop: {saved: number[], updateSelected: (positions: number[]) => void}) => {
  const numItems = 300;
  const initialItemsList = new Array(numItems).fill(0).map((_, i) => ({
    name: `Element ${i+1}`,
    selected: false,
    enabled: true,
    visible: true
  }) as ItemData)

  // Array of checkbox states
  const [items, setItemsState] = useState(initialItemsList);

  // Array of selected elements
  const [selected, setSelected] = useState(prop.saved);

  const handleOnChange = (position: number) => {
    if (selected.length < 3 || items[position].selected) {
      if (!items[position].selected) {
        setSelected([...selected, position] as never);
      }
      else {
        setSelected(selected.filter((e) => e !== position));
      }

      items.forEach((item, i) => {
        if (i === position) item.selected = !item.selected
      });
      setItemsState(items);
    }

    console.log(selected)
  };

  const unselectItem = (itemId: number) => {
    setSelected(selected.filter((item) => item !== itemId))
    const newItems = [...items]
    newItems.forEach((item, i) => {
      if (i === itemId) item.selected = false;
    });
    setItemsState(newItems)
  }

  const showItemsBySubstring = (substring: string) => {
    const newItems = [...items]
    newItems.forEach((item) => {
      if (item.name.includes(substring)) item.visible = true;
      else item.visible = false;
    });

    setItemsState(newItems)
  } 

  const handleSearchChange = (e: React.FormEvent<HTMLInputElement>) => {
    showItemsBySubstring(e.currentTarget.value);
  }

  const showItemsBigerThen = (limit: number) => {
    const newItems = [...items]
    newItems.forEach((item, i) => {
      if (i >= limit - 1 ) item.visible = true;
      else item.visible = false;
    });

    setItemsState(newItems)
  } 

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    showItemsBigerThen(Number(e.currentTarget.value));
  }

  return (
    <div className="dialog-window">
      <div className="select-item-dialog">Select items</div>
      <SearchBar handleSearchChange={handleSearchChange} handleFilterChange={handleFilterChange}/>
      <div className="elements-window">
          <ItemsList updateSeleced={handleOnChange} items={items} limit={selected.length === 3}/>
      </div>
      <div className="label-selected">Current selected items:</div>
      <ListSelected selected={selected} removeItem={unselectItem}/>
      <div className='buttons'> 
        <ClassicButton title='Save' onClick={() => prop.updateSelected(selected)} />
        <ClassicButton title='Cancel' classList='red-button' onClick={() => {}}/>
      </div>
    </div>
  );
};

export default DialogWindow;