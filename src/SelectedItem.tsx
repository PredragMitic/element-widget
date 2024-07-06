import React from 'react';

const SelectedItem = (prop: { title: string, onClick: () => void, classList?: string }) => {
  const classes = 'selected '.concat(prop.classList || '');

  return (
    <div className={classes} onClick={prop.onClick}>
      <div className='selected-title' >{prop.title} </div>
      <div className='close-button'>
        <image className='separator' />
        <div className='x-button'>X</div>
      </div>
    </div>
  );
};

export default SelectedItem;