import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

export default function Layout({children, tittle = '', description = ''}) {
    return (
        <>

        <Head>
            <title>{`Drinks Web NextJs - ${tittle}`}</title>
            <meta name="description" content={`${description}`}/>
        </Head>

        <Header/>

        {children}
        
        <Footer/>

        </>
    )
}
