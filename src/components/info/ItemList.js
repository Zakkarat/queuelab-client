import React, {useEffect, useState} from 'react';
import bars from '../../libs/info/bars.json';
import {api} from '../../libs/info/api/info.json';
import Item from "./Item";

const ItemList = ({styledWith, isAuthorized}) => {
    const [list, setList] = useState(bars[styledWith])
    useEffect(() => {
        if (styledWith === 'kpi-links' && isAuthorized) {
            setList([...bars['kpi-links'], ...api])
        } else if (styledWith === 'kpi-links' && !isAuthorized) {
            setList([...bars['kpi-links'], bars["sites"][3]])
        }
        if (styledWith === 'sites' && !isAuthorized) {
            const newList = [...list];
            newList.pop();
            setList(newList);
        }
    }, [])

    return (
        <ul className={styledWith}>
            {list.map(({name, href, svg}) => <Item key={name} name={name} href={href} svg={svg} />)}
        </ul>
    );
};

export default ItemList;
