import React from 'react';

interface ClassicButtonProps {
  title: string,
  onClick: () => void,
  classList?: string
}

const ClassicButton = (prop: ClassicButtonProps) => {
  const classes = 'button '.concat(prop.classList || '');

  return (
    <button className={classes} onClick={prop.onClick}> {prop.title} </button>
  );
};

export default ClassicButton;