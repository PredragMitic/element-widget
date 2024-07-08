import React, { useCallback, useEffect, useState, useMemo } from 'react';
import './style/DialogWindow.css';
import SearchBar from './SearchBar';
import ListSelected from './ListSelected';
import ClassicButton from './ClassicButton';
import ItemsList from './ItemsList';

export type ItemData = {
  name: string;
  visible: boolean;
  id: number;
  checked: boolean
}


interface DialogWindowProps {
  selected: Set<number>;
  handleClose: () => void;
  updateSelected: (positions: Set<number>) => void;
}

const DialogWindow = ({selected, handleClose, updateSelected}:DialogWindowProps) => {
  const numItems = 300;
  const initialItemsList = useMemo(() => new Array(numItems).fill(0).map((_, i) => ({
    name: `Element ${i + 1}`,
    visible: true,
    id: i + 1,
    checked: false
  }) as ItemData), [])

  // Array of checkbox states
  const [items, setItemsState] = useState(initialItemsList);

  const [checked, setChecked] = useState(new Set(selected))

  const [enabled, setEnabled] = useState(true);

  console.log("Dialog render")

  useEffect(() => {
    console.log(initialItemsList)
  }, [])

  const handleOnChange = useCallback((id: number, state: boolean) => {
    if (!state) {
      if (checked.size === 3) {
        setEnabled(true);
      }
      checked.delete(id)
    }
    else if (checked.size < 3) {
      checked.add(id)
    }

    if (checked.size === 3) {
      setEnabled(false);
    }

    setChecked(new Set(checked));
  }, [items]);

  const unselectItem = useCallback((itemId: number) => {
    if (checked.size === 3) setEnabled(true);

    checked.delete(itemId)
    setChecked(new Set(checked))
  }, []);

  const applyFilters = (searchWord: string, filterLimit: number) => {

    setItemsState((items) => {
      const newItems = items.map((item) => {
        if (item.name.includes(searchWord) && item.id > filterLimit)
          item.visible = true
        else
          item.visible = false
        return item
      })
      return newItems
    })
  }

    return (
      <div className={'dialog-window'}>
        <div className='dialog-header'>
          <div className="select-item-dialog">Select items</div>
          <div className='x-button dialog-x' onClick={handleClose}>X</div>
        </div>
        <SearchBar applyFilters={applyFilters} />
        <div className="elements-window">
          <ItemsList
            updateSelected={handleOnChange}
            selected={checked}
            items={items}
            enabled={enabled}
          />
        </div>
        <div className="label-selected">Current selected items:</div>
        <ListSelected
          selected={checked}
          removeItem={unselectItem}
        />
        <div className='buttons'>
          <ClassicButton title='Save' onClick={() => {
            updateSelected(checked)
            handleClose()
          }} />
          <ClassicButton
            title='Cancel'
            classList='red-button'
            onClick={handleClose}
          />
        </div>
      </div>
    );
  };

  export default DialogWindow;