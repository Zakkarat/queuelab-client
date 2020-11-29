import React from 'react';
import {queue} from '../../libs/queue/api/queue.json'
import TableRow from "./TableRow";

const TableRows = () => {
    return (
        <>
            {queue.map(({name, date}, i) => <TableRow name={name} number={i + 1} date={date}/>)}
        </>
    );
};

export default TableRows;
