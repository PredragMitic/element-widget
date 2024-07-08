import React, { useCallback, useState } from 'react';
import './style/DialogWindow.css';
import SearchBar from './SearchBar';
import ListSelected from './ListSelected';
import ClassicButton from './ClassicButton';
import ItemsList from './ItemsList';

export type ItemData = {
  name: string;
  selected: boolean;
  enabled: boolean;
  visible: boolean;
  id: number;
}

const numItems = 300;
const initialItemsList = new Array(numItems).fill(0).map((_, i) => ({
  name: `Element ${i + 1}`,
  selected: false,
  enabled: true,
  visible: true,
  id: i + 1,
}) as ItemData)

interface DialogWindowProps {
  visible: { show: boolean },
  handleClose: () => void
  updateSelected: (positions: number[]) => void
}

const DialogWindow = (prop: DialogWindowProps) => {

  // Array of checkbox states
  const [items, setItemsState] = useState(initialItemsList);

  // Array of selected elements
  const [selected, setSelected] = useState([]);

  const handleOnChange = useCallback( (position: number) => {
    if (selected.length < 3 || items[position].selected) {
      if (!items[position].selected) {
        setSelected([...selected, position] as never);
      }
      else {
        setSelected(selected.filter((e) => e !== position));
      }

      items.forEach((item, i) => {
        if (i === position) item.selected = !item.selected
        item.enabled = true
      });
      setItemsState(items);
    }

    const newItems = [...items]
    newItems.forEach((item) => {

      if (!item.selected && selected.length === 2) item.enabled = false
      else item.enabled = true
    });
    setItemsState(newItems)


    console.log(selected)
  }, [selected, items] );

  const unselectItem = (itemId: number) => {
    setSelected(selected.filter((item) => item !== itemId))
    const newItems = [...items]
    newItems.forEach((item, i) => {
      if (i === itemId) item.selected = false;
      item.enabled = true
    });
    setItemsState(newItems)
  }


  const applyFilters = (searchWord: string, filterLimit: number) => {
    const newItems = initialItemsList.filter((item) => item.name.includes(searchWord) && item.id > filterLimit);

    setItemsState(newItems)
  }

  return (
    <div className={prop.visible.show ? 'dialog-window' : 'disabled'}>
      <div className='dialog-header'>
        <div className="select-item-dialog">Select items</div>
        <div className='x-button dialog-x' onClick={prop.handleClose}>X</div>
      </div>
      <SearchBar applyFilters={applyFilters} />
      <div className="elements-window">
        <ItemsList updateSeleced={handleOnChange} items={items} limit={selected.length === 3} />
      </div>
      <div className="label-selected">Current selected items:</div>
      <ListSelected selected={selected} removeItem={unselectItem} />
      <div className='buttons'>
        <ClassicButton title='Save' onClick={() => {
          prop.updateSelected(selected)
          prop.handleClose()
          }} />
        <ClassicButton title='Cancel' classList='red-button' onClick={prop.handleClose} />
      </div>
    </div>
  );
};

export default DialogWindow;