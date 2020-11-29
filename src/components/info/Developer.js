import React from 'react';

const Developer = ({name, image}) => {
    return (
        <li className="item">
            <img
                className="img"
                src={`./images/info-page/${image}.png`}
                alt={image}
            />
            <p className="text">{name}</p>
        </li>
    );
};

export default Developer;
