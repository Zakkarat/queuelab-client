import React from 'react';
import {developers} from "../../libs/info/developers.json"
import Developer from "./Developer";

const DeveloperList = () => {
    return (
        <section className="down">
            <h1 className="devs">Розробники</h1>
            <ul className="dev-list">
                {developers.map(({name, image}) => <Developer key={name} name={name} image={image}/>)}
            </ul>
        </section>
    );
};

export default DeveloperList;
