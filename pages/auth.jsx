import React from 'react';
import Form from "../src/components/auth/Form";


const Auth = () => {
    return (
        <main className="main-auth">
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
                <Form />
            </div>
        </main>
    );
};

export default Auth;
