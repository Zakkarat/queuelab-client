import React from "react";
import DefaultPageWrapper from "../src/helpers/DefaultPageWrapper";

export default function Home() {
  return (
    <DefaultPageWrapper>
      <header>
        <div className="header">
          <a href="./index.html" className="logo">QUEUELAB</a>
          <ul className="list">
            <li className="item">
              <a href="./index.html" className="btn">Головна сторінка</a>
            </li>
            <li className="item">
              <a href="./info-page.html" className="btn">Інформація</a>
            </li>
            <li className="item">
              <a href="./auth.html" className="btn">Увійти</a>
            </li>
          </ul>
        </div>
      </header>
      <main className="main">
        <div className="block">
          <h1 className="hero">QUEUELAB</h1>
          <p className="text">
            Привіт, тут ти зможеш зайняти чергу на бажаний <br/>
            предмет та здати лабораторку вчасно!
          </p>
          <ul className="list">
            <li className="item">
              <a href="./auth.html" className="btn enter">Увійти</a>
            </li>
            <li className="item">
              <a href="./info-page.html" className="btn more">Дізнатися більше</a>
            </li>
          </ul>
        </div>
      </main>
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
    </DefaultPageWrapper>
  )
}
