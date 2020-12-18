import React from 'react';
import TableRow from "./TableRow";

const TableRows = ({queue}) => {
    return (
        <>
            {queue && queue.map(({name, date}, i) => <TableRow name={name} number={i + 1} date={date}/>)}
        </>
    );
};

export default TableRows;
