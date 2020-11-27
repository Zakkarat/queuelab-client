import React from 'react';

const Auth = () => {
    return (
        <main className="main">
            <div className="block">
                <div className="flex">
                    <img
                        src="./images/pocherhachTree.svg"
                        alt="pocherhachTree"
                        className="img"
                    />
                    <p className="text">
                        Мене звати Почергач. Я допоможу тобі у процесі заняття черги. Спершу
                        тобі треба ввести свої дані та групу, щоб я міг знайти твій розклад.
                    </p>
                </div>
                <form className="form">
                    <label className="form-field">
                        <div className="form-flex">
                            <span className="form-label">Ім'я</span>
                            <input
                                className="form-input"
                                type="text"
                                name="first_name"
                                autoComplete="given-name"
                            />
                        </div>
                    </label>
                    <label className="form-field"
                    >
                        <div className="form-flex">
                            <span className="form-label">Прізвище</span>
                            <input
                                className="form-input"
                                type="text"
                                name="last_name"
                                autoComplete="family-name"
                            /></div
                        >
                    </label>
                    <label className="form-field">
                        <div className="form-flex">
              <span className="form-label">Група</span
              ><input className="form-input" type="text" name="group"/></div
                        >
                    </label>
                    <label className="form-field">
                        <div className="form-flex">
              <span className="form-label">Пароль</span
              ><input className="form-input" type="password" name="password"/></div
                        >
                    </label>
                    <div className="flex-down">
                        <a href="" className="pas">
                            <svg className="svg-img" width="30px" height="30px">
                                <use href="./images/sprite.svg#question"></use>
                            </svg>
                            Забули пароль?
                        </a>

                        <button type="submit" className="btn">
                            <a href="./account.html" className="link">Увійти</a>
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default Auth;
