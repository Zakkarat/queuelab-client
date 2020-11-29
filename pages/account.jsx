import React from 'react';

const Account = () => {
    return (
        <main>
            <div className="flex">
                <section className="sectionPocherhach">
                    <img
                        className="img"
                        src="./images/pocherhachRight.svg"
                        alt="pocherhachRight"
                    />
                    <p className="text">
                        "Ім’я користувача", я дуже радий знову тебе бачити! Нагадаю, що ти
                        можеш зайняти чергу для здачі робіт, натиснувши на кнопку “Зайняти
                        чергу” у верхньому правому куті цієї сторінки.
                    </p>
                </section>
                <section className="section">
                    <p className="text">
                        Також ти можеш взяти теорію, методичні вказівки та додаткову
                        літературу для виконання наступних робіт зі списку твоїх предметів
                        нижче.
                    </p>
                </section>
            </div>

            <section className="sectionMain">
                <button className="left">
                    <svg className="svg-img" width="18.26px" height="30px">
                        <use href="./images/sprite.svg#l_arrow"></use>
                    </svg>
                </button>
                <ul className="list">
                    <li className="item">
                        <a
                            href="https://t.me/communications_is81"
                            className="link"
                            target="_blank"
                        ><img
                            className="img"
                            src="./images/subjects-img/sub1.jpg"
                            alt="ГДК"
                        />
                            <p className="text">Групова динаміка і комунікації</p></a
                        >
                    </li>
                    <li className="item">
                        <a href="" className="link"
                        ><img
                            className="img"
                            src="./images/subjects-img/sub2.jpg"
                            alt="ІАД"
                        />
                            <p className="text">Інформаційний аналіз даних</p></a
                        >
                    </li>
                    <li className="item">
                        <a
                            href="https://t.me/OperationResearchIS8x"
                            className="link"
                            target="_blank"
                        ><img className="img" src="./images/subjects-img/sub3.jpg" alt="ДО"/>
                            <p className="text">Дослідження операцій - 1</p></a
                        >
                    </li>
                    <li className="item">
                        <a href="" className="link"
                        ><img
                            className="img"
                            src="./images/subjects-img/sub4.jpg"
                            alt="Англ. мова"
                        />
                            <p className="text">Іноземна мова</p></a
                        >
                    </li>
                    <li className="item">
                        <a href="https://t.me/PIS_Popenko" className="link" target="_blank"
                        ><img
                            className="img"
                            src="./images/subjects-img/sub5.jpg"
                            alt="ПІС"
                        />
                            <p className="text">Проектування інформ. систем</p></a
                        >
                    </li>
                    <li className="item">
                        <a href="https://t.me/arch_fict_is8x" className="link" target="_blank"
                        ><img className="img" src="./images/subjects-img/sub7.jpg" alt="КМ"/>
                            <p className="text">Комп'ютерні мережі</p></a
                        >
                    </li>
                    <li className="item">
                        <a href="https://t.me/asoiu_8x_OLAP" className="link" target="_blank"
                        ><img
                            className="img"
                            src="./images/subjects-img/sub8.jpg"
                            alt="OLAP"
                        />
                            <p className="text">Проектування сховищ даних</p></a
                        >
                    </li>
                </ul>
                <button disabled className="right">
                    <svg className="svg-img" width="18.26px" height="30px">
                        <use href="./images/sprite.svg#r_arrow"></use>
                    </svg>
                </button>
            </section>
        </main>
    );
};

export default Account;
