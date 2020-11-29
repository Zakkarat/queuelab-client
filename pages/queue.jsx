import React, {useState, useEffect} from 'react';
import TableRows from "../src/components/Queue/TableRows";
import useProtected from "../src/utils/useProtected";
import {useRouter} from "next/router";
import {options} from '../src/libs/subjects/api/options.json'

const Queue = (isAuthorized) => {
    useProtected(isAuthorized)

    const router = useRouter();
    const [subject, setSubject] = useState('');
    useEffect(() => {
        const searchedSubject = router.query.subject;
        const subject = options.filter(subject => subject.value === searchedSubject)[0];
        setSubject(subject.name)
    }, [subject])
    return (
        <main className="queue">
            <h1 className="title">Черга на {subject}</h1>

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
