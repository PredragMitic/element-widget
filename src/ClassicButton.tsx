import React from 'react';

interface ClassicButtonProps {
  title: string,
  classList?: string,
  onClick: () => void
}

const ClassicButton = ({ title, classList, onClick }: ClassicButtonProps) => {
  const classes = 'button '.concat(classList || '');

  return (
    <button className={classes} onClick={onClick}> {title} </button>
  );
};

export default ClassicButton;