import React, { useState } from 'react';
import './style/DialogWindow.css';
import SearchBar from './SearchBar';
import ListSelected from './ListSelected';
import ClassicButton from './ClassicButton';
import ItemsList from './ItemsList';

const DialogWindow = (prop: {updateSelected: (positions: number[]) => void}) => {
  const numItems = 300;
  const [checkedState, setCheckedState] = useState(
    new Array(numItems).fill(false)
  );

  const [selected, setSelected] = useState([]);

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


  return (
    <div className="dialog-window">
      <div className="select-item-dialog">Select items</div>
      <SearchBar />
      <div className="elements-window">
          <ItemsList updateSeleced={handleOnChange} items={checkedState}  limit={selected.length === 3}/>
      </div>
      <div className="label-selected">Current selected items:</div>
      <ListSelected />
      <div className='buttons'> 
        <ClassicButton title='Save' onClick={() => prop.updateSelected(selected)} />
        <ClassicButton title='Cancel' classList='red-button' onClick={() => {}}/>
      </div>
    </div>
  );
};

export default DialogWindow;