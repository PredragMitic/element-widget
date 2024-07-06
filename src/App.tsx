import React, { useState } from 'react';
import './style/App.css';
import ClassicButton from './ClassicButton';
import DialogWindow from './DialogWindow';
import ListSelected from './ListSelected';

const App = () => {
  const [selected, setSelected] = useState([]);
  const [dialogState, setDialogState] = useState({show: false});

  const handleOnChange = (newIds: number[]) => {
    setSelected(newIds as never);

    console.log(newIds)
  };

  const removeItem = (itemId: number) => {
    setSelected(selected.filter((item) => item !== itemId))
  }

  const changeChoice = () => {
    setDialogState({show: true})
  } 

  const handleClose = () => {
    setDialogState({show: false})
  }

  return (
    <div className="App">
      <div className="select-item-title">Select items</div>
      <div className="items-count">You currently have {selected.length} selected items.</div>
      <ListSelected selected={selected} removeItem={removeItem}/>
      <div className='choice-button'>
        <ClassicButton title='Change my choice' onClick={changeChoice} />
      </div>
      <DialogWindow visible={dialogState} handleClose={handleClose} updateSelected={handleOnChange} />
    </div>
  );
}


export default App;