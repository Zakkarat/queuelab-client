import React from 'react';
import useProtected from "../src/utils/useProtected";
import Pocherhach from "../src/components/subjects/Pocherhach";
import OptionList from "../src/components/subjects/OptionList";
import Link from "next/link";

const Subjects = (isAuthorized) => {
    useProtected(isAuthorized);
    return (
        <main>
            <section className="hi">
                <img className="img" src="./images/pocherhach4.svg" alt="pocherhach4"/>
                <p className="text">
                    Тепер ти можеш переглянути або зайняти чергу на бажаний предмет на
                    найближчу дату! Для цього тобі лише необхідно обрати предмет та
                    натиснути кнопку “Переглянути чергу”!
                </p>
            </section>
            <section className="choose-subj">
                <p className="text">Предмети</p>
                <div className="wrapper">
                    <select className="list">
                        <option className="item" value="" disabled selected>
                            Оберіть предмет..
                        </option>
                        <OptionList/>
                    </select>
                    <svg className="svg-img" width="20px" height="20px">
                        <use href="./images/sprite.svg#down_arrow"/>
                    </svg>
                </div>
                <Link href="/queue">
                    <button className="btn">
                        <a className="link">Переглянути чергу</a>
                    </button>
                </Link>
            </section>
            <section className="pocherhachs">
                {new Array(7).fill('').map((_, i) => <Pocherhach key={i} number={i + 1}/>)}
            </section>

            <p className="description">
                Ми - велике сімейство Почергачей! У кожного з нас є велике призначення -
                допомогти тобі у навчанні шляхом супроводу по чергам!
            </p>
        </main>
    );
};

export default Subjects;
