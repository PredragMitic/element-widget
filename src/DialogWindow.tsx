import React, { useState } from 'react';
import './style/DialogWindow.css';
import SearchBar from './SearchBar';
import ListSelected from './ListSelected';
import ClassicButton from './ClassicButton';
import ItemsList from './ItemsList';

const DialogWindow = (prop: {updateSelected: (positions: number[]) => void}) => {
  const numItems = 300;

  // Array of checkbox states
  const [checkedState, setCheckedState] = useState(
    new Array(numItems).fill(false)
  );

  // Array of selected elements
  const [selected, setSelected] = useState([]);

  // Array of visible elments
  const [visible, setVisible] = useState(
    new Array(numItems).fill(true)
  )
  
  const itemsList = checkedState.map((_, i) => `Element ${i+1}`)

  const findItem = (substring: string) => {
    const indexes: number[] = [];
    itemsList.forEach((item, i) => {
      if (item.includes(substring)) {
        indexes.push(i)
      }
    })

    console.log(indexes)
    setVisible(visible.map((_item, i) => indexes.includes(i)))
  }

  findItem('100');

  const handleOnChange = (position: number) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    if (selected.length < 3 || checkedState[position]) {
      if (!checkedState[position]) {
        setSelected([...selected, position] as never);
      }
      else {
        setSelected(selected.filter((e) => e !== position));
      }
      
      setCheckedState(updatedCheckedState);
    }

    console.log(selected)
  };

  const removeItem = (itemId: number) => {
    setSelected(selected.filter((item) => item !== itemId))
  }

  return (
    <div className="dialog-window">
      <div className="select-item-dialog">Select items</div>
      <SearchBar />
      <div className="elements-window">
          <ItemsList updateSeleced={handleOnChange} items={checkedState} visible={visible}  limit={selected.length === 3}/>
      </div>
      <div className="label-selected">Current selected items:</div>
      <ListSelected selected={selected} removeItem={removeItem}/>
      <div className='buttons'> 
        <ClassicButton title='Save' onClick={() => prop.updateSelected(selected)} />
        <ClassicButton title='Cancel' classList='red-button' onClick={() => {}}/>
      </div>
    </div>
  );
};

export default DialogWindow;