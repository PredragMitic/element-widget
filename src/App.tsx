import React from 'react';
import './style/App.css';
import ClassicButton from './ClassicButton';
import DialogWindow from './DialogWindow';
import ListSelected from './ListSelected';

const App = () => {
  return (
    <div className="App">
      <div className="select-item-title">Select items</div>
      <div className="items-count">You currently have 2 selected items.</div>
      <ListSelected />
      <div className='choice-button'> 
        {ClassicButton('Change my choice')}
      </div>
      <DialogWindow />
    </div>
  );
}

export default App;
