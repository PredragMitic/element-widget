import React, { useState } from 'react';
import './style/App.css';
import ClassicButton from './ClassicButton';
import DialogWindow from './DialogWindow';
import ListSelected from './ListSelected';

const App = () => {
  const [selected, setSelected] = useState([]);
  const [saved, setSaved] = useState([])

  const handleOnChange = (newIds: number[]) => {
    setSelected(newIds as never);

    console.log(newIds)
  };

  const removeItem = (itemId: number) => {
    setSelected(selected.filter((item) => item !== itemId))
  }

  return (
    <div className="App">
      <div className="select-item-title">Select items</div>
      <div className="items-count">You currently have {selected.length} selected items.</div>
      <ListSelected selected={selected} removeItem={removeItem}/>
      <div className='choice-button'>
        <ClassicButton title='Change my choice' onClick={() => setSaved(selected)} />
      </div>
      <DialogWindow saved={saved} updateSelected={handleOnChange} />
    </div>
  );
}


export default App;