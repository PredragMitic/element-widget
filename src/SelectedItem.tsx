import React from 'react';

interface SelectedItemProps {
  title: string,
  onClick: () => void,
  classList?: string
}

const SelectedItem = (prop: SelectedItemProps) => {
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