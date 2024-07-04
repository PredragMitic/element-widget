import React from 'react';

const ClassicButton = (prop: {title: string, onClick: () => void, classList?: string}) => {
    const classes = 'button '.concat(prop.classList || '');

    return (
        <button className={classes} onClick={prop.onClick}> {prop.title} </button>
      );
};

export default ClassicButton;