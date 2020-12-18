import React, {useState} from 'react';
import Link from "next/link";

const Form = ({isAuthorized, setIsAuthorized}) => {
    const [pass, setPass] = useState('')
    const [isError, setIsError] = useState(false)

    return (
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
              ><input className="form-input" onChange={({target}) => setPass(target.value)} value={pass} type="password" name="password"/></div
                >
            </label>
            {isError && <p className='error'>Дані введені невірно</p>}
            <div className="flex-down">
                <a href="" className="pas">
                    <svg className="svg-img" width="30px" height="30px">
                        <use href="./images/sprite.svg#question"></use>
                    </svg>
                    Забули пароль?
                </a>
                <Link href="/account">
                <button onClick={(e) => {
                    e.preventDefault();
                    if (pass === 'verySecret') {
                        setIsAuthorized(!isAuthorized)
                    } else {
                        setIsError(true);
                    }
                }} type="submit" className="btn">
                    <a className="link">Увійти</a>
                </button>
                </Link>
            </div>
        </form>
    );
};

export default Form;
