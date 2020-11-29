import React from 'react';

const Item = ({name, href, svg}) => {
    return (
        <li className="item">
            <svg className="svg-img" width="36px" height="36px">
                <use href={`./images/sprite.svg#${svg}`}></use>
            </svg>
            <a target="_blank" className="link" href={href}
            >{name}</a>
        </li>
    );
};

export default Item;
