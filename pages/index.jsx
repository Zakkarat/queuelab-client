import React, {useEffect} from "react";
import Link from "next/link";
import {useRouter} from "next/router";

export default function Home({isAuthorized}) {
    const router = useRouter();
    useEffect(() => {
        if (isAuthorized) {
            router.replace('/account')
        }
    })
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
                        <Link href="/auth">
                            <a className="btn enter">Увійти</a>
                        </Link>
                    </li>
                    <li className="item">
                        <Link href="/info">
                            <a  className="btn more">Дізнатися більше</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </main>
    )
}
