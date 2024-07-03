import React from 'react';
import './style/DialogWindow.css';
import SearchBar from './SearchBar';

const DialogWindow = () => {
  return (
    <div className="dialog-window">
      <div className="select-item-dialog">Select items</div>
      <SearchBar />
    </div>
  );
};

export default DialogWindow;