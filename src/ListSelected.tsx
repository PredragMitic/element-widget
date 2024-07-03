import React from 'react';
import ClassicButton from './ClassicButton';

const ListSelected = () => {
    return (
        <div className="list-selected">
          {ClassicButton('Element 5')}
          {ClassicButton('Element 51')}
        </div>
      );
};

export default ListSelected;