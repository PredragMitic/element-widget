import React, { useCallback, useState, useMemo, useEffect } from 'react';
import './style/DialogWindow.css';
import SearchBar from './SearchBar';
import ListSelected from './ListSelected';
import ClassicButton from './ClassicButton';
import ItemsList from './ItemsList';

// This is global variables
export const numItems = 300;
export const itemsNames = new Array(numItems).fill(0).map((_, i) => `Element ${i + 1}`)

interface DialogWindowProps {
  selected: Set<number>,
  handleClose: () => void,
  updateSelected: (positions: Set<number>) => void,
}

const DialogWindow = ({ selected, handleClose, updateSelected }: DialogWindowProps) => {

  const initialItemsList = useMemo(() => itemsNames.map(() => true), [])

  // Array of checkbox states
  const [visible, setVisibleState] = useState(initialItemsList);


  // Array of checked items ids
  const [checked, setChecked] = useState(new Set(selected))

  // State of all checkboxes
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    if (checked.size === 3) setEnabled(false);
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
  }, [visible]);

  const unselectItem = useCallback((itemId: number) => {
    if (checked.size === 3) setEnabled(true);

    checked.delete(itemId)
    setChecked(new Set(checked))
  }, []);

  const applyFilters = (searchWord: string, filterLimit: number) => {
    setVisibleState(
      itemsNames.map((name, i) => {
        if (name.includes(searchWord) && i > filterLimit)
          return true;
        else
          return false;
      })
    )
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
          visible={visible}
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