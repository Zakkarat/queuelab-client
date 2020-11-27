import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <ul className="list">
                <li className="item">
                    <svg className="svg-img" width="30px" height="30px">
                        <use href="./images/sprite.svg#phone"></use>
                    </svg>
                    Телефон: <a className="link" href="tel:+38000000000">+380(00)000-00-00</a>
                </li>
                <li className="item">
                    <svg className="svg-img" width="30px" height="30px">
                        <use href="./images/sprite.svg#email"></use>
                    </svg>
                    Пошта:
                    <a className="link" href="maillto:queuelabtech@gmail.com"
                    >queuelabtech@gmail.com</a
                    >
                </li>
                <li className="item">
                    <svg className="svg-img" width="30px" height="30px">
                        <use href="./images/sprite.svg#telegram"></use>
                    </svg>
                    Telegram bot:
                    <a
                        className="link"
                        target="_blank"
                        href="https://telegram.me/queuelab_bot"
                    >@queuelab_bot</a
                    >
                </li>
            </ul>
        </footer>
    );
};

export default Footer;
