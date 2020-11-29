import React from 'react';
import {options} from '../../libs/subjects/api/options.json'
import Option from "./Option";

const OptionList = () => {
    return (
            options.map(({name, value}) => <Option name={name} value={value}/>)
    );
};

export default OptionList;
