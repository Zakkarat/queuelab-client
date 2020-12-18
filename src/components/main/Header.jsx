import React from 'react';
import Link from "next/link";

const Header = ({isAuthorized, setIsAuthorized}) => {
    return (
        <header>
            <div className="header">
                <a className="logo">QUEUELAB</a>
                <ul className="list">
                    {isAuthorized ? <li className="item">
                            <a href="/account" className="btn"
                            >
                                <svg className="home-img" width="19px" height="18px">
                                    <use href="./images/sprite.svg#home"></use>
                                </svg>
                                Особистий кабінет</a
                            >
                        </li>
                        :
                        <li className="item">
                            <Link href="/">
                                <a className="btn">Головна сторінка</a>
                            </Link>
                        </li>}

                    <li className="item">
                        <Link href="/info">
                            <a className="btn">Інформація</a>
                        </Link>
                    </li>
                    {isAuthorized ?
                        <>
                            <li className="item">
                                <Link href="/subjects">
                                    <a className="btn">Переглянути чергу</a>
                                </Link>
                            </li>
                            <li className="item"><a onClick={() => setIsAuthorized(!isAuthorized)} className="btn">Вихід</a></li>
                        </>
                        :
                        <li className="item">
                            <Link href="/auth">
                                <a className="btn">Увійти</a>
                            </Link>
                        </li>
                    }
                </ul>
            </div>
        </header>
    );
};

export default Header;
