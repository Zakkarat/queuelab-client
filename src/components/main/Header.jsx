import React from 'react';
import Link from "next/link";

const Header = () => {
    return (
        <header>
            <div className="header">
                <a href="./index.html" className="logo">QUEUELAB</a>
                <ul className="list">
                    <li className="item">
                        <Link href="/">
                            <a className="btn">Головна сторінка</a>
                        </Link>
                    </li>
                    <li className="item">
                        <Link href="/info-page">
                            <a className="btn">Інформація</a>
                        </Link>
                    </li>
                    <li className="item">
                        <Link href="/auth">
                            <a className="btn">Увійти</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
