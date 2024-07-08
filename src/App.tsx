import React, { useState } from 'react';
import './style/App.css';
import ClassicButton from './ClassicButton';
import DialogWindow from './DialogWindow';
import ListSelected from './ListSelected';

const App = () => {
  const [selected, setSelected] = useState(new Set<number>());
  const [dialogState, setDialogState] = useState({ show: true });

  const handleOnChange = (newIds: Set<number>) => {
    setSelected(new Set(newIds));
  };

  const removeItem = (itemId: number) => {
    selected.delete(itemId)
    setSelected(new Set(selected))
  }

  const changeChoice = () => {
    setDialogState({ show: true })
  }

  const handleClose = () => {
    setDialogState({ show: false })
  }

  return (
    <div className="App">
      <div className="select-item-title">Select items</div>
      <div className="items-count">You currently have {selected.size} selected items.</div>
      <ListSelected selected={selected} removeItem={removeItem} />
      <div className='choice-button'>
        <ClassicButton title='Change my choice' onClick={changeChoice} />
      </div>
      <DialogWindow
        visible={dialogState}
        selected={selected}
        handleClose={handleClose}
        updateSelected={handleOnChange}
      />
    </div>
  );
}


export default App;