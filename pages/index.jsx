import React from "react";

export default function Home() {
  return (
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
  )
}
