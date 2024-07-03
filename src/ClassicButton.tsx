import React from 'react';

const ClassicButton = (title: string, classList?: string) => {
    const classes = 'button '.concat(classList || '');

    return (
        <button className={classes}> {title} </button>
      );
};

export default ClassicButton;