import React from 'react';
import SubjectList from "../src/components/account/SubjectList";

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

            <SubjectList />
        </main>
    );
};

export default Account;
