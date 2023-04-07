import Head from "next/head";

export default function Layout({children, tittle = '', description = ''}) {
    return (
        <>
        <Head>
            <title>{`Drinks Web NextJs - ${tittle}`}</title>
            <meta name="description" content={`${description}`}/>
        </Head>
        {children}
        </>
    )
}
