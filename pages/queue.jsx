import React from 'react';
import TableRows from "../src/components/Queue/TableRows";

const Queue = () => {
    return (
        <main className="queue">
            <h1 className="title">Черга на "назва предмету"</h1>

            <div className="scrollable">
                <table className="table">
                    <tr className="height">
                        <th className="title">№</th>
                        <th className="title">Прізвище Ім'я</th>
                        <th className="title">Дата і час</th>
                    </tr>
                    <TableRows/>
                </table>
            </div>
            <div className="wrapper-queue">
                <img
                    className="img"
                    src="./images/pocherhachHands.svg"
                    alt="pocherhachHands"
                />
                <div className="wrapper-help">
                    <p className="help">
                        Почергач дуже старався для тебе сьогодні і хоче, щоб ти нарешті став
                        у чергу та здав свою лабораторку вчасно!
                    </p>
                </div>
                <button className="btn">Зайняти чергу</button>
            </div>
        </main>
    );
};

export default Queue;
