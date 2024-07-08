import React, { useCallback, useState } from 'react';
import './style/DialogWindow.css';
import SearchBar from './SearchBar';
import ListSelected from './ListSelected';
import ClassicButton from './ClassicButton';
import ItemsList from './ItemsList';

export type ItemData = {
  name: string;
  visible: boolean;
  id: number;
}

const numItems = 300;
const initialItemsList = new Array(numItems).fill(0).map((_, i) => ({
  name: `Element ${i + 1}`,
  visible: true,
  id: i + 1,
}) as ItemData)

interface DialogWindowProps {
  visible: { show: boolean };
  selected: Set<number>;
  handleClose: () => void;
  updateSelected: (positions: Set<number>) => void;
}

const DialogWindow = (prop: DialogWindowProps) => {
  // Array of checkbox states
  const [items, setItemsState] = useState(initialItemsList);

  const [checked, setChecked] = useState(new Set(prop.selected))

  const [checkedList, setCheckedList] = useState(new Array(numItems).fill(false));

  const [enabled, setEnabled] = useState(true);

  console.log("Dialog render")

  const handleOnChange = useCallback((id: number) => {
    if (checkedList[id]) {
      if (checked.size === 3) {
        setEnabled(true);
      }
      checked.delete(id)
      checkedList[id] = false
    }
    else if (checked.size < 3) {
      checked.add(id)
      checkedList[id] = true
    }

    if (checked.size === 3) {
      setEnabled(false);
    }

    setCheckedList(checkedList)

    setItemsState(items)
    setChecked(new Set(checked));
  }, [items, checkedList]);

  const unselectItem = useCallback((itemId: number) => {
    if (checked.size === 3) setEnabled(true);

    checked.delete(itemId)
    setChecked(new Set(checked))

    setCheckedList(checkedList.map((e, i) => i !== itemId ? e : !e));
  }, [checkedList]);

  const applyFilters = (searchWord: string, filterLimit: number) => {
    const newItems = items.map((item) => {
      if (item.name.includes(searchWord) && item.id > filterLimit)
        item.visible = true
      else
        item.visible = false
      return item
    });

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
        <ItemsList
          updateSelected={handleOnChange}
          checkedList={checkedList}
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
          prop.updateSelected(checked)
          prop.handleClose()
        }} />
        <ClassicButton
          title='Cancel'
          classList='red-button'
          onClick={prop.handleClose}
        />
      </div>
    </div>
  );
};

export default DialogWindow;