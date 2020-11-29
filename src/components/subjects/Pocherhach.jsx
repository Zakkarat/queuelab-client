import React from 'react';

const Pocherhach = ({number}) => {
    return (
        <img src={`./images/pocherhach/${number}.svg`} alt={number} className="poch"/>
    );
};

export default Pocherhach;
