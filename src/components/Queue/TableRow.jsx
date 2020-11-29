import React from 'react';

const TableRow = ({name, number, date}) => {
    return (
        <tr className="height">
            <td>{number}</td>
            <td className="names">{name}</td>
            <td>{date}</td>
        </tr>
    );
};

export default TableRow;
