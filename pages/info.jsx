import React from 'react';
import ItemList from "../src/components/info/ItemList";
import DeveloperList from "../src/components/info/DeveloperList";

const Info = ({isAuthorized}) => {
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
                <ItemList styledWith={'sites'} isAuthorized={isAuthorized}/>
                <img
                    className="pocherhach"
                    src="./images/pocherhachHands.svg"
                    alt="pocherhachHands"
                />
                <ItemList styledWith={'kpi-links'} isAuthorized={isAuthorized}/>
            </div>
        </section>

        <DeveloperList/>
    </main>
    );
};

export default Info;
