import Layout from '../components/layout/Layout'
import '../styles/globals.scss'
import {SessionProvider} from "next-auth/react";

function MyApp({Component, pageProps, session}) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp
