import React from 'react';

const ClassicButton = (prop: {title: string, classList?: string}) => {
    const classes = 'button '.concat(prop.classList || '');

    return (
        <button className={classes}> {prop.title} </button>
      );
};

export default ClassicButton;