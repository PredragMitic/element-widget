import React from 'react';
import './style/DialogWindow.css';
import SearchBar from './SearchBar';
import ElementsWindow from './ElementsWindow';
import ListSelected from './ListSelected';
import ClassicButton from './ClassicButton';

const DialogWindow = () => {
  return (
    <div className="dialog-window">
      <div className="select-item-dialog">Select items</div>
      <SearchBar />
      <ElementsWindow />
      <div className="label-selected">Current selected items:</div>
      <ListSelected />
      <div className='buttons'> 
        <ClassicButton title='Save' />
        <ClassicButton title='Cancel' classList='red-button'/>
      </div>
    </div>
  );
};

export default DialogWindow;