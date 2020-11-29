import React, {useState} from 'react';
import ItemList from "../src/components/info/ItemList";

const Info = () => {
    const [isAuthorized, setIsAuthorized] = useState(false);

    return (
        <main>
            <section className="up">
                <div className="info">
                    <img className="img" src="./images/info-page/kpi.png" alt="kpi1"/>
                    <div className="text-box">
                        <p className="text">
                            Для того, щоб ти завжди був вкурсі справ твого університету і
                            кафедри, я підготував корисні посилання! Також хочу тебе
                            познайомити з моїми розробниками, вони дуже кльові люди!
                        </p>
                    </div>
                    <img className="img" src="./images/info-page/kpi18.png" alt="kpi18"/>
                </div>
                <div className="info-down">
                    <ItemList styledWith={'sites'} isAuthorized={isAuthorized} />
                    <img
                        className="pocherhach"
                        src="./images/pocherhachHands.svg"
                        alt="pocherhachHands"
                    />
                    <ItemList styledWith={'kpi-links'} isAuthorized={isAuthorized} />
                </div>
            </section>

            <section className="down">
                <h1 className="devs">Розробники</h1>
                <ul className="dev-list">
                    <li className="item">
                        <img className="img" src="./images/info-page/andrew.png" alt="andrew"/>
                        <p className="text">Андрій Бершадський</p>
                    </li>
                    <li className="item">
                        <img
                            className="img"
                            src="./images/info-page/natasha.png"
                            alt="natasha"
                        />
                        <p className="text">Наталія Бишовець</p>
                    </li>
                    <li className="item">
                        <img className="img" src="./images/info-page/vika.png" alt="vika"/>
                        <p className="text">Вікторія Власенко</p>
                    </li>
                    <li className="item">
                        <img className="img" src="./images/info-page/stas.png" alt="nastya"/>
                        <p className="text">Анастасія Лапа</p>
                    </li>
                    <li className="item">
                        <img className="img" src="./images/info-page/sasha.png" alt="sasha"/>
                        <p className="text">Олександр Якубовський</p>
                    </li>
                </ul>
            </section>
        </main>
    );
};

export default Info;
