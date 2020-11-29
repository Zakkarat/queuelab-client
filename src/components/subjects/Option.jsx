import React from 'react';

const Option = ({name, value}) => {
    return (
        <option className="item" value={value}>{name}</option>
    );
};

export default Option;
