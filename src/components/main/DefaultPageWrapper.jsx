import Head from 'next/head'
import Header from "./Header";
import Footer from "./Footer";
import {useState} from "react";

export default function Home({children}) {
    const [isAuthorized, setIsAuthorized] = useState(true);

    return (
        <div>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Oleo+Script&family=Raleway:wght@700&family=Roboto:wght@400;500;700;900&display=swap"
                    rel="stylesheet"
                />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/modern-normalize/1.0.0/modern-normalize.min.css"
                />
                <title>Queuelab</title>
            </Head>
            <Header isAuthorized={isAuthorized} setIsAuthorized={setIsAuthorized}/>
            {children(isAuthorized)}
            <Footer/>
        </div>
    )
}